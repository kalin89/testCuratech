import { GroceryStore } from "./components/GroceryStore";
import { Divider, Row, Col, Image } from "antd";
import { Steps } from "./components/Steps";
import { Multiple } from "./components/Multiple";

function App() {
  return (
    <div className="app">
      <div className="title">
        <h1>Curatech</h1>
      </div>
      <br />
      <Row gutter={[2, 16]}>
        <Col span={6}>
          <Image
            width={300}
            src="https://curatech.mx/assets/images/home/doctor/img-sample-doctor@2x.png"
          />
        </Col>
        <Col span={12}>
          <GroceryStore />
          <Divider />
          <Steps />
          <Divider />
          <Multiple />
        </Col>
        <Col span={6}>
          <Image
            width={300}
            src="https://curatech.mx/assets/images/home/pacient/img-patient@2x.png"
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
