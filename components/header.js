import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link href="/">
          <a
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
            }
          >
            Dan Elbert
          </a>
        </Link>
        <div>
          <Link href="/">
            <a
              className={
                "font-medium tracking-wider px-6 transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
              }
            >
              Home
            </a>
          </Link>
          <Link href="/#work-view">
            <a
              className={
                "font-medium tracking-wider px-6 transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
              }
            >
              Work
            </a>
          </Link>
          <Link href="/about">
            <a
              className={
                "font-medium tracking-wider px-6 transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
              }
            >
              About
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
