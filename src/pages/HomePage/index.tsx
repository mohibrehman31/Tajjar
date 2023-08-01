import { Layout, Space } from "antd";
import { Header } from "src/components/Header/Header";
import { Footer } from "src/components/Footer/Footer";
import { Main } from "src/components/Main/Main";
import { HomeCurve } from "src/assets/Images";
import "./index.scss";
export const Home = () => (
  <Space
    direction="vertical"
    style={{
      width: "100%",
    }}
    size={[0, 48]}
  >
    <Layout>
      <div
        style={{
          backgroundImage: `url(${HomeCurve})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <Header />
        <Main />
        <Footer />
      </div>
    </Layout>
  </Space>
);
