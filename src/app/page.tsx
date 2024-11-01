import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Signup from "../components/Signup";
import Footer from "../components/Footer";
import LatestPosts from "../components/LatestPosts";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LatestPosts />
      <Features />
      <Signup />
      <Footer />
    </>
  );
}
