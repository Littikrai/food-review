import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = ({ fetchData, score }) => {
  return (
    <ButtonGroup size="lg">
      <Button
        active={score == 1 ? true : false}
        onClick={() => fetchData(1)}
        variant="outline-info"
      >
        Score 1
      </Button>
      <Button
        active={score == 2 ? true : false}
        onClick={() => fetchData(2)}
        variant="outline-info"
      >
        Score 2
      </Button>
      <Button
        active={score == 3 ? true : false}
        onClick={() => fetchData(3)}
        variant="outline-info"
      >
        Score 3
      </Button>
      <Button
        active={score == 4 ? true : false}
        onClick={() => fetchData(4)}
        variant="outline-info"
      >
        Score 4
      </Button>
      <Button
        active={score == 5 ? true : false}
        onClick={() => fetchData(5)}
        variant="outline-info"
      >
        Score 5
      </Button>
      <Button as={Link} to="/find" variant="success">
        Find Word
      </Button>
    </ButtonGroup>
  );
};

export default Menu;
