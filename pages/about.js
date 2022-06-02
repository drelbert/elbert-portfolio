export default function About() {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <div className="text-5xl mt-6 mb-6 text-gray-800 lg:text-5xl">
            <ul>About</ul>
          </div>
        </div>
      </div>

      <div className="pb-2 mb-2 border-t-2 border-gray-400 dark:border-white-300">
        <div className="text-slate-900 flex-shrink-0 lg:mt-8 md:mt-8 sm:mt-6 lg:px-6 row-span-2">
          <p className="text-2xl mb-0">
            Creating a clean user experience and JavaScript are the core of my
            practice but I really enjoy working across the stack, frankly, I
            just love writing code. My approach to building an effective UI is
            with empathy and inclusion. If I miss your message, I may be out
            with the family or on my bike, but always happy to get in touch.
          </p>
        </div>
      </div>
    </div>
  );
}
