import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Service from "./components/service";
import Product from "./components/product";
import Projects from "./components/projects";
import Philosophy from "./components/philosophy";
import Development from "./components/development";

export default function Index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Product />
      <Projects />
      <Philosophy />
      <Development />
    </div>
  );
}
