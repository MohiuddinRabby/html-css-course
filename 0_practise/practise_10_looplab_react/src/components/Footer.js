import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <footer className="py-5 text-center">
      <h4>Loop-Lab</h4>
      <h6>&copy; 2022</h6>
      <Button variant="primary" onClick={handleShow}>
        Contact Us
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <span className="text-muted">Send a Msg</span>{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
};

export default Footer;
