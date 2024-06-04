"use client";
// Author: Corey Dai
// Date: June 3rd, 2024
// Description: Economy Page

import Image from "next/image";
import Comic from "../../public/Economy comic.jpg";
import Impact from "../../public/impact of AI.png";
import Patents from "../../public/AI patents.png";
import NavBar from "../components/navBar";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Link from "next/link";

export default function Page() {
  return (
    // Parallax
    <ParallaxProvider>
      <div className="w-full">
        <NavBar />
        {/* Slide 1 */}
        <div className="bg-blue-200 slide overflow-hidden ">
          {/* Left Title */}
          <div className="basis-1/2 w-1/2 flex items-center justify-center p-8">
            <h1 className="text-black font-bold text-7xl text-center">
              Many Fear that AI Will Take Their Jobs
            </h1>
          </div>
          <Image
            src={Comic}
            alt="https://chappatte.com/sites/default/files/styles/thumb/public/2023-03/BG230310c-small_0.jpg?itok=ZIU6yMbg"
            className="w-1/2"
          />
        </div>
        {/* Intermediary */}
        <div className="bg-black w-full flex flex-col justify-end items-center h-64">
          <h3 className="text-white font-bold text-9xl w-full text-center">
            And they{"'"}d be right...
          </h3>
        </div>
        {/* Parallax allows for items to move at different speeds while scrolling */}
        {/* Second slide */}
        <Parallax speed={50}>
          {/* Stats */}
          <div className="slide bg-black  items-center justify-center border-none">
            <div className="basis-1/2 flex flex-col justify-center items-center h-full p-8 border-none">
              <h4 className="text-white font-bold text-8xl mt-24">
                AI is Expected to Take <br />
                <span className="text-red-500">85 Million</span>
                <br /> Jobs
              </h4>
            </div>
            <div className="basis-1/2 flex flex-col justify-center items-center bg-blue-200 p-8 h-screen">
              <h3 className="text-black font-bold text-7xl w-full">
                Except for the fact that...
              </h3>
              <h4 className="text-black font-bold text-5xl mt-24">
                It is Expected to Create{" "}
                <span className="text-green-600">97 Million</span> Jobs
              </h4>
            </div>
          </div>
        </Parallax>
        {/*  Third Slide */}
        <Parallax speed={-10}>
          <div className="slide bg-black  justify-center items-center">
            <h1 className="text-8xl font-bold blue-text text-center">
              The Real Threat is Being Outpaced By Those Who Use AI in the
              Workplace
            </h1>
          </div>
        </Parallax>
        {/* 4th Slide */}
        <Parallax speed={30}>
          <div className="slide bg-blue-200 ">
            <div className="basis-1/2 flex justify-center items-center">
              <h1 className="text-7xl font-bold text-black text-center">
                Employers are looking for People Skilled at Using AI
              </h1>
            </div>
            <div className="basis-1/2 flex justify-center items-center bg-white p-24">
              <ol className="list-disc w-full">
                <li className="text-5xl text-black">
                  People with AI skills make 44% higher wages
                </li>
                <li className="text-5xl text-black mt-12">
                  People involved with AI research and development earn, on
                  average, 41% more
                </li>
              </ol>
            </div>
          </div>
        </Parallax>
        {/* Facts and Statistics */}
        <Parallax speed={-10}>
          <div className="bg-black slide  p-8">
            <div className=" basis-1/2 flex flex-col items-center">
              <h1 className="font-bold text-9xl blue-text mb-12 w-full">
                Besides...
              </h1>
              <h3 className=" text-white text-7xl font-semibold">
                It is estimated that AI will account for{" "}
                <span className="font-bold text-green-600">$900 Billion</span>{" "}
                of annual global revenue by 2026
              </h3>
            </div>
            <div className="basis-1/2 p-8">
              <p className="text-white">
                Showing the impact of AI on several business operations. Graph
                from{" "}
                <Link
                  href={`https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier#business-value`}
                  className="underline text-cyan-400"
                  target="_blank"
                >
                  Mckinsey
                </Link>
              </p>
              <Image
                src={Impact}
                alt="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier#business-value"
                className=" rounded-2xl"
              ></Image>
            </div>
          </div>
          <div className="bg-black slide  p-8">
            <div className="basis-1/2 p-8">
              <p className="text-white">
                The impact of AI is also visible through metrics on AI patents.
                Graph from the{" "}
                <Link
                  href={`https://www.europarl.europa.eu/RegData/etudes/BRIE/2019/637967/EPRS_BRI(2019)637967_EN.pdf`}
                  className="underline text-cyan-400"
                  target="_blank"
                >
                  European Parliament
                </Link>
              </p>
              <Image
                src={Patents}
                alt="https://www.europarl.europa.eu/RegData/etudes/BRIE/2019/637967/EPRS_BRI(2019)637967_EN.pdf"
                className=" rounded-2xl"
              ></Image>
            </div>
            <div className=" basis-1/2 flex flex-col items-center">
              <h1 className="font-bold text-9xl blue-text mb-12 w-full">
                And...
              </h1>
              <h3 className=" text-white text-7xl font-semibold">
                By 2030, it is expected that a total amount of{" "}
                <span className="font-bold text-green-600">$15.7 Trillion</span>{" "}
                will be contributed to the economy by AI.
              </h3>
            </div>
          </div>
        </Parallax>
        <Parallax speed={30}>
          <div className="slide bg-blue-200 ">
            <div className="basis-1/2 flex justify-center items-center p-8">
              <h3 className="font-bold text-black text-7xl text-center">
                As a Member of the Workforce, How Can You Keep Up?
              </h3>
            </div>
            <div className="basis-1/2 flex flex-col justify-center py-8">
              {/* Info cards with title and text */}
              <div className="mb-12 info-tab">
                <h3 className="info-title">Learn AI</h3>
                <p className="info-text">
                  Whether it{"'"}s through trying it out yourself and figuring
                  it out on your own, or taking a course, the best thing you can
                  do is learn. AI is going to be a big part of the future so it
                  is important to keep up. In addition, it can be helpful to
                  seek learning opportunities within your workplace. Also, AI
                  can make you more productive, automating tasks that take up
                  60-70% of your time.
                </p>
              </div>
              <div className="info-tab">
                <h3 className="info-title">Keep Up With the News</h3>
                <p className="info-text">
                  Along with learning about how to use AI, it can be helpful to
                  keep up with the development of the technology. Always stay
                  active in terms of staying up to date so you know what is
                  coming in the future. This can help you better plan for your
                  own future.
                </p>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}
