"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PiLockThin } from "react-icons/pi";
import Image from "next/image";
import Status from "@/app/Status/page";
import { motion } from 'framer-motion';

const marqueeVariants = {
    animate: {
        x: [0, -1035],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 11,
                ease: "linear",
            },
        },
    },
};

const projects = [
  {
    imgLink: "/img/img1.jpg",
    title: "UI/UX Case Study: Group Food Ordering",
    subT: "Designed a solution that simplifies the decision-making process and saves time for users while ordering food in a group.",
  },
  {
    imgLink: "/img/img2.jpg",
    title:
      "UI/ UX Case Study: Enabling local stores to sell on WhatsApp for Businesses",
    subT: "Designed a feature that simplifies local store sales on WhatsApp for businesses..",
  },
  {
    imgLink: "/img/img3.jpg",
    title: "Creating Dive platform's Trivia Game",
    subT: "Designed a trivia game to enhance user engagement during sessions on Dive platform.",
  },
];

let link = [
  {
    date: "Dec 2022 - Apr 2023",
    imgLink: "/img/img6.jpg",
    title: "Product Design Intern",
    sub: "Avalon Scenes",
    subTitle:
      "At Scenes, we were building an all-in-one community platform that enables creators to connect & manage their community better.",
    bttn: "View my work",
  },
  {
    date: "Jul 2022 - Sep 2022",
    imgLink: "/img/img3.jpg",
    title: "Designer in Residence",
    sub: "10kdesigners",
    subTitle:
      "Design cohort run by Abhinav Chikara (aka Abnux) and Jayneil Dayal, that empowers designers through mentorship and real-world projects.",
  },

  {
    date: "Jan 2022 - Mar 2022",
    imgLink: "/img/img2.jpg",
    title: "Product Design Intern",
    sub: "Dive",
    subTitle:
      "I built and facilitated engaging remote experiences, connecting colleagues at work. I designed various games, including 'Word Pirate,' which became one of the platform's most-played games within two weeks of launch.",
  },
  {
    date: "Sep 2021 - Dec 2021 ",
    imgLink: "/img/img2.jpg",
    title: "Product Design Intern",
    sub: "Winuall",
    subTitle:
      "I focused on visual and interaction design for the product, crafting compelling narratives. My responsibilities included creating interactive features that enriched user experiences on both the app and website.",
  },
];

function page() {
  const [show, setShow] = useState(link[0]);
  return (
    <div className="mt-32">
      <div className="flex gap-x-4">
        <Image
          className="w-16 h-16 rounded-full object-cover"
          src={"/img/img3.jpg"}
          width={250}
          height={250}
          alt=""
        />
        <div>
          <h2 className="font-extrabold font-InterBlack dark:text-white text-3xl">
            danutavram
          </h2>
        </div>
        <Link href={"https://www.linkedin.com/in/avramnicolaedan/"}>
          <span className="text-neutral-500">@ Danut</span>
        </Link>
        <Status isAvailable />
      </div>

      <div className="mt-6 max-w-3xl">
        <h3 className="text-neutral-500 text-xs font-InterBold uppercase">
          About Me
        </h3>

        <p className="dark:text-neutral-300 font-InterMedium mt-3">
          I’m crafting exceptional products that blend Design and Engineering.
          Making Impactful experiences with beauty and function. Currently ,
          looking for new opportunities to collaborate with people.
        </p>
        <p className="mt-6 dark:text-neutral-300 max-sm:text-sm font-InterMedium">
          My objective is straightforward, to create exceptional things
          alongside exceptional individuals. By collaborating harmoniously, we
          can accomplish this goal.
        </p>

        <button className="mt-10 border border-neutral-700/30 rounded-md p-2 w-full lg:w-44 bg-neutral-800/20 text-sm dark:text-neutral-400 font-semibold">
            View resume
        </button>
      </div>

      {/* Marquee text */}

<div>
    <div className="marquee relative my-24 h-10 max-w-6xl overflow-x-hidden">
        <div className="bg-gradient-to-r absolute z-10 from-[#fff] via-[#fff] dark:from-[#161616] dark:via-[#161616] to-transparent w-20 rounded-md h-9 transition-all ease-in duration-200" />
            <motion.div className="track" variants={marqueeVariants} animate="animate">
                <div>
                Project Project Project Project Project Project Project Project
                Project Project Project Project Project Project Project Project
                Project Project Project Project Project Project Project Project
                Project Project Project Project Project Project Project
                </div>
            </motion.div>
            <div />
        </div>
</div>

    </div>
  );
}

export default page;
