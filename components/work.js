import Image from "next/image";
import protoUser from "../public/protoUser.jpg";
import betaProfile from "../public/betaProfile.jpg";
import protoDashboard from "../public/protoDashboard.jpg";
import betaTableView from "../public/betaTableView.jpg";
import betaDashboard from "../public/betaDashboard.jpg";

export default function Work() {
  return (
    <div id="work-view" className="py-4">
      <div className="container px-4 mx-auto">
        <div className="lg:space-x-5 lg:flex item-center lg:-mx-4 flex flex-col-reverse text-center md:text-left ">
          <div className="lg:px-4 lg:mt-12 ">
            <div className="mt-6 text-gray-800">
              <p className="text-4xl mb-4">Prototyping</p>

              <div className="grid grid-rows-2 grid-flow-col gap-8">
                <div className="text-slate-900 flex-shrink-0 lg:mt-12 lg:px-4  row-span-2">
                  <p className="text-2xl mb-4">User List and Filter View</p>
                </div>
                <div className="text-slate-800 flex-shrink-0 lg:mt-12 lg:px-4 row-span-2 col-span-2">
                  <p className="text-1xl mb-4">
                    This view is an early iteration of a filterable list and
                    method for viewing additional details about a person. Built
                    using the Next.js framework with a Prisma and PostgreSQL
                    backend. The main requirement for this application was to
                    collect data on missions to surface leadership trends.{" "}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10 border-4 border-slate-600 rounded-xl shadow-2xl">
                <Image
                  src={protoUser}
                  alt="Proto-User"
                  priority={true}
                  className="rectangle-full"
                  width={800}
                  height={450}
                />
              </div>

              <div className="grid grid-rows-2 grid-flow-col gap-8">
                <div className="text-slate-900 flex-shrink-0 lg:mt-12 lg:px-4 row-span-2">
                  <p className="text-2xl mb-2">Dashboard View</p>
                </div>
                <div className="text-slate-800 flex-shrink-0 lg:mt-12 lg:px-4 row-span-2 col-span-2">
                  <p className="text-1xl mb-2">
                    This draft view was built to organize data using event
                    handling and state management in React. While the underlying
                    user story feature was to deliver a dashboard that present a
                    broad range of education data.{" "}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10 border-4 border-slate-600 rounded-xl shadow-2xl">
                <Image
                  src={protoDashboard}
                  alt="Proto-Dashbaord"
                  priority={true}
                  className="rectangle-full"
                  width={750}
                  height={450}
                />
              </div>

              <p className="text-4xl mb-4">Production Ready</p>

              <div className="grid grid-rows-2 grid-flow-col gap-8">
                <div className="text-slate-900 flex-shrink-0 lg:mt-12 lg:px-4 row-span-2">
                  <p className="text-2xl mb-2">Service Management Page</p>
                </div>
                <div className="text-slate-800 flex-shrink-0 lg:mt-12 lg:px-4 row-span-2 col-span-2">
                  <p className="text-1xl mb-2">
                    This page is built to help teachers quickly understand and
                    access a broad set of education data. Built using Next.js,
                    Prisma and PostgreSQL.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10 border-4 border-slate-600 rounded-xl shadow-2xl bg-slate-300">
                <Image
                  src={betaDashboard}
                  alt="Beta-Dashbaord"
                  priority={true}
                  className="rectangle-full"
                  width={800}
                  height={450}
                />
              </div>
              <div className="grid grid-rows-2 grid-flow-col gap-8">
                <div className="text-slate-900 flex-shrink-0 lg:mt-12 lg:px-4 row-span-2">
                  <p className="text-2xl mb-2">Profile View</p>
                </div>
                <div className="text-slate-800 flex-shrink-0 lg:mt-12 lg:px-4 row-span-2 col-span-2">
                  <p className="text-1xl mb-2">
                    Illustrating the use of Tailwind and built with the Next.js
                    framework, this page and logic enables users to update their
                    profile data.{" "}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10 border-4 border-slate-600 rounded-xl shadow-2xl">
                <Image
                  src={betaProfile}
                  alt="Proto-Dashbaord"
                  priority={true}
                  className="rectangle-full"
                  width={750}
                  height={350}
                />
              </div>
              <div className="grid grid-rows-2 grid-flow-col gap-8">
                <div className="text-slate-900 flex-shrink-0 lg:mt-12 lg:px-4 row-span-2">
                  <p className="text-2xl mb-2">Table View</p>
                </div>
                <div className="text-slate-800 flex-shrink-0 lg:mt-12 lg:px-4 row-span-2 col-span-2">
                  <p className="text-1xl mb-2">
                    Built with the Chakra UI library, this table renders data
                    using the Prisma database toolkit.{" "}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10 border-4 border-slate-600 rounded-xl shadow-2xl">
                <Image
                  src={betaTableView}
                  alt="Proto-Dashbaord"
                  priority={true}
                  className="rectangle-full"
                  width={775}
                  height={450}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
