import Navbar from "../Navbar";
import Hero from "./Hero";
import Info from "./Info";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="w-full px-15 md:px-16 mt-20 flex flex-col lg:flex-row justify-center items-center ">
        <Hero />
        <Info />
      </div>
    </>
  );
}

export default HomePage;
