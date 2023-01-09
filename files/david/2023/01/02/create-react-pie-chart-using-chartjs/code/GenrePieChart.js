import React from "react";
import styled from "styled-components";
import { Pie } from "react-chartjs-2";
import { ArcElement, Chart, Legend, Title, Tooltip } from "chart.js";

Chart.register(ArcElement, Title, Legend, Tooltip);

const ChartFrame = styled.div`
  width: 300px;
  height: 300px;
`;

export default function GenrePieChart(props) {
  return (
    <ChartFrame>
      <Pie
        options={{
          plugins: {
            title: {
              display: true,
              text: props.title
            },
            legend: {
              position: "bottom"
            }
          }
        }}
        data={{
          labels: props.genres.map(genre => genre.name),
          datasets: [
            {
              label: "Count",
              data: props.genres.map(genre => genre.count),
              backgroundColor: props.genres.map(genre => genre.color)
            }
          ]
        }}
      />
    </ChartFrame>
  );
}
