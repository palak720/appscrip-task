
import Head from "next/head";
import { useRouter } from "next/router";
import { fetchProductById } from "../lib/api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Product.module.css";

export default function Product({ product }) {
  const router = useRouter();

  // If page is still loading (Next.js fallback)
  if (router.isFallback) {
    return <p className={styles.loading}>Loading product details...</p>;
  }

  if (!product) {
    return <p className={styles.notFound}>Product not found.</p>;
  }

  return (
    <>
      <Head>
        <title>{product.title} | Throttle Theory</title>
        <meta
          name="description"
          content={product.description?.slice(0, 150) || "Product details"}
        />
      </Head>

      <Header />

      <main className={styles.container}>
        <div className={styles.imageSection}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.image}
            loading="lazy"
          />
        </div>

        <div className={styles.detailsSection}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.category}>{product.category}</p>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>${product.price}</p>

          <button className={styles.addToCart}>Add to Cart</button>
        </div>
      </main>

      <Footer />
    </>
  );
}

/*export async function getStaticPaths() {
  // Fetch all products to pre-generate paths
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  try {
    const product = await fetchProductById(params.id);
    return { props: { product }, revalidate: 60 };
  } catch (error) {
    console.error("Error fetching product:", error);
    return { props: { product: null } };
  }
}


export async function getServerSideProps({ params }) {
  try {
    const product = await fetchProductById(params.id);
    return { props: { product } };
  } catch {
    return { props: { product: null } };
  }
}*/
export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return {
    props: { products }
  }
}
