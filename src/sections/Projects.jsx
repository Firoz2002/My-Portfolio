import React, { useState, Suspense } from 'react'

import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/CanvasLoader.jsx';
import DemoComputer from '../components/DemoComputer.jsx';

const projectCount = myProjects.length-1;

export default function Projects({ isLargeDevice }) {

  const [projectIndex, setProjectIndex] = useState(0);
  
  const currentProject = myProjects[projectIndex];
  
  const handleNavigation = (direction) => {
    setProjectIndex((prevIndex) => {
      if(direction === "previous") {
        return prevIndex===0 ? projectCount : prevIndex-1;
      } else {
        return prevIndex===projectCount ? 0 : prevIndex+1;
      }
    })
  }

  return (
    <section className="c-space my-20" id='work'>
      <p className="head-text">
        My-Work
      </p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
            <div className="absolute top-0 right-0">
                <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
            </div>

            <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
              <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm" />
            </div>

            <div className="flex flex-col gap-5 text-white-600 my-5">
              <p className="text-white text-2xl font-semibold animatedText">{ currentProject.title }</p>
              <p className="animatedText">{ currentProject.desc }</p>
              <p className="animatedText">{ currentProject.subdesc }</p>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-5">
              <div className="flex items-center gap-3">
                { currentProject.tags.map((tag, index) => (
                  <div key={index} className="tech-logo">
                      <img src={tag.path} alt={tag.name} />
                  </div>
                ))}
              </div>

              <a href={currentProject.href} className="flex items-center gap-2 cursor-pointer text-white-600" target='_blank' rel='noreferrer'>
                <p> Check Live Site </p>
                <img src="https://res.cloudinary.com/dhlsmeyw1/image/upload/v1734466594/Protfolio-assets/arrows%20and%20spotlights/arrow-up_n4luds.webp" className="w-3 h-3" alt="arrow" />
              </a>
            </div>

            <div className="flex justify-between items-center mt-7">
                <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                  <img src="https://res.cloudinary.com/dhlsmeyw1/image/upload/v1734466497/Protfolio-assets/arrows%20and%20spotlights/left-arrow_hpd164.webp" alt="left-arrow" className="w-4 h-4" />
                </button>
                <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                  <img src="https://res.cloudinary.com/dhlsmeyw1/image/upload/v1734466497/Protfolio-assets/arrows%20and%20spotlights/right-arrow_ucfzfd.webp" alt="right-arrow" className="w-4 h-4" />
                </button>
            </div>
        </div>

        {
          (isLargeDevice) ?
            <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
              <Canvas>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 5]} />

                <Center>
                  <Suspense fallback={<CanvasLoader />}>
                    <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                      <DemoComputer texture={currentProject.texture} />
                    </group>
                  </Suspense>
                </Center>
                <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false} />
              </Canvas>
            </div>
          : null
        }
      </div>
    </section>
  )
}
