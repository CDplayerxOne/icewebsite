"use client";
// Author: Corey Dai
// Date: June 3rd, 2024
// Description: Home Page

import Image from "next/image";
import bannerBackground from "../public/background.gif";
import secondBanner from "../public/MainPageBackground2.jpg";
import secondOverlay from "../public/MainPageLeft.jpg";
import Education from "../public/Teacher.jpg";
import Stock from "../public/Stock.jpg";
import NavBar from "./components/navBar";

import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";
import Link from "next/link";

export default function Home() {
  return (
    <ParallaxProvider>
      <div className="w-full">
        <NavBar />
        <Parallax speed={-20}>
          <ParallaxBanner className="aspect-video z-0">
            <ParallaxBannerLayer speed={0} className="flex justify-center">
              <div className="w-full">
                <Image
                  src={bannerBackground}
                  className="w-full h-full max-w-none mt-8 brightness-50"
                  alt="https://miro.medium.com/v2/resize:fit:1358/0*AU3rmB08Vntf33Is"
                />
              </div>
            </ParallaxBannerLayer>
            <ParallaxBannerLayer speed={-25}>
              <div className="absolute inset-0 flex w-full items-center justify-center">
                <h1 className="text-8xl text-white font-bold text-center">
                  AI Insights: Exploring the Implications of AI
                </h1>
              </div>
            </ParallaxBannerLayer>
            <ParallaxBannerLayer speed={-25}></ParallaxBannerLayer>
          </ParallaxBanner>
        </Parallax>
      </div>
      <div className="overflow-hidden">
        <div className="w-full h-screen absolute z-10 flex">
          <div className="h-full w-1/2 flex justify-center items-center">
            <div className="bg-black rounded-xl border-2 w-1/2 border-blue-100">
              <h1 className="font-bold text-5xl text-blue-200 m-8">
                What is AI?
              </h1>
              <p className="text-white text-lg mx-8 mb-8">
                AI or artificial intelligence describes the ability for machines
                to replicate human-like intelligence. <br />
                <br />
                This form of intelligence is generally recognizable when a
                machine exhibits the ability to learn and adapt. <br /> <br />
                Generally, this capability requires the input of large amounts
                of data to be analyzed by a machine learning model.
              </p>
            </div>
          </div>
          <div className="h-full w-1/2 flex justify-center items-center overflow-hidden">
            <Image
              src={secondOverlay}
              alt="firefly generated"
              className="h-full brightness-90"
            />
          </div>
        </div>
        <Image
          src={secondBanner}
          className="h-screen overflow-hidden brightness-50"
          alt="firefly generated"
        />
      </div>
      <div className="w-full">
        <p className="text-white m-16 font-bold text-5xl">
          As technology has advanced, so have the capabilities of AI. AI has now
          become more widespread and widely used as ever. Its impact now spans a
          wide array of industry sectors.{" "}
          <span className="text-6xl text-blue-100">
            <br />
            <br />
            This page is dedicated to exploring the impact of AI on our lives.{" "}
          </span>
        </p>
      </div>
      <Parallax speed={30}>
        <div className="slide bg-blue-200 flex-col pt-16">
          <div className="h-24 flex justify-center">
            <h1 className="text-7xl font-bold m-8">Explore Sectors</h1>
          </div>
          <div className="grow flex items-center justify-center">
            {/* Cards with information */}
            <div className="card mr-16  shadow-xl">
              <Image
                src={Education}
                alt="firefly generated teacher teaching students"
                className="card-image"
              />
              <div className="card-container">
                <h2 className="card-title">Education</h2>
                <p className="card-text">
                  With the rise of generative AI such as ChatGPT, Gemini and
                  other tools, the landscape in the classroom has completely
                  changed.
                </p>
                <Link href={"/education"}>
                  <button className="card-button">Learn More</button>
                </Link>
              </div>
            </div>
            <div className="card ml-16  shadow-xl">
              <Image
                src={Stock}
                alt="firefly generated teacher teaching students"
                className="card-image"
              />
              <div className="card-container">
                <h2 className="card-title">Economy</h2>
                <p className="card-text">
                  The industry of producing AI is rapidly growing and is on
                  course to accumulate a value increasing in the billions per
                  year. The use of AI within companies and organizations has
                  also revolutionized work.
                </p>
                <Link href={"/economy"}>
                  <button className="card-button">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </Parallax>
    </ParallaxProvider>
  );
}
