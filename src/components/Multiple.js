import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import { SyncOutlined } from "@ant-design/icons";

export const Multiple = () => {
  const [counter, setCounter] = useState([]);

  const StartLoop = () => {
    let arrayCounter = [];
    for (let index = 1; index <= 100; index++) {
      arrayCounter = [...arrayCounter, index];
    }
    setCounter([...arrayCounter]);
  };

  const resetAll = () => {
    setCounter([]);
  };
  return (
    <div>
      <h1>Multiple</h1>
      <Row gutter={[8, 8]}>
        <Col span={12} offset={6}>
          <Button type="primary" onClick={StartLoop}>
            inicar conteo
          </Button>
          <Button type="primary" onClick={resetAll} icon={<SyncOutlined />} />
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={12} offset={6}>
          <ul>
            {counter.map((value) => {
              let text = "";
              if (value % 3 === 0) {
                text += "Fizz";
              }

              if (value % 5 === 0) {
                text += "Buzz";
              }

              if (text === "") {
                text = value.toString();
              }
              return <li key={value}>{text}</li>;
            })}
          </ul>
        </Col>
      </Row>
    </div>
  );
};
