import Features from "./components/Features";
import Header from "./components/Header";
import Products from "./components/Products";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="text-base max-w-screen-2xl mx-auto px-8">
      <Header />
      <Slider />
      <Features />
      <Products />
    </div>
  );
}

export default App;
