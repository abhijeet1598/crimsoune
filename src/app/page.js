import About from "@/components/About/About";
import Educational from "@/components/Educational/Educational";
import Footer from "@/components/Footer/Footer";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Products from "@/components/Products/Products";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Crimsoune - Pure Saffron and Floral Delights</title>
        <meta
          name="description"
          content="Crimsoune - Your source for pure saffron, saffron seeds, and flowers."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Product Highlights */}
        <Products />

        {/* Educational Section */}
        <Educational />

        <GetInTouch />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
