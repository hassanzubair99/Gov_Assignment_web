import React from "react";
import Image from "next/image";
import NewCollection from "./hero";
import NavBar from "./Nav";
import EditorSections from "./com_two";
import Products from "./Products"; 
import NeuralUniverseSection from "./NeuralUniverseSection";
import FeaturedPosts from "./FeaturedPosts";
import Footer from "./Footer";
export default function Home() {
  return (
    <>
      <NavBar />
      <NewCollection />
      <EditorSections />
      <Products /> 
      <NeuralUniverseSection />
      <FeaturedPosts />
      <Footer />
    </>
  );
}
