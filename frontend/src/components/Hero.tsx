import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section className="flex min-h-[50vh]  flex-col items-center justify-center gap-10 px-8 py-20 md:flex-row md:justify-around md:py-36">
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-6 text-center md:text-left md:gap-10">
        <h1 className="text-5xl font-bold md:text-[8rem] font-times">
          <span className="block">Where jobs</span>
          <span className="block">find you.</span>
        </h1>

        <p className="font-monument text-sm font-medium md:text-3xl">
          <span className="block">
            Untapped is a recruiting platform where candidate find jobs{" "}
          </span>
          <span className="block">
            and get hired by the world's top tech companies.
          </span>
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div>
        <HeroRight />
      </div>
    </section>
  );
}
