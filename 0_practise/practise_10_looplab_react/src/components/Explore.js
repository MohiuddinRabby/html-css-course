import React from "react";
import ExplorePhoto from "../assets/img/explore-section1.jpg";
const Explore = () => {
  return (
    <div>
      <secton id="explore">
        <div className="container">
          <div className="row">
            <div className="col text-center py-5">
              <h1 className="display-4">Explore</h1>
              <p className="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora provident vitae, minima voluptas vel possimus neque?
                Iure blanditiis repellat sit reiciendis illo nisi eum nemo.
              </p>
              <button className="btn btn-outline-secondary">
                Fint Out More
              </button>
            </div>
          </div>
        </div>
      </secton>
      <section className="bg-light py-5 explore-section-two">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={ExplorePhoto}
                alt="create idea"
                className="w-75 img-fluid rounded-circle"
              />
            </div>
            <div className="col-md-6  text-muted">
              <h3>Explore and Connect</h3>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x"> </i>
                </div>
                <div className="p4 align-self-end">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Labore quae provident, commodi eaque modi obcaecati. Laborum
                    adipisci similique officia quo!
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x"> </i>
                </div>
                <div className="p4 align-self-end">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Labore quae provident, commodi eaque modi obcaecati. Laborum
                    adipisci similique officia quo!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
