import React, { useState, useRef } from "react";
import { Row, Col, Input, Button } from "antd";
import { PlusCircleOutlined, SyncOutlined } from "@ant-design/icons";

export const GroceryStore = () => {
  const [colors, setColors] = useState([]);
  const [inputColor, setInputColor] = useState("");
  const [inputEnable, setInputEnable] = useState(true);
  const [totalPair, setTotalPair] = useState(0);

  const inputRef = useRef();

  const AddNewColor = () => {
    setColors([...colors, inputColor]);
    setInputColor("");
    setInputEnable(true);
    inputRef.current.select();
  };

  const validateValue = (e) => {
    const { value } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (!isNaN(value) && reg.test(value)) {
      if (value > 100) {
        setInputColor(100);
        setInputEnable(false);
      } else {
        const newValue = Number(value);
        if (newValue === 0) {
          setInputColor("");
          setInputEnable(true);
        } else {
          setInputColor(Number(value));
          setInputEnable(false);
        }
      }
    }
  };

  const resetColors = () => {
    setColors([]);
    setTotalPair(0);
  };

  const lookForPairs = () => {
    let numberArray = []; //Almacenar los numero y cantidad de veces que se repiten como un arreglo de objectos.
    colors.forEach((value, index) => {
      if (index === 0) {
        const totalRepit = CompareNumber(value);
        numberArray = [
          ...numberArray,
          { number: value, countPair: Math.floor(totalRepit / 2) },
        ];
      } else {
        let exist = false;
        numberArray.forEach((color) => {
          if (color.number === value) {
            exist = true;
          }
        });

        if (!exist) {
          const totalRepit = CompareNumber(value);
          numberArray = [
            ...numberArray,
            { number: value, countPair: Math.floor(totalRepit / 2) },
          ];
        }
      }
    });

    let total = 0;
    numberArray.forEach((color) => {
      total += color.countPair;
    });
    setTotalPair(total);
  };

  const CompareNumber = (numberCompare) => {
    let count = 0;
    colors.forEach((value) => {
      if (value === numberCompare) {
        count += 1;
      }
    });

    return count;
  };

  return (
    <>
      <h1>Grosery Store</h1>
      <Row gutter={[8, 8]}>
        <Col span={12} offset={6}>
          <Input
            placeholder="Agregar color"
            size="middle"
            style={{ width: "30%" }}
            onChange={(e) => validateValue(e)}
            value={inputColor}
            ref={inputRef}
          />
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            disabled={inputEnable}
            onClick={AddNewColor}
          />
          <Button
            type="primary"
            icon={<SyncOutlined />}
            onClick={resetColors}
          />
        </Col>
        <Col span={12} offset={6}>
          {colors.map((value, index) => (
            <span className="items" key={index}>
              {value}
            </span>
          ))}
          {/* <h3 style={{ fontWeight: "bold" }}>{items}</h3> */}
        </Col>
        <Col span={12} offset={6}>
          <Button type="primary" size="middle" onClick={lookForPairs}>
            Realizar busqueda
          </Button>
          <h3>Pares de colores</h3>
        </Col>
        <Col span={12} offset={6}>
          <h2>{totalPair}</h2>
        </Col>
      </Row>
    </>
  );
};
