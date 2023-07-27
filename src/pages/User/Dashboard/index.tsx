import "./index.css";
import Chart from "src/components/Charts";
import Spark from "src/components/SparkChart";
// import { Card } from "reactstrap";

export default function Dashboard() {
  return (
    <div>
      <div className="wi">
        <div className="spark-line-main-container">
          <div className="spark-line-container">
            <Spark title="Bids" value={212} />
          </div>
          <div className="spark-line-container">
            <Spark title="Postings" value={132} />
          </div>
          <div className="spark-line-container">
            <Spark title="Payments" value={40} />
          </div>
        </div>
      </div>
      <div className="spline-card-container">
        <div className="spline-card">
          <Chart />
        </div>
      </div>
    </div>
  );
}
