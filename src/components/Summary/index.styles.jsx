import styled from "styled-components";
import { InputNumber, Button } from "antd";

export const Div_container = styled.div`
  padding: 2em;
  background-color: #fff;
  height: 100%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Div_calculator = styled.div`
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Div_text = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 700;
  color: #23223f;
  font-family: 'Arial', sans-serif;

  @media (max-width: 390px) {s
    display: flex;
    margin-bottom: 6px;
    font-size: 16px;
    line-height: 2.0;
    text-align: center;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    margin-bottom: 3px;
    line-height: 2.6;
    text-align: center;
  }
`;

export const Total_div = styled.div`
  height: 80px;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ff5f54;
  border-radius: 9px 9px 0px 9px;

  h3 {
    color: #23223f;
    margin: 0;
    font-weight: 400;
    font-size: 32px;
    font-family: "Arial", sans-serif;
  }

  @media (max-width: 768px) {
    height: 65px;
    width: 100%;
    max-width: 500px;
    display: flex;
    margin-bottom: 25px;
    margin-top: 10px;
    font-family: "Arial", sans-serif;
  }
`;

export const Total_button = styled(Button)`
  width: 100%;
  max-width: 390px;
  height: 45px;
  background-color: #fff;
  border: 1px solid #ff5f54;
  font-size: 15px;
  color: #ff5f54;
  margin: 2%;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #ff5f54 !important;
    color: #fff !important;
  }
`;

export const Span = styled.span`
  color: #23223f;
  height: "40px",
  margin: "0 6px",
 
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    width: 50%; 
  }
`;

export const Input = styled(InputNumber)`
  height: 40px;
  margin: 0 6px;
  border-radius: 10px;
  border: 2px dashed #ff5f54;
  background-color: #fff;
  padding: 0 10px;
  cursor: pointer;
  color: #23223f;
  padding-left: 15px;
  font-size: 20px;
  font-weight: bold;

  &:active,
  &:hover,
  &:focus-within {
    border: 2px dashed #ff5f54;
    font-weight: bold;
  }
`;
