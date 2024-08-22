import "./App.css";
import { ProductCard } from "./Components/ProductCard";
import { Producto } from "./data/Producto";
import flechita from "./assets/flecha.png";
import GreenShoes from "./assets/Green1.png";
import Menu from "./assets/menu.png";
import Shop from "./assets/shop.png";
import Home from "./assets/home.png";
import Favorite from "./assets/favorite.png";
import Noti from "./assets/noti.png";
import perfil from "./assets/perfil.png";
import ProductDetails from "./Components/ProductDetails";
import { useState } from "react";

function App() {
  const [SelectProduct, setSelectProduct] = useState();
  
  const showDetails = (producto) => {
    setSelectProduct(producto);
  };
  const backDetails = () => {
    setSelectProduct(false);
  };
  return (
    <>
      <div className="flex flex-col items-center sm:max-2xl:hidden w-full">
        <div className="flex justify-between mt-5 w-11/12">
          <button className="border border-[#374957] rounded-lg border-indigo-500/20 p-1.5">
            <img src={Menu} alt="" />
          </button>
          <button className="border border-[#374957] rounded-lg border-indigo-500/20 p-1.5">
            <img src={Shop} alt="" />
          </button>
        </div>
        <div className="flex items-center bg-[#EFEFEF] w-96 h-[170px] rounded-xl relative my-5">
          <div className="ml-8">
            <h3 className="font-bold text-2xl">
              <span className="font-weight text-4xl">20%</span> Discount
            </h3>
            <p className="font-medium">on your first purchase</p>
            <button className="mt-5 bg-black text-white rounded-full px-8 py-2.5 text-sm font-bold">
              Shop now
            </button>
          </div>
          <div>
            <img className="absolute right-0 top-0" src={GreenShoes} alt="" />
          </div>
        </div>
        <div className="flex justify-center gap-10 mb-3 w-full">
          <button className="rounded-full bg-black text-white py-1 px-5 font-semibold">
            All
          </button>
          <button className="font-semibold text-[#9C9C9C]">Running</button>
          <button className="font-semibold text-[#9C9C9C]">Sneakers</button>
          <button className="font-semibold text-[#9C9C9C]">Formal</button>
        </div>
        <ProductCard
          Producto={Producto}
          arrow={flechita}
          showDetails={showDetails}
        />
        <div className="flex justify-between w-11/12">
          <button>
            <img src={Home} alt="" />
          </button>
          <button>
            <img src={Favorite} alt="" />
          </button>
          <button>
            <img src={Noti} alt="" />
          </button>
          <button>
            <img src={perfil} alt="" />
          </button>
        </div>
      </div>

      {SelectProduct && <ProductDetails product={SelectProduct} close={backDetails} />}
    </>
  );
}

export default App;
