export default function OurPartners() {
  const partners = ["Hello", "World", "Partners"];

  return (
    <section className="h-fit w-full overflow-hidden bg-[#003C3C] px-4 py-12 md:py-20">
      <h2 className="py-2 text-center text-2xl font-semibold text-white md:py-6 md:text-3xl font-monument">
        Our partners
      </h2>

      <div className="partner-marquee" aria-label="Our partners">
        <div className="partner-marquee__track">
          {[...partners, ...partners].map((partner, index) => (
            <span className="partner-marquee__item text-white" key={`${partner}-${index}`}>
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
