"use client";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import NavBar from "../components/navBar";
import { useState } from "react";
import Image from "next/image";
import ToolsImage from "../../public/AI Tools Logos.png";

export default function Page() {
  const [correct, setCorrect] = useState<"left" | "right" | null>();
  return (
    <ParallaxProvider>
      <div className="w-full">
        <NavBar />
        <div className="w-full h-screen flex-col flex bg-black px-8">
          <h1 className="w-full flex justify-center text-9xl text-blue-200 font-bold mt-24 text-center text-wrap">
            Can You Guess Which Passage is AI Generated?
          </h1>
          <div className="grow flex">
            <div className="basis-1/2 flex justify-center items-center">
              <button
                className={`w-5/6 h-5/6 rounded-xl p-4 ${
                  correct == "left"
                    ? "bg-red-600 hover:bg-red-500"
                    : "bg-gray-900 hover:bg-gray-800"
                }`}
                onClick={() => setCorrect("left")}
                disabled={correct != null}
              >
                {correct == "left" && (
                  <div className="flex w-full justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-24 stroke-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                )}
                <pre className="text-white text-wrap">
                  Heisenberg’s uncertainty principle states that to gain a more
                  accurate measurement of one property of an object, we must
                  sacrifice accuracy in measuring another property of an object.{" "}
                </pre>
              </button>
            </div>
            <div className="basis-1/2 flex justify-center items-center">
              <button
                className={`w-5/6 h-5/6 rounded-xl p-4 ${
                  correct == "right"
                    ? "bg-green-600 hover:bg-green-500"
                    : "bg-gray-900 hover:bg-gray-800"
                }`}
                onClick={() => setCorrect("right")}
                disabled={correct != null}
              >
                {correct == "right" && (
                  <div className="flex w-full justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-24 stroke-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                )}
                <pre className="text-white text-wrap">
                  Heisenberg{"'"}s uncertainty principle states that the more
                  precisely we know the position of a particle, the less
                  precisely we can know its momentum, and vice versa,
                  fundamentally limiting our ability to simultaneously determine
                  both properties accurately. This principle arises from the
                  wave-particle duality of quantum mechanics and challenges the
                  classical notion of absolute determinism.
                </pre>
              </button>
            </div>
          </div>
        </div>
        <Parallax speed={30}>
          <div className="w-full h-screen bg-blue-200 z-10 flex">
            <div className="h-full basis-1/2 flex flex-col justify-center items-center p-8">
              <h1 className="text-black font-bold text-center text-7xl">
                This Is A New Challenge Teachers Will Now Face
              </h1>
              <p className="font-bold text-lg mt-4">
                How do we know if work done is authentic?
              </p>
            </div>
            <div className="h-full basis-1/2 flex flex-col justify-center p-16 bg-white">
              <h1 className="text-6xl font-bold mb-8">By the Numbers: </h1>
              <ol className="list-disc">
                <li className="text-3xl m-8">
                  <span className="font-bold">46%</span> of Students in Grades
                  10-12 Reported Using AI on School Assignments According to a
                  Survey Conducted by{" "}
                  <a
                    href="https://leadershipblog.act.org/2023/12/students-ai-research.html"
                    target="_blank"
                    className="underline text-cyan-400"
                  >
                    Act
                  </a>
                </li>
                <li className="text-3xl m-8">
                  <span className="font-bold">56%</span> of Students in
                  College/University Reported Using AI on School Assignments
                  According to a Survey Conducted by{" "}
                  <a
                    href="https://www.bestcolleges.com/research/most-college-students-have-used-ai-survey/"
                    target="_blank"
                    className="underline text-cyan-400"
                  >
                    BestColleges
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </Parallax>
        <Parallax speed={-5}>
          <div className="w-full h-screen bg-black flex">
            <div className="basis-1/2  h-full">
              <Image src={ToolsImage} alt="AI Images" className="h-full" />
            </div>
            <div className="basis-1/2 p-16 flex justify-center items-center">
              <h3 className="text-6xl font-bold text-white">
                With Generative AI Tools becoming more accessible and
                increasingly better, questions arise around plagiarism and
                authenticity. Luckily, there are AI detection tools such as{" "}
                <i>Turnitin</i>.
              </h3>
            </div>
          </div>
        </Parallax>
        <Parallax speed={30}>
          <div className="w-full h-screen bg-blue-200 flex justify-center items-center p-24">
            <div>
              <h3 className="text-7xl font-bold text-black text-center">
                The Education Industry Needs To Adjust to This New Age of AI
              </h3>

              <h3 className="text-5xl font-semibold text-black text-center mt-16 mx-16">
                The Good News? There are many benefits of AI in the education
                sector
              </h3>
            </div>
          </div>
        </Parallax>
        <Parallax speed={-10}>
          <div className="w-full h-screen bg-black flex">
            <div className="basis-1/2 flex justify-center items-center p-8">
              <h3 className="font-bold text-blue-200 text-7xl text-center">
                Benefits of AI in Education
              </h3>
            </div>
            <div className="basis-1/2 flex flex-col justify-between py-8">
              <div className="h-64 rounded-xl w-5/6 bg-gray-900 py-4 px-8 flex flex-col justify-center items-center">
                <h3 className="font-bold text-blue-200 text-xl w-full">
                  Educational Games/AI Assisted Learning
                </h3>
                <p className="text-white text-md mt-2">
                  Educational games and websites can take advantage of AI to
                  help enchance the learning experience. AI can help personalize
                  the experience for the student to further accelerate the
                  retention of knowledge. Gameplay is already proven to be an
                  excellent format to promote learning. Adding in AI will only
                  supercharge it.
                </p>
              </div>
              <div className="h-64 rounded-xl w-5/6 bg-gray-900 py-4 px-8  flex flex-col justify-center items-center">
                <h3 className="font-bold text-blue-200 text-xl w-full">
                  AI Tutors
                </h3>
                <p className="text-white text-md mt-2">
                  AI can also improve the tutoring landscape. With an in-person
                  tutor not always available, there is a need for reliable
                  online tutors. As the technology advances, online AI chatbots
                  can act as tutors and deliver quality assistance to students
                  in the process of studying. In fact, Khan Academy has recently
                  introduced Khanmigo, an AI tutor powered by Open AI{"'"}s
                  GPT-4 that aims to provide on-demand tutoring.
                </p>
              </div>
              <div className="h-64 rounded-xl w-5/6 bg-gray-900 py-4 px-8 flex flex-col justify-center items-center">
                <h3 className="font-bold text-blue-200 text-xl w-full">
                  Automated Grading
                </h3>
                <p className="text-white text-md mt-2">
                  Grading can also be automated using AI. There are already
                  tools that do this that exist. It is well known that Mr.
                  Anthony automates much of his grading process, perhaps not by
                  AI but by some means. Maybe AI can make that even more
                  efficient. An example would be like on the OSSLT where a
                  significant portion is marked by computers saving valuable
                  time for teachers.
                </p>
              </div>
            </div>
          </div>
        </Parallax>
        <Parallax speed={30}>
          <div className="w-full bg-blue-200 h-screen flex items-center">
            <h1 className="text-9xl  font-bold text-center">
              For Better for Worse, AI Has an Impact on Education
            </h1>
          </div>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}
