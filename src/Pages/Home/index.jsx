import { useState, useEffect } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";

const API = 'https://fakestoreapi.com/products';

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(data => setItems(data))
  }, []);

  return (
    <Layout>
      <div className="grid gap-12 grid-cols-4 w-full max-w-screen-xl mt-10">
      {
        items?.map(item => (
          <Card key={item.id} data={item}/>
        ))
      }
      </div>
      <ProductDetail />
    </Layout>
  );
}

export { Home };
