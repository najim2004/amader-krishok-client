import React from "react";
import { ProductCard } from "./ProductCard";

export const TodayBestSellingProducts: React.FC = () => {
  return (
    <section className="mt-10">
      <h3 className="text-2xl text-color-primary font-semibold">
        Todays Best Selling Products
      </h3>
      {/* <div className="mt-8 flex items-center justify-start gap-4 lg:gap-6 w-screen overflow-x-auto text-nowrap pb-2">
        <button className="px-3.5 lg:px-6 py-1 lg:py-1.5 rounded-full text-white bg-primary text-base lg:text-lg font-medium border">
          All
        </button>
        <button className="px-3.5 lg:px-6 py-1 lg:py-1.5 rounded-full bg-transparent text-primary text-base lg:text-lg font-medium bg-white hover:bg-primary hover:text-white">
          Chicken
        </button>
        <button className="px-3.5 lg:px-6 py-1 lg:py-1.5 rounded-full bg-transparent text-primary text-base lg:text-lg font-medium bg-white hover:bg-primary hover:text-white">
          Tomatoes
        </button>
        <button className="px-3.5 lg:px-6 py-1 lg:py-1.5 rounded-full bg-transparent text-primary text-base lg:text-lg font-medium bg-white hover:bg-primary hover:text-white">
          Bananas
        </button>
        <button className="px-3.5 lg:px-6 py-1 lg:py-1.5 rounded-full bg-transparent text-primary text-base lg:text-lg font-medium bg-white hover:bg-primary hover:text-white">
          Cat Fish
        </button>
        <button className="px-3.5 lg:px-6 py-1 lg:py-1.5 rounded-full bg-transparent text-primary text-base lg:text-lg font-medium bg-white hover:bg-primary hover:text-white">
          Dragon Fruit
        </button>
      </div> */}
      <div className="display-grid mt-10">
        {[...Array(12)].map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </section>
  );
};
