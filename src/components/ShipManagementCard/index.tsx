import "./index.css";

interface cardDataType {
  data: {
    img: string;
    title: string;
    description: string;
  };
}

export default function ShipManagementCard({ data }: cardDataType) {
  return (
    <a href="/Services">
      <div className="ship-management-card">
        <img
          src={`/src/assets/Icons/${data.img}.png`}
          className="ship-management-card-icon"
        />
        <text className="ship-management-card-heading">{data.title}</text>
        <text className="ship-management-card-description">
          {data.description}
        </text>
      </div>
    </a>
  );
}
