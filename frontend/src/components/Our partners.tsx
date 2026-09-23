import Marquee from "react-fast-marquee";

export default function OurPartners() {
  return (
    <section className="h-fit w-full overflow-hidden bg-[#003C3C] px-4 py-12 md:py-20">
      <h2 className="py-2 text-center text-2xl font-semibold text-white md:py-6 md:text-3xl font-monument">
        Our partners
      </h2>

      <Marquee>
        <div className="mx-8 text-white">Hello</div>
        <div className="mx-8 text-white">World</div>
        <div className="mx-8 text-white">Partners</div>
      </Marquee>
    </section>
  );
}

