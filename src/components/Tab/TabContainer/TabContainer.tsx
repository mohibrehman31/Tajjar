import TabPreview from "../TabPreview/TabPreview";

const TabContainer = ({ heading, t1, c1, t2, c2, t3, c3, Image }: any) => {
  return (
    <>
      <div
        style={{
          width: "85vw",
          height: "95vh",
          display: "flex",
          flex: 1,
        }}
      >
        <div style={{ flex: 2 }}>
          <div
            style={{
              marginBlock: 20,
              marginInline: 20,
              width: 450,
              height: 90,
              fontSize: 20,
            }}
          >
            {heading}
          </div>
          <TabPreview title={t1} content={c1} />
          <TabPreview title={t2} content={c2} />
          <TabPreview title={t3} content={c3} />
        </div>
        <div style={{ flex: 3, display: "flex" }}>
          <img
            src={Image}
            style={{ alignItems: "center", width: 600, height: 600 }}
          />
        </div>
      </div>
    </>
  );
};
export default TabContainer;
