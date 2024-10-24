import React, { useEffect, useRef } from 'react';
import './gimic.css'; // Assuming the styles are in gimic.css
import Parallax from 'parallax-js';

function Gimic() {
  const sceneRef = useRef(null); // Create a ref to access the scene element

  useEffect(() => {
    const scene = sceneRef.current; // Get the current reference to the scene
    const parallax = new Parallax(scene); // Initialize Parallax with the scene

    const makeWinHeight = () => {
      const vh = window.innerHeight;
      const projects = vh / 2;
      scene.style.height = `${vh}px`;
      const cols = scene.querySelectorAll('.col');
      cols.forEach(col => {
        col.style.height = `${projects}px`;
      });
    };

    makeWinHeight(); // Set initial heights
    window.addEventListener('resize', makeWinHeight); // Update heights on resize

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', makeWinHeight);
    };
  }, []); // Empty dependency array means this runs once after initial render

  return (
    <div className="gallery-section">
      {/* Add the Gallery Heading */}
      <h1 className="gallery-heading">Gallery</h1>
      
      <section 
        id="scene" 
        ref={sceneRef} // Attach the ref here
        data-pointer-events="true" 
        data-x-origin="0.5" 
        data-y-origin="0.5" 
        data-scalar-y="150.0" 
        data-scalar-x="100.0" 
        data-friction-x="0.05" 
        data-friction-y="0.05"
      >
        <div className="layer main" data-depth="1.0">
          {Array.from({ length: 20 }).map((_, index) => (
            <div className="col" key={index}>
              <a href="#">
                <div className="hover">
                  <div className="pad align-bottom">
                    <h2>Project Title {index + 1}</h2>
                  </div>
                  <div className="more"><i className="demo-icon icon-plus"></i></div>
                </div>
                <div 
                  className="bg-img" 
                  style={{ backgroundImage: `url(http://www.caseycallis.com/codepen/img${(index % 9) + 1}.jpg)` }}
                ></div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gimic;
