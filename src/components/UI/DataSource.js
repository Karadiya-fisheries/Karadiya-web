import React from "react";
import { getData } from "./getData";

export const DataSource = ({ setData, plotConfig }) => {
  React.useEffect(() => {
    const interval = setInterval(() => {
      setData(getData(plotConfig));
    }, 1000);
    return () => clearInterval(interval);
  }, [plotConfig, setData]);

  return null;
};
export default DataSource;