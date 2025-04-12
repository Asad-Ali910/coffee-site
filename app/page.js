import Hero from "@/Sections/Hero.jsx";
import Menu from "@/Sections/Menu.jsx";
import VibeWall from "@/Sections/VibeWall";
import BrewProcess from "@/Sections/BrewProcess";
import CoffeeOrigins from "@/Sections/CoffeeOrigins";
import Footer from "@/Sections/Footer";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Hero id="hero" />
      <Menu id="menu" />
      <VibeWall id="vibe-wall" />
      <BrewProcess id="brew-process" />
      <CoffeeOrigins id="coffee-origins" />
      <Footer id="footer" />
    </div>
  );
}
