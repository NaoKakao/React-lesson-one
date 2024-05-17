import './App.css';
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["HTML/CSS", 11],
  ["JS", 8],
  ["Angular", 5],
  ["C#", 4],
  ["PHP", 3],
];

const options = {
  title: "My Skills",
};

function App() {
  return (
    <div className="App">
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  );
}

export default App;
