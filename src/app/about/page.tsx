import Link from "next/link";
import React from "react";
import { TbArrowBackUp, TbBrandVscode } from "react-icons/tb";
import {
  SiNotion,
  SiAdobeaftereffects,
  SiFigma,
  SiSpotify,
  SiDiscord,
  SiGooglechrome,
  SiActivision,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";
import Image from "next/image";

function Aboutpage() {
  return (
    <div>
      <div className="relative max-w-5xl mx-auto px-8">
        <div className="relative mt-14">
          <h2 className="text-xl text-center dark:text-neutral-400 font-InterBold uppercase hover:-translate-y-3 duration-500">
            About me
          </h2>
          <Link href={"/"}>
            <div className=" bg-neutral-700/10 rounded-md absolute -top-1  w-12 h-8 flex  items-center justify-center ">
              <TbArrowBackUp className="dark:text-white  text-black text-xl" />
            </div>
          </Link>
        </div>

        <div className="mt-10">
          <Image
            width={100}
            height={384}
            className="w-full h-96 rounded-lg object-cover"
            src="/img/img6.jpg"
            alt=""
          />
          <h4 className="my-11 font-InterBold">Lorem ipsum</h4>

          <p className="my-9">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vivamus id hendrerit justo. Sed feugiat,
            libero in suscipit auctor, augue quam fermentum ante, nec fermentum
            felis justo ut libero. Fusce sit amet augue at ipsum dignissim
            egestas. Sed dictum tortor vel erat feugiat varius.
          </p>

          <h4 className="my-10 font-InterBold">Lorem ipsum</h4>

          <p className="my-10">
            Vivamus auctor, libero a rhoncus pellentesque, urna tellus facilisis
            nulla, et bibendum justo elit a libero. In congue erat nec
            tristique. Phasellus eu eros at massa luctus tempus in a ipsum. Sed
            vel semper orci, a suscipit ligula. Nulla facilisi. Curabitur
            facilisis risus a metus ullamcorper, a ullamcorper odio hendrerit.
          </p>

          <h4 className="font-InterBold">Lorem ipsum</h4>

          <div className="flex gap-x-6 justify-around    mt-16">
            <SiHtml5 className="text-[#e34c26] text-2xl hover:-translate-y-3  duration-500 " />
            <SiCss3 className="text-[#2e598a] text-2xl hover:-translate-y-3  duration-500" />
            <SiTailwindcss className="text-[#84ceeb] text-2xl hover:-translate-y-3  duration-500" />
            <SiJavascript className="text-[#F0DB4F] text-2xl hover:-translate-y-3  duration-500" />
            <SiNodedotjs className="text-[#099448] text-2xl hover:-translate-y-3  duration-500" />
            <SiReact className="text-[#54a3c2] text-2xl hover:-translate-y-3  duration-500"/>
            <SiNextdotjs className="text-2xl hover:-translate-y-3  duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
