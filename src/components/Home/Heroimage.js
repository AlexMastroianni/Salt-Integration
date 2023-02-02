import React from 'react';

import { Typewriter } from 'react-simple-typewriter';

function Heroimage() {
  return (
    <div className="HeroImg">
      <div className="row align-items-center p-4 m-3">
        <div className="col ms-5 ps-5">
          <div className="Typewriter">
            <h1
              className="Typewriter"
              style={{
                paddingTop: '5rem',
                margin: 'auto 0',
                fontWeight: 'bold',
              }}
            >
              Salt - {''}
              <span style={{ color: 'Purple', fontWeight: 'normal' }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    'Smart Home Consulting',
                    'Home Office Design',
                    'Home Networking',
                    'IoT',
                  ]}
                  loop={8}
                  cursor
                  cursorStyle="_"
                  typeSpeed={110}
                  deleteSpeed={70}
                  delaySpeed={4000}
                />
              </span>
            </h1>
          </div>
        </div>
        <div class="col"></div>
        <div className="col slogan">
          <h2>
            Simplifying a <strong className="keyword">Smart Home</strong>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Heroimage;
