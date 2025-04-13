import Hero from "@/Sections/Hero.jsx";
import Menu from "@/Sections/Menu.jsx";
import VibeWall from "@/Sections/VibeWall";
import BrewProcess from "@/Sections/BrewProcess";
import CoffeeOrigins from "@/Sections/CoffeeOrigins";
import Footer from "@/Sections/Footer";

// ✅ Make Home an async server component
export default async function Home() {
  let menuData = [];

  try {
    const res = await fetch("https://api.sampleapis.com/coffee/hot", {
      next: { revalidate: 60 }, // optional caching for 1 min
    });
    const rawData = await res.json();

    // Add random price
    menuData = rawData.slice(0, 8).map((item) => ({
      ...item,
      price: (Math.random() * 3 + 2).toFixed(2),
    }));
  } catch (err) {
    console.error("Failed to fetch menu data:", err);
  }

  return (
    <div className="scroll-smooth">
      <Hero id="hero" />
      <Menu id="menu" menuData={menuData} />
      <VibeWall id="vibe-wall" />
      <BrewProcess id="brew-process" />
      <CoffeeOrigins id="coffee-origins" />
      <Footer id="footer" />
    </div>
  );
}
