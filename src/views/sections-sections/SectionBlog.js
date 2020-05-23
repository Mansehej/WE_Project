import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import { db } from '../../firebase';

// core components

function SectionBlog() {

  let allMovies = []
  const [movies, setMovies] = useState([])
  if (Object.keys(movies).length == 0) {
    db.collection('movie').orderBy('rating', "desc").limit(10).get().then(docs => {
      docs.forEach(doc => {
        allMovies.push(doc.data())
      })
      setMovies(allMovies)
    })
  }

  return (
    <>
      <div className="section secion-blog cd-section" id="blogs">
        {/* ********* BLOGS 1 ********* */}

        {/* ********* END BLOGS 1 ********* */}
        {/* ********* BLOGS 2 ********* */}
        <div className="blog-2 section section-gray">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <h2 className="title">Latest Blogposts 2</h2>
                <br />
                <Row>
                  <Col md="4">
                    <Card className="card-blog">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/sections/miguel-perales.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <h6 className="card-category text-info">Enterprise</h6>
                        <CardTitle tag="h5">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            LinkedIn’s new desktop app arrives
                          </a>
                        </CardTitle>

                        <hr />
                        <CardFooter>
                          <div className="author">
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              <img
                                alt="..."
                                className="avatar img-raised mr-2"
                                src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                              />
                              <span>Mike John</span>
                            </a>
                          </div>
                          <div className="stats">
                            <i className="fa fa-clock-o" /> 5 min read
                          </div>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card className="card-blog">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/sections/roger-keller.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <h6 className="card-category text-success">Startups</h6>
                        <CardTitle tag="h5">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            MIT’s Cheetah 3 robot is built to save lives
                          </a>
                        </CardTitle>
                        <p className="card-description">
                          The latest version of MIT’s Cheetah robot made its
                          stage debut today at TC Sessions: Robotics in
                          Cambridge, Mass. It’s a familiar project... <br />
                        </p>
                        <hr />
                        <CardFooter>
                          <div className="author">
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              <img
                                alt="..."
                                className="avatar img-raised mr-2"
                                src={require("assets/img/faces/kaci-baum-2.jpg")}
                              />
                              <span>Nickie Kelly</span>
                            </a>
                          </div>
                          <div className="stats">
                            <i className="fa fa-clock-o" /> 5 min read
                          </div>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card className="card-blog">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/sections/joshua-earlesz.jpg")}
                          />
                        </a>
                      </div>
                      <CardBody>
                        <h6 className="card-category text-danger">
                          <i className="fa fa-free-code-camp mr-1" />
                          Enterprise
                        </h6>
                        <CardTitle tag="h5">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Lionel Richie says “Hello” to startup investors
                          </a>
                        </CardTitle>
                        <p className="card-description">
                          Because developing a doctor-on-demand service that
                          would allow personalized medical visits, booked
                          through an app on a user’s phone is... <br />
                        </p>
                        <hr />
                        <CardFooter>
                          <div className="author">
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              <img
                                alt="..."
                                className="avatar img-raised mr-2"
                                src={require("assets/img/faces/erik-lucatero-2.jpg")}
                              />
                              <span>Mike John</span>
                            </a>
                          </div>
                          <div className="stats">
                            <i className="fa fa-clock-o" /> 5 min read
                          </div>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END BLOGS 2 ********* */}
        {/* ********* BLOGS 3 ********* */}

        {/* ********* END BLOGS 5 ********* */}
      </div>
    </>
  );
}

export default SectionBlog;
