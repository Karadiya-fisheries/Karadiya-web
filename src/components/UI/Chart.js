import React from "react";
import c3 from "c3";
import  DataSource from "./DataSource";

export const Chart = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    c3.generate({
      bindto: "#chart",
      data: {
        columns: data,
        type: "line",
      },
    });
  }, [data]);

  return (
    <div id="chart">
      <DataSource
        setData={setData}
        plotConfig={[
          { length: 20, maxValue: 400 },
          { length: 20, maxValue: 200 },
          { length: 20, maxValue: 100 },
          { length: 20, maxValue: 20 },
          { length: 20, maxValue: 300 },
        ]}
      />
    </div>
  );
};
export default Chart;