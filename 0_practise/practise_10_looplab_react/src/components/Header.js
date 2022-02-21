import React from "react";

const Header = () => {
  return (
    <header id="home" className="py-5">
      <div className="dark-overlay">
        <div className="home-inner container">
          <div className="row">
            <div className="col-lg-8 d-none d-lg-block">
              <h2 className="display-4">
                Build social profiles and gain revenue profits
              </h2>
            </div>
            <div className="col-lg-4">
              <div className="bg-primary text-center card-form">
                <div className="card-body">
                  <h3>Sign up Today</h3>
                  <p>Please fill out this form to register</p>
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group py-2">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group py-2">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group py-2">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="form-group py-2">
                      <button
                        type="submit"
                        className="btn btn-outline-light w-100"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
