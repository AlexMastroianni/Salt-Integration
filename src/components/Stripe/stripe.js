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
                Book a free 10 min discovery call to ensure we can help risk
                free.
              </p>
            </div>
          </div>
          <div class="col stripe">
            <div class="p-3">
              <h5>45 Minute Consult</h5>
              <p>
                Ask any questions, Go over your ideas and concepts. Get multiple
                solutions, discuss options. Get a cost breakdown so you are in
                the ballpark.
              </p>
            </div>
          </div>
          <div class="col stripe">
            <div class="p-3">
              <h5>1 Hour Trouble Shooting</h5>
              <p>
                If you find yourself trying to google the answer to no avail,
                book in a call to help with the fault finding process. Have a
                more techinal question about a system or what an installer has
                quoted? get in touch.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container px-4 text-center">
        <div class="row gx-5">
          <div class="col stripe">
            <div class="p-3">
              <a href="https://calendly.com/alex-m-mastroianni/10-min-discovery-meeting">
                {' '}
                <button type="button" class="btn btn-success">
                  Book Now
                </button>
              </a>
            </div>
          </div>
          <div class="col stripe">
            <div class="p-3">
              <a href="https://calendly.com/alex-m-mastroianni/45-min-smart-home-consult">
                {' '}
                <button type="button" class="btn btn-success">
                  Book Now
                </button>
              </a>
            </div>
          </div>
          <div class="col stripe">
            <div class="p-3">
              <a href="https://calendly.com/alex-m-mastroianni/1-hr-trouble-shooting">
                {' '}
                <button type="button" class="btn btn-success">
                  Book Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default stripe;
