import React, { useState } from "react";
import { Redirect } from "react-router-dom";

// reactstrap components
import {
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

  return (
    <>
      <Col md="4" style={{ minWidth: "200px", marginBottom: "50px" }}>
        <Card className="card-blog" style={{width: "250px"}}>
          <div className="card-image">
              <img
                alt="..."
                style={{width: "100%", height: "350px"}}
                className="img img-raised"
                src={movie.picture}
              />
            
          </div>
          <CardBody>
            <h6 className="card-category text-info">{movie.genres}</h6>
            <CardTitle tag="h5">
                {movie.title}
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
  const [movies, setMovies] = useState({
    movies: []
  })
  const [redirect, setRedirect] = useState('')

  if (redirect.length != 0) {
    return <Redirect to={redirect} />
  }

  function redirectTo(id) {
    setRedirect('/movie/' + id)
  }

  if (Object.keys(movies.movies).length == 0) {
    db.collection('movie').orderBy('rating', "desc").limit(10).get().then(docs => {
      docs.forEach(doc => {
        let movieObj = doc.data()
        movieObj['id'] = doc.id
        allMovies.push(movieObj)
      })
      setMovies({ movies: allMovies })
    })
  }

  return (
    <div >
      <div className="section secion-blog cd-section" id="blogs" >
        <div className="blog-2 section section-gray">
          <Container>
            <h2 className="title" style={{paddingLeft: "12%"}}>Movies List</h2>
            <br />
            <Col className="ml-auto mr-auto" md="10" style={{display: "flex", flexWrap: "wrap"}}>
              <br />
              {movies.movies.map((movie, index) => (
                <div onClick={() => { redirectTo(movie.id) }} >
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
