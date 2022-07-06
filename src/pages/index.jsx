import React from "react"
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Services from '../components/Services'
import fsPromises from 'fs/promises';
import path from 'path'
import DietAndNutrion from "../components/DietAndNutrition";
import Curriculum from "../components/Curriculum";
import Visions from "../components/Vision";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";


export default function Home({services}) {
  return (
    <>
      <main className="page-wrapper">
        <Navbar />
        <Intro />
        <Services skills={services} />
        <Curriculum/>
        <DietAndNutrion/>
        <Visions/>
        <AboutUs/>
        <Footer/>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const fileservices = path.join(process.cwd(), 'assets/jsons/services.json');
  const serviceData = await fsPromises.readFile(fileservices);
  const services = JSON.parse(serviceData);
  return{
    props:{
      services:services
    }
  }
}