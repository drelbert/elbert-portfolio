import Head from "next/head";
import Base from "../components/base";
import Work from "../components/work";

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24 ">
      <Head>
        <title>Dan Elbert</title>
        <link rel="icon" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <Base />
        <Work />
      </main>
    </div>
  );
}
