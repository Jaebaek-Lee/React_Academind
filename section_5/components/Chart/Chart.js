import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valueDataArray = props.data.map(expense => (expense.value));
  const maxAmount = Math.max(...valueDataArray);

  return (
    <div className="chart">
      {props.data.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          label={item.label}
          max={maxAmount}
        />
      ))}
    </div>
  );
};

export default Chart;
