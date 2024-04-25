import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "https://api.tvmaze.com/shows";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  const getMovie = async () => {
    try {
      const resp = await axios.get(`${API_URL}/${movieId}`);
      const data = resp.data;
      setMovie(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  const markup = { __html: movie?.summary };

  return (
    <Container>
      <Row>
        <Col>
          <img src={movie.image?.original} alt="" className="img-fluid" />
        </Col>
        <Col>
          <h1>{movie.name}</h1>
          <p dangerouslySetInnerHTML={markup}></p>
          <div>
            {movie.genres?.map((genre) => (
              <Badge key={genre} className="me-2">{genre}</Badge>
            ))}
          </div>
        </Col>
      </Row>

      <div className="text-center mt-5">
        <Button onClick={() => navigate(-1)}>
          {" "}
          <FaChevronLeft /> Return
        </Button>
      </div>
    </Container>
  );
};

export default MovieDetail;
