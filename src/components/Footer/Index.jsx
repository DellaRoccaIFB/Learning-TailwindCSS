import React from "react";

export default function Footer({ data }) {
  return (
    <div className="flex w-full flex-col gap-y-6 bg-[#f9f9f9] px-8 py-3 md:pl-8 md:pr-32 lg:flex-row-reverse lg:justify-between lg:px-16 lg:py-8">
      <div className="flex flex-col gap-y-4 md:gap-y-6 lg:w-1/2">
        <h3 className="font-lato text-base font-bold md:text-lg lg:text-xl">
          Newsletter
        </h3>
        <div className="relative flex flex-col gap-y-3 lg:h-8 lg:flex-row">
          <input
            invalid={true}
            className="peer h-6 w-full border pl-2 font-lato text-xs placeholder-transparent focus:rounded-sm focus:border-2 focus:border-primary focus:outline-none md:h-8 md:text-base lg:h-full"
            placeholder="email"
            type="text"
            name="email"
            id="email"
          />
          <label
            for="email"
            className="absolute -top-4 left-2.5 cursor-text font-lato text-xs font-medium text-gray-700 transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-gray-700 md:-top-5 md:text-base md:peer-focus:-top-5"
          >
            Email
          </label>
          <button
            className="w-full rounded-sm bg-primary py-1 font-lato text-sm text-white transition-all hover:scale-[102%] md:text-base lg:h-full lg:w-1/3"
            type="submit"
          >
            Inscrever
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:w-1/2">
        {data.map((item) => (
          <div className="flex max-w-fit flex-col">
            <a
              className="font-lato text-xs font-bold hover:text-primary md:text-base"
              href={item.url}
              target="_blank"
            >
              {item.name}
            </a>
          </div>
        ))}
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}
