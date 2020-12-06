import React, { useState } from "react";
import { Button, Container, Form, Spinner, Table } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const Find = () => {
  const [word, setWord] = useState("");
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const [wordFind, setWordFind] = useState("");

  const findWord = async () => {
    const url = `https://amazon-food-reviews.herokuapp.com/find/pairs/search/${word.toLowerCase()}/`;
    setLoad(true);
    const result = await axios(url, {
      headers: {
        "Access-Control-Allow-Origin":
          "https://amazon-food-reviews.herokuapp.com/",
      },
      responseType: "json",
    });
    setLoad(false);
    setData(result.data);
    setWordFind(word);
  };
  return (
    <Container fluid="md">
      <h2>Find Word</h2>
      <Form.Control
        size="md"
        type="text"
        placeholder="Input word"
        onChange={(e) => setWord(e.target.value)}
      />
      <div style={{ width: "100%", textAlign: "center" }}>
        <Button
          onClick={() => findWord()}
          variant="success"
          style={{ marginTop: 25, width: "40%" }}
          disabled={load}
        >
          Find
        </Button>
      </div>
      <div style={{ width: "100", textAlign: "center", marginTop: 25 }}>
        <h3>{wordFind ? wordFind : ""}</h3>
        <Table striped bordered hover style={{ marginTop: 15 }}>
          <thead>
            <tr>
              <th>Rank 1</th>
              <th>Rank 2</th>
              <th>Rank 3</th>
              <th>Rank 4</th>
              <th>Rank 5</th>
            </tr>
          </thead>

          {load ? (
            <div
              style={{
                position: "absolute",
                left: "50vw",
                transform: "translateX(-50%)",
              }}
            >
              {" "}
              <Spinner animation="grow" variant="success" />
              <Spinner animation="grow" variant="success" />
              <Spinner animation="grow" variant="success" />
            </div>
          ) : (
            <tbody>
              <tr>
                {data.map((item) => {
                  return <th>{item.value == "None" ? 0 : item.value}</th>;
                })}
              </tr>
            </tbody>
          )}
        </Table>
      </div>
      <Button
        as={Link}
        to="/food-review"
        variant="info"
        style={{ marginTop: 25, width: "15%" }}
      >
        Back Home
      </Button>
    </Container>
  );
};

export default Find;
