import { useContext, useEffect } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { Context } from "../../Context";

function Home() {
  const context = useContext(Context);

  const renderView = () => {
      if (context.filteredItems?.length > 0) {
        return (
          <div className="grid gap-12 grid-cols-4 w-full max-w-screen-xl mt-10">
             {context.filteredItems?.map(item => (
              <Card key={item.id} data={item}/>
            ))}
          </div>
        )
        
      } else {
        return (
          <div className="flex w-full items-center justify-center mt-8">
             <div className="flex justify-center text-lg font-semibold w-full">Product not Found in Database</div>
          </div>
        )
      }
  }

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input 
        type="text" 
        placeholder="Search a product" 
        className="rounded border border-black w-80 p-4 mb-4 mt-4 focus:border-blue-500"
        onChange={(event) => context.setSearchValue(event.target.value)}
      />
      {renderView()}
      <ProductDetail />
    </Layout>
  );
}

export { Home };
