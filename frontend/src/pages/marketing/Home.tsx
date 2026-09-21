import Hero from "../../components/Hero";
import OurPartners from "../../components/Our partners";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <div>
        <Hero />
      </div>

      {/* OUR PARTNERS */}
      <div className="mb-4">
        <OurPartners />
      </div>
    </>
  );
}
