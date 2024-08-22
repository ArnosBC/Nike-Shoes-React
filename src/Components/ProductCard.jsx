export const ProductCard = ({ Producto, arrow, showDetails }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center sm:max-2xl:hidden">
        {Producto.map((item, index) => (
          <div className="m-2">
            <div key={index} className="w-40 h-60 bg-[#EFEFEF] rounded-2xl">
              <img src={item.image} alt="" />
              <h3 className="font-bold px-5 pt-5">{item.nombre}</h3>
              <div className="flex px-4 gap-14">
                <p>{item.precio}</p>
                <button
                  onClick={() => showDetails(item)}
                  className="flex items-center justify-center rounded-lg size-6 bg-white"
                >
                  <img className="size-4" src={arrow} alt="Arrow" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
