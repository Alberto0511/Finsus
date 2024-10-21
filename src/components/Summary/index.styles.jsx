import styled from "styled-components";
import { InputNumber, Button } from "antd";

export const Div_container = styled.div`
  padding: 2em;
  background-color: #fff;
  height: 100%;
  width: 100%;
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
  font-weight: 600;
  color: #23223f;
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
  
`;
