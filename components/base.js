export default function Base() {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-5xl font-bold text-gray-900 lg:text-5xl">
            Hello, I am Dan Elbert.
          </h1>
          <div className="text-5xl mt-6 mb-6 text-gray-800 lg:text-5xl">
            <ul>Front-End Engineer</ul>
            <ul>UI Developer</ul>
          </div>
        </div>
      </div>
      <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
    </div>
  );
}
