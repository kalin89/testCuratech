import React, { useState } from "react";
import { Input, Button, Row, Col } from "antd";
import { SyncOutlined } from "@ant-design/icons";

export const Steps = () => {
  const [stepInput, setStepInput] = useState("");
  const [totalValleys, setTotalValleys] = useState(0);
  const [enableButton, setenableButton] = useState(true);

  const validateSteps = (e) => {
    const { value } = e.target;
    const reg = /^([DdUu])*$/;
    const valor1 = reg.test(value);
    if (reg.test(value) || value === "") {
      setStepInput(value.toUpperCase());
      setenableButton(value.length < 2);
    }
  };

  const calculateValleys = () => {
    if (stepInput.length < 2) {
      return;
    }
    const arraySteps = stepInput.split("");
    let altitude = 0;
    let counterValleys = 0;
    let pathType = 1; // mountain = 1, vallye = 2
    arraySteps.forEach((value, index) => {
      if (altitude === 0) {
        pathType = value === "U" ? 1 : 2;
      }

      const directionStep = value === "U" ? 1 : -1;
      altitude += directionStep;

      if (altitude === 0 && pathType === 2) {
        counterValleys += 1;
      }
    });
    setTotalValleys(counterValleys);
  };

  const resetAll = () => {
    setStepInput("");
    setenableButton(true);
    setTotalValleys(0);
  };

  return (
    <div>
      <h1>Steps</h1>
      <Row gutter={[8, 8]}>
        <Col span={12} offset={6}>
          <Input
            size="middle"
            style={{ width: "30%" }}
            onChange={validateSteps}
            value={stepInput}
            placeholder="Agregar pasos"
          />
          <Button
            type="primary"
            disabled={enableButton}
            onClick={calculateValleys}
          >
            Procesar Pasos
          </Button>
          <Button type="primary" onClick={resetAll} icon={<SyncOutlined />} />
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={12} offset={6}>
          <h2>Total de Valles caminado {totalValleys}</h2>
        </Col>
      </Row>
    </div>
  );
};
