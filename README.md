
# 🏎️ Appscrip-task

## 🧥 F1-Inspired Streetwear — Product Listing Page (PLP)

This project is a **Next.js Product Listing Page (PLP)** demo built for **F1-inspired streetwear**.  
It demonstrates **Server-Side Rendering (SSR)**, **responsive design** for mobile and tablet, **SEO optimization**, and uses **Fakestore API** as a mock backend.

---

## 🚀 Live Demo

The page is hosted on Netlify:  
👉 [**Live PLP Demo**](https://appscrip-task-7e293b.netlify.app/)  


---

## 🧱 Features

- ⚛️ **Next.js with React.js** – Functional PLP implementation  
- 🧠 **Server-Side Rendering (SSR)** – Data fetched on each request using `getServerSideProps`  
- 📱 **Responsive Design** – Optimized for desktop, tablet, and mobile screens  
- 🔍 **SEO Optimized**
  - Custom page title and meta description  
  - Proper H1 & H2 hierarchy  
  - SEO-friendly images with descriptive alt text  
  - JSON-LD schema markup for products  
- 💾 **Dynamic Data** – Uses [Fakestore API](https://fakestoreapi.com/) for mock data  
- 🧩 **Clean Code** – Minimal dependencies, semantic HTML, and modular structure  

---

---

## ⚙️ Installation & Running Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/palak720/appscrip-task
cd appscrip-task

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev

4️⃣ Open in browser
http://localhost:3000/plp

🧰 Deployment

This project is configured for Netlify deployment with SSR support using @netlify/plugin-nextjs.

🪶 netlify.toml Configuration
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "22"

  ➡️ Steps:

Push your project to GitHub

Connect the repo to Netlify

Netlify will automatically build and deploy your app.

🔧 Key Implementation Details
⚙️ Server-Side Rendering (SSR)
export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return {
    props: { products },
  };
}


✅ Ensures fresh data is served on every request
✅ Improves SEO by pre-rendering HTML with product data

🧭 SEO Optimization

<Head> includes title, meta description, and JSON-LD schema

H1 / H2 tags for hierarchy

Images use alt text and SEO-friendly filenames

Example JSON-LD schema:

{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "F1 Streetwear Collection",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Product 1", "url": "https://site.com/product/1" }
  ]
}











This is a [Next.js](https://nextjs.org) project 
bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
