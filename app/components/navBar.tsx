// Author: Corey Dai
// Date: June 3rd, 2024
// Description: Navbar component

import Link from "next/link";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="basis-1/2">
        <Link href="/">
          <p className="blue-text text-3xl ml-4 font-bold">AI Insights</p>
        </Link>
      </div>
      <div className="basis-1/2 flex justify-end mr-8">
        {/* Various pages */}
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
