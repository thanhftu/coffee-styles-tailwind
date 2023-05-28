import Features from "./components/Features";
import Header from "./components/Header";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="text-base max-w-screen-2xl mx-auto px-8">
      <Header />
      <Slider />
      <Features />
    </div>
  );
}

export default App;
