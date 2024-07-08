"use client";
import Image from "next/image";
import { TabsUI } from "./ui/tabs";
import dailySpecials from "../public/menu/daily-specials.jpg";
import happyHour from "../public/menu/happy-hour.png";
import food1 from "../public/menu/food1.jpg";
import food2 from "../public/menu/food2.jpg";
import nigiriSashimi from "../public/menu/nigirisashimi.jpg";
import sushiRolls from "../public/menu/sushirolls.jpg";
import sake from "../public/menu/sake.jpg";
import cocktails from "../public/menu/cocktails.jpg";
import spirits from "../public/menu/spirits.jpg";
import desserts from "../public/menu/dessert.png";

export function Tabs() {
  const tabs = [
    {
      title: "Daily Specials",
      value: "dailySpecials",
      content: (
        <div className="w-full relative rounded-2xl p-10 bg-dark flex flex flex-col">
          <Image src={dailySpecials} alt="daily specials menu" />
        </div>
      ),
    },
    {
      title: "Happy Hour",
      value: "happyHour",
      content: (
        <div className="w-full relative rounded-2xl p-10 bg-dark flex flex-col">
          <Image src={happyHour} alt="happy hour menu" />
        </div>
      ),
    },
    {
      title: "Food",
      value: "food",
      content: (
        <div className="w-full relative rounded-2xl p-10 bg-dark flex flex-col">
          <Image src={food1} alt="food menu part one" />
          <Image src={food2} alt="food menu part two" />
        </div>
      ),
    },
    {
      title: "Sushi",
      value: "sushi",
      content: (
        <div className="w-full relative rounded-2xl p-10 bg-dark flex flex-col">
          <Image src={nigiriSashimi} alt="nigiri and sashimi menu" />
          <Image src={sushiRolls} alt="sushi rolls menu" />
        </div>
      ),
    },
    {
      title: "Sake",
      value: "sake",
      content: (
        <div className="w-full relative rounded-2xl p-10 bg-dark flex flex-col">
          <Image src={sake} alt="sake menu" />
        </div>
      ),
    },
    {
      title: "Drinks",
      value: "drinks",
      content: (
        <div className="w-full relative rounded-2xl p-10 bg-dark flex flex-col">
          <Image src={cocktails} alt="cocktail menu" />
        </div>
      ),
    },
    {
      title: "Spirits",
      value: "spirits",
      content: (
        <div className="w-full relative rounded-2xl p-10 bg-dark flex flex-col">
          <Image src={spirits} alt="spirits menu" />
        </div>
      ),
    },
    {
      title: "Desserts",
      value: "desserts",
      content: (
        <div className="w-full relative rounded-2xl p-10 bg-dark flex flex-col">
          <Image src={desserts} alt="desserts menu" />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-7xl mx-auto w-full items-start justify-start">
      <TabsUI tabs={tabs} />
    </div>
  );
}
