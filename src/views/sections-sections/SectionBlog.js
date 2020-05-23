import React, { useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Col,
} from "reactstrap";
import { db } from '../../firebase';


// core components

function MoviesList({ movie }) {

  const [redirect, setRedirect] = useState()
  let url

  console.log(redirect)

  function formURL (props) {
    console.log(props)
    url='/'+props
    
  if(redirect == true) {
    return <Redirect to={url} />
  }
  else
  setRedirect(false)

}

  return (
    <>
      <Col md="4" style={{minWidth: "300px", marginBottom: "50px"}}>
        <Card className="card-blog"  onClick={ () => formURL(movie.id), setRedirect(true)}>
          <div className="card-image">
            <a href="#pablo" >
              <img
                alt="..."
                className="img img-raised"
                src={require("assets/img/sections/miguel-perales.jpg")}
              />
            </a>
          </div>
          <CardBody>
            <h6 className="card-category text-info">{movie.genres}</h6>
            <CardTitle tag="h5">
              <a href="#pablo" >
                {movie.title}
              </a>
            </CardTitle>
            <hr />
            <CardFooter>
              <div className="author">
                  <span>{movie.director}</span>
              </div>
              <div className="stats">
                Rating: {movie.rating}
              </div>
            </CardFooter>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}



function SectionBlog() {

  let allMovies = []
  const [movies, setMovies] = useState([])
  
  if (Object.keys(movies).length == 0) {
    db.collection('movie').orderBy('rating', "desc").limit(10).get().then(docs => {
      docs.forEach(doc => {
        let movieObj = doc.data()
        movieObj['id'] = doc.id
        allMovies.push(movieObj)
      })
      setMovies(allMovies)
      console.log(allMovies)

    })
  }


  return (
    <div >
      <div className="section secion-blog cd-section" id="blogs" >
        <div className="blog-2 section section-gray">
          <Container>
          <h2 className="title">Movies List</h2>

            <Col className="ml-auto mr-auto" md="10">
              <br />           
              {movies.map((movie, index) => (
                <div >
                <MoviesList
                  key={index}
                  movie={movie}
                />
                </div>
              ))}
            </Col>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default SectionBlog;
