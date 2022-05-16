export const getData = (plotConfig) => {
    if (Array.isArray(plotConfig)) {
      return plotConfig.reduce((sum, { length, maxValue }, index) => {
        const data = [`data${index}`];
        for (let i = 0; i < length; i++) {
          data.push(Math.floor(Math.random() * maxValue));
        }
        sum.push(data);
        return sum;
      }, []);
    }
  
    return [];
  };