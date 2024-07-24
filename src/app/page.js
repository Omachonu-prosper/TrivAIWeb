import Image from "next/image";

import { Layout, Hero } from "@/Components";
import HowToPlay from "@/Components/HowToPlay";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <HowToPlay />
    </Layout>
  );
}
