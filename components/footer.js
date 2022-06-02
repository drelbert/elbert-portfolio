import Link from "next/link";

export default function Footer() {
  return (
    <div className="container px-4 mx-auto">
      <div className="mt-2 lg:mt-18 sm:pb-36 sm:py-8 py-2">
        <div>
          <div className="pb-6 mb-2 border-t-2 border-gray-400 dark:border-white-300"></div>
          <div className="flex flex-col justify-between lg:flex-row items-center">
            <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
              <Link
                href="mailto:danrelbert@gmail.com?subject=Check In"
                className={"transition-colors hover:text-sky-500"}
                target="_blank"
                rel="noreferrer"
              >
                Email
              </Link>
              <Link
                href="https://www.linkedin.com/in/dan-elbert-b533a17/"
                className={"transition-colors hover:text-sky-500"}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/drelbert"
                className={"transition-colors hover:text-sky-500"}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
