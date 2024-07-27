import Image from "next/image";

import { Layout, Hero, HowToPlay, MovieMania, AboutUs, Newsletter, Footer } from "@/Components";


export default function Home() {
  return (
    <Layout>
      <Hero />
      <HowToPlay />
      <MovieMania />
      <AboutUs />
      <Newsletter />
      <Footer />
    </Layout>
  );
}
