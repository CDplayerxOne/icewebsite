import Link from "next/link";

export default function NavBar() {
  return (
    <div className="fixed w-full h-16 flex items-center z-50 bg-black top-0 left-0">
      <div className="basis-1/2">
        <Link href="/">
          <p className="text-blue-200 text-3xl ml-4 font-bold">AI Insights</p>
        </Link>
      </div>
      <div className="basis-1/2 flex justify-end mr-8">
        <Link
          href="/education"
          className="text-blue-50 hover:text-blue-100 text-lg"
        >
          Education
        </Link>
        <Link
          href="/economy"
          className="text-blue-50 hover:text-blue-100 text-lg ml-12"
        >
          Economy
        </Link>
        <Link
          href="/sources"
          className="text-blue-50 hover:text-blue-100 text-lg ml-12"
        >
          Works Cited
        </Link>
      </div>
    </div>
  );
}
