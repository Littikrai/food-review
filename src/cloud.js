import React, { useState } from "react";
import WordCloud from "react-d3-cloud";

// const data = [
//   { text: "Hey", value: 1000 },
//   { text: "lol", value: 200 },
//   { text: "first impression", value: 800 },
//   { text: "very cool", value: 1000000 },
//   { text: "duck", value: 10 },
// ];

const fontSizeMapper = (word) => Math.log2(word.value) * 3;
const rotate = (word) => word.value % 360;

const Cloud = ({ info }) => {
  const [data, setData] = useState(info);
  return (
    <>
      <WordCloud
        data={data}
        fontSizeMapper={fontSizeMapper}
        rotate={rotate}
        width={600}
        height={500}
      />
    </>
  );
};

export default Cloud;
