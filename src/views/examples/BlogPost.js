import React, { useState } from "react";

// reactstrap components
import { Badge, Button, Card, Media, Container, Row, Col } from "reactstrap";
import WhiteNavbar from "components/Navbars/WhiteNavbar.js";
import { db } from '../../firebase';
import FooterBlack from "components/Footers/FooterBlack";



function BlogPost(props) {

  const [movie, setMovie] = useState({
  })

  if (Object.keys(movie).length == 0) {
    db.collection('movie').doc(props.match.params.id).get().then(doc => setMovie(doc.data()));
  }

  document.documentElement.classList.remove("nav-open");
  let pageHeader = React.createRef();


  return (
    <>
      <WhiteNavbar />
      <div
        className="page-header"
        ref={pageHeader}
        style={{
          backgroundImage:
            "url(" + movie.picture + ")"
        }}
      >
        <div className="filter" />
      </div>
      <div className="wrapper">
        <div className="main">
          <div className="section section-white">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center title" md="6">
                  <h2><strong>{movie.title}</strong></h2>
                  <h3 className="title-uppercase">
                    <small>Directed by {movie.director}</small>
                    <p className="image-thumb text-center">
                      <Badge color="warning">{movie.rating}   stars</Badge> <br />
                      <Badge color="warning">{movie.duration}   minutes</Badge>


                    </p>
                  </h3>
                </Col>
              </Row>
              <Row>

                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"

                    />

                  </a>
                  <div className="article-content">

                    <p>
                      {movie.description}
                    </p>
                    <blockquote className="blockquote">
                      <p>
                        <strong>   Released:       {movie.release_date} </strong>
                      </p>
                    </blockquote>
                    <Row>
                      <Col md="6">
                        <a href="javascrip: void(0);">
                          <Card
                            data-radius="none"
                          />
                        </a>
                      </Col>
                    </Row>
                    <p />
                    <h4>ACTORS</h4>
                    <p>
                      <strong>{movie.actors}</strong>
                    </p>
                    <h4>WRITER</h4>
                    <p>
                      <strong>{movie.writer}</strong>
                    </p>
                  </div>
                  <br />
                  <div className="article-footer">
                    <Container>
                      <Row>
                        <Col md="6">
                          <h5>Tags:</h5>
                          <Badge color="warning">{movie.genres}</Badge> <a />
                          <Badge color="warning">{movie.country}</Badge> <a />
                          <Badge color="warning">{movie.language}</Badge>


                        </Col>
                        <Col className="ml-auto" md="4">
                          <div className="sharing">
                            <h5>Spread the word</h5>
                            <Button
                              className="btn-just-icon mr-1"
                              color="twitter"
                            >
                              <i className="fa fa-twitter" />
                            </Button>
                            <Button
                              className="btn-just-icon mr-1"
                              color="facebook"
                            >
                              <i className="fa fa-facebook" />
                            </Button>
                            <Button className="btn-just-icon" color="google">
                              <i className="fa fa-google" />
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <hr />
                  <Container>
                    <Row>
                      <div className="comments media-area">
                        <h3 className="text-center">Comments</h3>
                        <Media>
                          <a
                            className="pull-left"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <div className="avatar">
                              <Media
                                alt="..."
                                object
                                src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                              />
                            </div>
                          </a>
                          <Media body>
                            <Media heading tag="h5">
                              John Lincoln
                            </Media>
                            <div className="">
                              <h6 className="text-muted">Sep 11, 11:54 AM</h6>
                              <Button
                                className="btn-link "
                                color="info"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-reply mr-1" />
                                Reply
                              </Button>
                            </div>
                            <p>
                              {movie.comments}
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <FooterBlack />
    </>
  );
}

export default BlogPost;
