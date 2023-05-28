function Slider() {
  return (
    <div className="w-full h-[500px] bg-[url('./assets/slider-bg.jpeg')] bg-no-repeat bg-cover bg-bottom">
      <div className="flex flex-col justify-center items-center gap-3 w-full h-full bg-gray-900 bg-opacity-40">
        <div className="text-white mx-16 text-center flex flex-col justify-center items-center gap-5">
          <div className="text-white font-semibold mb-6">
            BEST PLACE TO BUY DESIGN
          </div>
          <div className="text-white font-bold text-5xl">Coffee Mugs</div>
          <div className="text-white font-bold text-xl">
            The most versatile furniture system ever created. Designed to fit
            your life, made to move and grow.
          </div>
          <div className="flex justify-center">
            <div className="uppercase bg-white p-3 tracking-wider text-gray-800 hover:scale-110 hover:bg-slate-100">
              Explore Our Products
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
