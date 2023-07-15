const TabPreview = ({ title, content }: any) => {
  return (
    <>
      <div
        style={{
          marginBlock: 10,
          marginInline: 20,
          width: 450,
          height: 140,
        }}
      >
        <div style={{ fontSize: 18, fontWeight: "bold" }}>{title}</div>
        <div style={{ fontSize: 17 }}>{content}</div>
      </div>
    </>
  );
};
export default TabPreview;
