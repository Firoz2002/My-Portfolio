import React, { useState, useRef, useEffect } from 'react'
import Globe from 'react-globe.gl'

import Button from '../components/Button'

export default function About({ isLargeDevice }) {
    const globeRef = useRef(null);
    const [hasCopied, setHasCopied] = useState(false);

    useEffect(() => {
        if(globeRef.current) {
            globeRef.current.controls().autoRotate = true;
            globeRef.current.controls().enableZoom = false;
        }
    })

    const handleCopy = () => {
        navigator.clipboard.writeText("firozkamdar1@gmail.com");
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 10000);
    }

  return (
    <section className="c-space my-20" id='about'>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

        <div className="col-span-1 xl:row-span-3">
            <div className="grid-container">
                <img src="https://res.cloudinary.com/dhlsmeyw1/image/upload/v1734466397/Protfolio-assets/grids/grid1_xrnw6i.webp" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

                <div>
                    <p className="grid-headtext"> Hi, I'm Firoz </p>
                    <p className="grid-subtext"> 
                        With 1 year of experience, 
                        I have honed my skills in frontend and backend development,
                        with focus on animated 3D websites.
                    </p>
                </div>
            </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
            <div className="grid-container">
                <img src="https://res.cloudinary.com/dhlsmeyw1/image/upload/v1734466397/Protfolio-assets/grids/grid2_vcpzon.webp" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain" />

                <div>
                    <p className="grid-headtext">Tech Stack</p>
                    <p className="grid-subtext">
                        I specialize in JavaScript/TypeScript 
                        with a focus on React and ecosystems.
                    </p>
                </div>
            </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
            {
                (isLargeDevice) ? 
                <div className="grid-container">
                <div className="rounded-t-3xl w-full sm:h-[326px] h-fit flex justify-center mb-3">
                <Globe
                    ref={globeRef}
                    height={380}
                    width={380}
                    backgroundColor="rgba(0, 0, 0, 0)"
                    backgroundImageOpacity={0.5}
                    showAtmosphere
                    showGraticules
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    labelsData={[{ lat: 22.719568, lng: 75.857727, text: 'Indore, Madhya-Pradesh', color: 'white', size: 15 }]}
                />
                </div>
                <div>
                    <p className="grid-headtext">
                        I work remotely across most timezones.
                    </p>
                    <p className="grid-subtext">
                        I'm based in India, with remote work available.
                    </p>
                    <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                </div>
            </div> 
            : null
            }
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
            <div className="grid-container">
                <img src="https://res.cloudinary.com/dhlsmeyw1/image/upload/v1734466398/Protfolio-assets/grids/grid3_ierged.webp" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                <div>
                    <p className="grid-headtext">
                        My Passion for Coding
                    </p>
                    <p className="grid-subtext">
                        I love solving problems and building things through code.
                        Coding isn't just my profession - it is my hobby.
                    </p>
                </div>
            </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
            <div className="grid-container">
                <img src="https://res.cloudinary.com/dhlsmeyw1/image/upload/v1734466397/Protfolio-assets/grids/grid4_mxjdx5.webp" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />

                <div className="space-y-2">
                    <p className="grid-subtext text-center">
                        Contact-me
                    </p>
                    <div className="copy-container" onClick={handleCopy}>
                        <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" />
                        <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                            firozkamdar1@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    </section>
  )
}
