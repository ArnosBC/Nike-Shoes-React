import Back from "../assets/back.png";
import Carrito from "../assets/Carrito.png";

const ProductDetails = ({ product, close }) => {
  return (
    <>
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white sm:max-2xl:hidden">
        <div className="w-4/5">
          <div className="flex justify-between px-2">
            <button
              onClick={() => close()}
              className="border border-[#374957] rounded-lg border-indigo-500/20 p-1.5 px-2"
            >
              <img src={Back} alt="" />
            </button>
            <h3 className="font-bold">{product.nombre}</h3>
            <button className="border border-[#374957] rounded-lg border-indigo-500/20 p-1.5">
              <img src={Carrito} alt="" />
            </button>
          </div>
        </div>
        <div className="flex">
          <div>
            <h4 className="font-bold">Size</h4>
            <h5>UK 6</h5>
            <h5>UK 7</h5>
            <h5>UK 8</h5>
            <h5>UK 9</h5>
          </div>
          <div>
            <img className="w-[400px] h-[400px]" src={product.image} alt="" />
          </div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h4></h4>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3>{product.precio}</h3>
            <p>10%OFF</p>
          </div>
          <div>
            <h4></h4>
          </div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
