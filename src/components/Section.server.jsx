import { Link, Image, gql, useShopQuery, CacheLong } from "@shopify/hydrogen";

export default function Section() {
  

  return (
    <section class="text-white bg-red-100">
        <div class="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
            <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-pink-300 via-pink-500 to-pink-600">
                Slider Placeholder

                <span class="sm:block">
               Second Line
                </span>
            </h1>

            <p class="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl text-pink-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
            </p>

            <div class="flex flex-wrap justify-center gap-4 mt-8">
                <a class="block w-full px-12 py-3 text-sm font-medium text-white bg-pink-600 border border-pink-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring" href="/get-started">
                Get Started
                </a>

                <a class="block w-full px-12 py-3 text-sm font-medium text-white border border-pink-600 rounded sm:w-auto hover:bg-pink-600 active:bg-pink-500 focus:outline-none focus:ring" href="/about">
                Learn More
                </a>
            </div>
            </div>
        </div>
    </section>

  
  );
}


