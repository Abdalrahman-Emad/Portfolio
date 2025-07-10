import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('abdalrahmanemad.48@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        
        {/* Section 1 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img 
              src="assets/grid1.png" 
              alt="grid-1" 
              className="w-full sm:h-[276px] h-fit object-contain" 
            />
            <div>
              <h2 className="grid-headtext">Hi, I’m Abdulrahman Emad</h2>
              <p className="grid-subtext">
                With over a year of experience, I have honed my skills in frontend development, 
                creating dynamic and responsive websites.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img 
              src="assets/grid2.png" 
              alt="grid-2" 
              className="w-full sm:h-[276px] h-fit object-contain" 
            />
            <div>
              <h2 className="grid-headtext">Tech Stack</h2>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build 
                robust and scalable applications.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Egypt', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <h2 className="grid-headtext">Flexible with Time Zones & Locations</h2>
              <p className="grid-subtext">I'm based in Egypt and open to remote work worldwide.</p>
            </div>
          </div>
        </div>

        {/* Section 4: Contact */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img 
              src="assets/grid4.png" 
              alt="grid-4" 
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" 
            />
            <div className="space-y-2 text-center">
              <h2 className="grid-subtext">Contact Me</h2>
              <div 
                className="copy-container flex justify-center items-center cursor-pointer" 
                onClick={handleCopy}
              >
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="sm:text-2xl md:text-xl font-medium text-gray_gradient text-white ml-2">
                  abdalrahmanemad48@gmail.com
                </p>
              </div>
              {hasCopied && <span className="text-green-500 text-sm">Copied to clipboard!</span>}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
