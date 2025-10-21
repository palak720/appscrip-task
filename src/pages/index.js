import Head from 'next/head';
import { useMemo, useState } from 'react';
import { fetchProducts, fetchCategories } from '../lib/api';
import Header from '../components/Header';
import SidebarFilter from '../components/SidebarFilter';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home({ products, categories }) {
  // Client-only state for UI filters
  const [query, setQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [showFilter, setShowFilter] = useState(true); // visible/hidden sidebar
  const [sort, setSort] = useState('default'); // default, price-asc, price-desc

  // Filtering + sorting derived list
  const filtered = useMemo(() => {
    let list = products.slice();

    // category filter
    if (selectedCategories.size > 0) {
      list = list.filter(p => selectedCategories.has(p.category));
    }

    // text query
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(p => (p.title + ' ' + p.description).toLowerCase().includes(q));
    }

    // sorting
    if (sort === 'price-asc') list.sort((a,b)=>a.price-b.price);
    if (sort === 'price-desc') list.sort((a,b)=>b.price-a.price);

    return list;
  }, [products, selectedCategories, query, sort]);

  // JSON-LD ItemList
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Product Listing - YourBrand",
    "itemListElement": filtered.slice(0, 20).map((p,i)=>({
      "@type":"ListItem",
      "position": i+1,
      "url": `https://your-deployed-url.com/product/${p.id}`,
      "name": p.title
    }))
  };

  return (
    <>
      <Head>
        <title>Discover Our Products — YourBrand</title>
        <meta name="description" content="Discover our products — curated selection. Responsive SSR-rendered product listing page." />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      <Header />

      <main className={styles.container}>
        <div className={styles.hero}>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p className={styles.lead}>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
        </div>

        <div className={styles.controls}>
          <button className={styles.filterToggle} onClick={()=>setShowFilter(s=>!s)}>
            {showFilter ? 'Hide Filters' : 'Show Filters'}
          </button>

          <div className={styles.searchSort}>
            <input
              className={styles.search}
              placeholder="Search products..."
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
              aria-label="Search products"
            />
            <select value={sort} onChange={(e)=>setSort(e.target.value)} aria-label="Sort products">
              <option value="default">Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className={styles.layout}>
          {showFilter && (
            <aside className={styles.sidebar}>
              <SidebarFilter
                categories={categories}
                selectedCategories={selectedCategories}
                onToggleCategory={(cat)=>{
                  setSelectedCategories(prev=>{
                    const next = new Set(prev);
                    if (next.has(cat)) next.delete(cat); else next.add(cat);
                    return next;
                  });
                }}
              />
            </aside>
          )}

          {/*<section className={styles.products} aria-label="Product Grid">
            <div className={styles.grid}>
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>*/}
          <section
  className={`${styles.products} ${showFilter ? styles.withFilter : styles.noFilter}`}
  aria-label="Product Grid"
>
  <div className={styles.grid}>
    {filtered.map((p) => (
      <ProductCard key={p.id} product={p} />
    ))}
  </div>
</section>

        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const [products, categories] = await Promise.all([fetchProducts(), fetchCategories()]);
    return { props: { products, categories } };
  } catch (err) {
    return { props: { products: [], categories: [] } };
  }
}

