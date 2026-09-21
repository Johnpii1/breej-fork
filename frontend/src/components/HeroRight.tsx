export default function HeroText() {
  return (
    <section className="h-fit w-full rounded-lg bg-[#FAF9F6] text-white md:w-[24vw]">
      <div className="flex flex-row gap-2 rounded-tl-lg rounded-tr-lg bg-black px-2 py-3 md:gap-3 md:px-3 md:py-5">
        {/* FIRST CIRCLE */}
        <div className="size-4 shrink-0 rounded-full bg-gray-500 md:size-6"></div>

        {/* SECOND CIRCLE */}
        <div className="size-4 shrink-0 rounded-full bg-gray-500 md:size-6"></div>

        {/* THIRD CIRCLE */}
        <div className="size-4 shrink-0 rounded-full bg-gray-500 md:size-6"></div>
      </div>

      <div className="flex flex-col gap-5 px-3 py-8 font-monument md:gap-6 md:px-6 md:py-14">
        {/* FIRST BOX */}
        <div className="flex min-w-0 flex-row items-center gap-2 rounded-lg border-[1.5px] border-gray-300 p-2 text-black md:gap-4 md:px-4 md:py-4">
          <div className="size-9 shrink-0 rounded-md bg-red-400 md:size-16"></div>

          <h3 className="shrink-0 text-xs font-bold md:text-xl lg:text-2xl">
            Airbnb
          </h3>

          <span className="size-1 shrink-0 rounded-full bg-black"></span>

          <p className="min-w-0 flex-1 truncate text-xs md:text-base lg:text-lg">
            Congrates! ...
          </p>

          <button className="shrink-0 cursor-pointer rounded-lg border-[1.5px] border-green-600 px-2 py-1 text-xs font-semibold text-green-600 md:px-3 md:py-2 md:text-sm">
            Offer!
          </button>
        </div>

        {/* SECOND BOX */}
        <div className="flex min-w-0 flex-row items-center gap-2 rounded-lg border-[1.5px] border-gray-300 p-2 text-black md:gap-4 md:px-4 md:py-4">
          <div className="size-9 shrink-0 rounded-md bg-blue-400 md:size-16"></div>

          <h3 className="shrink-0 text-xs font-bold md:text-xl lg:text-2xl">
            Dropbox
          </h3>

          <span className="size-1 shrink-0 rounded-full bg-black"></span>

          <p className="min-w-0 flex-1 truncate text-xs md:text-base lg:text-lg">
            We saw ...
          </p>

          <button className="shrink-0 cursor-pointer rounded-lg border-[1.5px] border-blue-400 px-2 py-1 text-xs font-semibold text-blue-400 md:px-3 md:py-2 md:text-sm md:hover:bg-blue-500 md:hover:text-white">
            Offer!
          </button>
        </div>

        {/* THIRD BOX */}
        <div className="flex min-w-0 flex-row items-center gap-2 rounded-lg border-[1.5px] border-gray-300 p-2 text-black md:gap-4 md:px-4 md:py-4">
          <div className="size-9 shrink-0 rounded-md bg-pink-500 md:size-16"></div>

          <h3 className="shrink-0 text-xs font-bold md:text-xl lg:text-2xl">
            Lyft
          </h3>

          <span className="size-1 shrink-0 rounded-full bg-black"></span>

          <p className="min-w-0 flex-1 truncate text-xs md:text-base lg:text-lg">
            Hi Alicia! I'm Ka...
          </p>

          <button className="shrink-0 cursor-pointer rounded-lg border-[1.5px] border-pink-600 px-2 py-1 text-xs font-semibold text-pink-500 md:px-3 md:py-2 md:text-sm md:hover:bg-pink-500 md:hover:text-white">
            Offer!
          </button>
        </div>
      </div>
    </section>
  );
}