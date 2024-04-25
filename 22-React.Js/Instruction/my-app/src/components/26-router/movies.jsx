import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const API_URL = "https://api.tvmaze.com/shows";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const getMovies = async () => {
    try {
      const resp = await axios.get(API_URL);
      const { data } = resp;

      setMovies(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Container>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5">
        {movies.map((movie) => {
          const image = movie.image?.medium;
          const title = movie.name;
          const id = movie.id;

          return (
            <Col key={id}>
              <Card
                style={{ height: "100%", cursor: "pointer" }}
                onClick={() => navigate(`/movies/${id}`)}
              >
                <Image src={image} variant="top" alt="" />

                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Movies;
