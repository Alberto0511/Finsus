import styled from "styled-components";
import { InputNumber, Select } from "antd";




export const MainDiv = styled.div`
 background: #23223f; 
  min-height: 100vh; 
  width: 100vw; 
  margin: 0; 
  padding: 0; 
  box-sizing: border-box; 

  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 

  position: absolute; 
  top: 0; 
  left: 0; 
  
`;


export const Message = styled.div`
  margin: 1em;
  color: #fff;
  font-family: 'Arial';
`;


export const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  width: 100%;
`;


export const LoginContainerForm = styled.div`
  height: 25em;
  width: 50%;
  background: #3e3d56;
  color: #fff;
  font-family: 'Arial';
  padding: 2em;
  padding-top: 3em;
  padding-bottom: 3em;
  border-radius: 4px;
  margin: 1em;

  &::before {
    filter: blur(5px);
  }
`;


export const Row = styled.div`
  height: 50px;
  display: flex;
 
  flex-direction: row;
  justify-content: left;
  align-items: center;
  font-family: 'Arial';
  font-size: 12px;
  margin: 1em;
  padding-right: 1em;
`;


export const InputStyled = styled(InputNumber)`
  color: #ff0000; 
  border-radius: 5px;
  background: transparent;
  width: 75%;
  height: 2.5em;
  cursor: pointer;
  padding-left: 15px;

  &:active,
  &:hover,
  &:focus-within {
    background: transparent;
    border-color: #fff;
    cursor: pointer;
    color: #ff0000; 
  }
`;


export const SelectStyled = styled(Select)`
 width: 75%;
  height: 2.5em;
  border-radius: 5px;
  color: #fff !important;  

  .ant-select-selector {
    background-color: #3e3d56 !important; 
    border: 1px solid #fff !important; 
    color: #fff !important; 
  }

      &:hover {
        background-color: rgba(255, 255, 255, 0.1) !important;
        color: #fff !important; 
      }
    
  
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const ButtonStyled = styled.button`
  width: 40%;
  padding: 1em;
  background-color: #020e3a;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 6px;
  margin-top: 2em;
  &:hover{
    background-color: #8ab7e9;
  }
`;


export const Card = styled.div`
  width: 50%;
  height: 11em;
  background: #3e3d56;
  padding: 2em;
  border-radius: 4px;
  margin: 1em;
  font-family: 'Arial';
  color: #fff;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: start;

  b{
    margin-top: 2em;  
  }
`;


export const ResultsDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 2em;
`


export const Result = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  label{
    margin-bottom: 4px;
  }
`