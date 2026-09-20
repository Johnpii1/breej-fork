import HeroRight from "./HeroRight"

export default function Hero() {
  return (
    <section className="flex min-h-[50vh]  flex-col items-center justify-center gap-10 px-8 py-20 md:flex-row md:justify-around md:py-36">
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-6 text-center md:text-left md:gap-10">
        <h1 className="font-times text-6xl font-bold md:text-[9.5rem]">
          Where jobs
          <br />
          find you.
        </h1>

        <p className="font-monument text-md font-medium md:text-3xl">
          Untapped is a recruiting platform where candidate find
          <br />
          jobs and get hired by the world's top tech companies.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div>
        <HeroRight />
      </div>
    </section>
  );
}
