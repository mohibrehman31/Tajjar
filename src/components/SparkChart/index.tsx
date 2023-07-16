import ReactApexChart from "react-apexcharts";
var randomizeArray = function (arg) {
  var array = arg.slice();
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
var sparklineData = [
  47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61,
  27, 54, 43, 19, 46,
];
function Spark({ title, value }: any) {
  console.log(title, value);
  const data = {
    series: [
      {
        data: randomizeArray(sparklineData),
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 160,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "straight",
      },
      fill: {
        opacity: 0.3,
      },
      yaxis: {
        min: 0,
      },
      colors: ["#b0b4c7"],
      title: {
        text: value,
        offsetX: 0,
        style: {
          fontSize: "24px",
        },
      },
      subtitle: {
        text: title,
        offsetX: 0,
        style: {
          fontSize: "14px",
        },
      },
    },
  };
  return (
    <>
      <div id="chart-spark1">
        <ReactApexChart
          options={data.options}
          series={data.series}
          type="area"
          height={160}
        />
      </div>
    </>
  );
}

export default Spark;
