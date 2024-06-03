import Link from "next/link";
import NavBar from "../components/navBar";

export default function Page() {
  return (
    <div className="w-full bg-black">
      <NavBar />
      <div className="w-full flex flex-col items-center mb-16">
        <h1 className="text-9xl font-bold text-blue-200 mt-24">Works Cited</h1>
        <div>
          <h1 className="text-7xl font-bold text-white mt-16 mb-8">Links</h1>
          <ol className="list-disc">
            <li className="text-cyan-400 text-3xl underline">
              <Link
                href="https://www.imf.org/en/Blogs/Articles/2024/01/14/ai-will-transform-the-global-economy-lets-make-sure-it-benefits-humanity"
                target="_blank"
              >
                IMF
              </Link>
            </li>
            <li className="text-cyan-400 text-3xl underline">
              <Link
                href="https://www.zdnet.com/article/workers-with-ai-skills-can-expect-higher-salaries-depending-on-their-role/"
                target="_blank"
              >
                ZDNET
              </Link>
            </li>
            <li className="text-cyan-400 text-3xl underline">
              <Link
                href="https://business.bofa.com/en-us/content/economic-impact-of-ai.html"
                target="_blank"
              >
                Bank of America
              </Link>
            </li>
            <li className="text-cyan-400 text-3xl underline">
              <Link
                href="https://www.linkedin.com/pulse/how-ai-create-more-jobs-than-takes-comprehensive-outlook-ben-simon"
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
            <li className="text-cyan-400 text-3xl underline">
              <Link
                href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier#business-value"
                target="_blank"
              >
                McKinsey
              </Link>
            </li>
            <li className="text-cyan-400 text-3xl underline">
              <Link
                href="https://www.europarl.europa.eu/RegData/etudes/BRIE/2019/637967/EPRS_BRI(2019)637967_EN.pdf"
                target="_blank"
              >
                The European Parliament
              </Link>
            </li>
          </ol>
        </div>
        <div>
          <h1 className="text-7xl font-bold text-white mt-16 mb-8">Images</h1>
          <ol className="list-disc">
            <li className="text-cyan-400 text-3xl underline">
              <Link
                href="https://www.adobe.com/products/firefly.html"
                target="_blank"
              >
                Adobe Firefly(AI Generated)
              </Link>
            </li>
            <li className="text-cyan-400 text-3xl underline">
              <Link
                href="https://miro.medium.com/v2/resize:fit:1358/0*AU3rmB08Vntf33Is"
                target="_blank"
              >
                Medium
              </Link>
            </li>
            <li className="text-cyan-400 text-3xl underline">
              <Link
                href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier#business-value"
                target="_blank"
              >
                McKinsey
              </Link>
            </li>
            <li className="text-cyan-400 text-3xl underline">
              <Link
                href="https://www.europarl.europa.eu/RegData/etudes/BRIE/2019/637967/EPRS_BRI(2019)637967_EN.pdf"
                target="_blank"
              >
                The European Parliament
              </Link>
            </li>
            <li className="text-cyan-400 text-3xl underline">
              <Link
                href="https://static.vecteezy.com/system/resources/previews/022/227/364/non_2x/openai-chatgpt-logo-icon-free-png.png"
                target="_blank"
              >
                Vecteezy
              </Link>
            </li>
            <li className="text-cyan-400 text-3xl underline">
              <Link
                href="https://miro.medium.com/v2/resize:fit:700/0*oRRpMJ9XqkRnYLhW.png"
                target="_blank"
              >
                Medium(x2)
              </Link>
            </li>
            <li className="text-cyan-400 text-3xl underline">
              <Link
                href="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/2560px-Google_Gemini_logo.svg.png"
                target="_blank"
              >
                Wikipedia
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
