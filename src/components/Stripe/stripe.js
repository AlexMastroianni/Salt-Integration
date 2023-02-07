import React from 'react';

function stripe(props) {
  return (
    <div>
      <h2 className="blurbHeader2">Book in a Call</h2>

      <div class="container px-4 text-center">
        <div class="row gx-5">
          <div class="col stripe">
            <div class="p-3">
              <h5>Free Discovery Call</h5>
              <p>
                Book a free 10 min discovery call to ensure we can help with
                your problem risk free.
              </p>
              <a href="https://calendly.com/alex-m-mastroianni/45-min-smart-home-consult">
                {' '}
                <button>Book Now</button>
              </a>
            </div>
          </div>
          <div class="col stripe">
            <div class="p-3">
              <h5>45 Minute Consult</h5>
              <p>
                Go over your ideas and concepts. Get multiple solutions discuss
                options. Get a cost breakdown so you are in the ball park.
              </p>
            </div>
          </div>
          <div class="col stripe">
            <div class="p-3">
              <h5>1 Hour Trouble Shooting</h5>
              <p>
                If you are having an issue with a installed DIY system and need
                some help resolving the issue or if your current smart home plan
                isn't making sense, get a clear understanding and resolve the
                issue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default stripe;

//   <a href="https://calendly.com/alex-m-mastroianni/45-min-smart-home-consult">
//     Button
//   </a>
//   <a href="https://calendly.com/alex-m-mastroianni/45-min-smart-home-consult">
//     Button
//   </a>
