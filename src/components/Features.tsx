export default function Features() {
  return (
    <div className="mt-20">
      <div className="flex items-center justify-center my-16">
        <div className="w-8 h-px bg-gray-200"></div>
        <div className="uppercase mx-4 tracking-widest text-gray-500 font-medium text-xs text-center">
          Features
        </div>
        <div className="w-8 h-px bg-gray-200"></div>
      </div>

      <div className="w-[95%] lg:w-[65%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
          {/* Mug Card 1 */}
          <div>
            <div className="h-[400px] sm:h-[540px] bg-[url('./assets/img/featured-mug-01.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="#">
                <div className="h-full w-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300 relative group">
                  <div className="absolute uppercase w-[90%] text-center bottom-4 left-[50%] -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn bg-white p-3 tracking-wider text-gray-800 hover:scale-110 hover:bg-slate-100">
                    Explore Mug
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center mt-8 space-y-3 text-xl hover:text-coffee-200">
              <a href="#">Pink premum Ceramic</a>
              <div className="text-gray-400">$99.00 USD</div>
            </div>
          </div>

          {/* Mug Card 2 */}
          <div>
            <div className="h-[400px] sm:h-[540px] bg-[url('./assets/img/featured-mug-02.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="#">
                <div className="h-full w-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300 relative group">
                  <div className="absolute bg-white text-coffee-200 font-semibold rounded shadow text-center w-[100px] p-3 right-3 top-3">
                    On Sale.
                  </div>
                  <div className="absolute uppercase w-[90%] text-center bottom-4 left-[50%] -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn bg-white p-3 tracking-wider text-gray-800 hover:scale-110 hover:bg-slate-100">
                    Explore Mug
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center mt-8 space-y-3 text-xl hover:text-coffee-200">
              <a href="#">Golden Design Mug</a>
              <div className="text-gray-400 space-x-2">
                <span className="text-coffee-400">$500</span>
                <span className="line-through"> $99.00 USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
