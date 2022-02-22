import React from "react";
import CreatePhoto from "../assets/img/create-section1.jpg";
const CreateShare = () => {
  return (
    <div>
      <secton id="create">
        <div className="bg-primary">
          <div className="container">
            <div className="row">
              <div className="col text-center py-5">
                <h1 className="display-4">Create</h1>
                <p className="lead">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempora provident vitae, minima voluptas vel possimus neque?
                  Iure blanditiis repellat sit reiciendis illo nisi eum nemo.
                </p>
                <button className="btn btn-outline-light">Fint Out More</button>
              </div>
            </div>
          </div>
        </div>
      </secton>
      <section className="bg-light py-5 explore-section-two">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-2">
              <img
                src={CreatePhoto}
                alt="create idea"
                className="w-75 img-fluid rounded-circle"
              />
            </div>
            <div className="col-md-6 order-1  text-muted">
              <h3>Create and Share</h3>
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

export default CreateShare;
