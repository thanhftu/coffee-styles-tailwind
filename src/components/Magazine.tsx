export default function Magazine() {
  return (
    <div>
      {/* Heading */}
      <div className="flex items-center justify-center my-16">
        <div className="w-8 h-px bg-gray-200"></div>
        <div className="uppercase mx-4 tracking-widest text-gray-500 font-medium text-xs text-center">
          BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE
        </div>
        <div className="w-8 h-px bg-gray-200"></div>
      </div>

      <div className="sm:w-[95%] flex flex-col  md:flex-row gap-5">
        {/* Image */}
        <div className="md:basis-[60%] sm:flex sm:gap-3">
          <div className="sm:basis-2/3 mb-3 h-[280px] bg-[url('./assets/img/magazine-image-01.jpeg')] bg-cover bg-no-repeat bg-center"></div>
          <div className="sm:basis-1/3 flex flex-row sm:flex-col sm:justify-between sm:h-[280px] gap-3">
            <div className="h-[200px] sm:h-[130px] w-[50%] sm:w-full bg-[url('./assets/img/magazine-image-02.jpeg')] bg-cover bg-no-repeat bg-center"></div>
            <div className="h-[200px] sm:h-[130px] w-[50%] sm:w-full bg-[url('./assets/img/magazine-image-03.jpeg')] bg-cover bg-no-repeat bg-center"></div>
          </div>
        </div>

        {/* right side */}
        <div className="text-center md:text-left  md:p-5 space-y-5 md:basis-[40%]">
          <div className="text-coffee-400">PREMIUM OFFER</div>
          <div className="text-2xl tracking-widest font-bold">
            Get our Coffee Magazine
          </div>
          <div className="text-slate-500">
            The most versatile furniture system ever created. Designed to fit
            your life.
          </div>
          <div className="w-[200px] cursor-pointer mx-auto md:mx-0 uppercase text-center bg-slate-900 p-3 tracking-wider text-white">
            Start Shopping
          </div>
        </div>
      </div>
    </div>
  );
}
