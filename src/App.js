import "./App.css";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import STable from "./STable";
import axios from "axios";
import { Container, Spinner } from "react-bootstrap";
import ReactWordcloud from "react-wordcloud";

function App() {
  const [data, setData] = useState(null);
  const [score, setScore] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://amazon-food-reviews.herokuapp.com/find/pairs/score/1/`;
      const result = await axios(url, {
        headers: {
          "Access-Control-Allow-Origin":
            "https://amazon-food-reviews.herokuapp.com/",
        },
        responseType: "json",
      });
      setData(result.data);
    };
    fetchData();
  }, []);

  const fetchData = async (score) => {
    const url = `https://amazon-food-reviews.herokuapp.com/find/pairs/score/${score}/`;
    const result = await axios(url, {
      headers: {
        "Access-Control-Allow-Origin":
          "https://amazon-food-reviews.herokuapp.com/",
      },
      responseType: "json",
    });
    setScore(score);
    setData(result.data);
  };

  const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [5, 80],
    fontStyle: "normal",
    fontWeight: "normal",
    rotations: 3,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 3000,
  };

  return (
    <Container fluid="md">
      <div style={{ height: 600, width: "100%" }}>
        {data ? (
          <ReactWordcloud maxWords={600} words={data[0]} options={options} />
        ) : (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Spinner
              style={{ width: 100, height: 100 }}
              animation="border"
              variant="primary"
            />
          </div>
        )}
      </div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: 15,
          marginBottom: 15,
        }}
      >
        <Menu fetchData={fetchData} score={score} />
      </div>
      <h1>Score {score}</h1>
      {data ? <STable info={data[0]} /> : ""}
    </Container>
  );
}

export default App;
