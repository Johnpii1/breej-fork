import Logo from "../assets/fonts/logoc.svg";

export default function OurPartners() {
  const partners = Array(8).fill(Logo);

  return (
    <section className="h-fit w-full overflow-hidden bg-[#003C3C] px-4 py-12 md:py-20">
      {/* HEADER */}
      <h2 className="py-2 text-center text-2xl font-semibold text-white md:py-6 md:text-3xl font-monument">
        Our partners
      </h2>

      {/* MARQUEE */}
      <div className="relative mt-8 w-full overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#003C3C] to-transparent md:w-40" />

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#003C3C] to-transparent md:w-40" />

        <div className="marquee-track flex w-max">
          {/* ONE SET */}
          <div className="flex shrink-0 items-center gap-16 pr-16 md:gap-28 md:pr-28">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex shrink-0 items-center justify-center"
              >
                <img
                  src={partner}
                  alt="Partner logo"
                  className="h-14 w-auto md:h-[15vh]"
                />
              </div>
            ))}
          </div>

          {/* COPY USED ONLY BY THE ANIMATION */}
          <div
            aria-hidden="true"
            className="flex shrink-0 items-center gap-16 pr-16 md:gap-28 md:pr-28"
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex shrink-0 items-center justify-center"
              >
                <img src={partner} alt="" className="h-14 w-auto md:h-[15vh]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          .marquee-track {
            animation: marquee 45s linear infinite;
          }

          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
}
