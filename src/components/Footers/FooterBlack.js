/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components

function FooterBlack() {
  return (
    <>
      <footer className="footer footer-black" >
        <Container>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <h5>Made by</h5>
                </li>
                <li>
                  
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ayushi-11b349159/"
                    target="_blank"
                    className="mr-1"
                  >
                    Ayushi
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/lakshitamalhotra/"
                    target="_blank"
                    className="mr-1"
                  >
                    Lakshita Malhotra
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/mansehej"
                    target="_blank"
                  >
                    Mansehej Singh
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gaurav-jain-3201ab179/"
                    target="_blank"
                  >
                    Gaurav Jain
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    target="_blank"
                  >
                    Puneet Mehandiratta
                  </a>
                </li>
              </ul>
            </nav>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;
