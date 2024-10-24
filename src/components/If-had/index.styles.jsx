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

  @media (max-width: 768px) {
    flex-direction: column; 
    
  }

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

 @media (max-width: 768px) {
    width: 70%; 
    margin-left: auto;  
    margin-right: auto; 
    
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
  

  @media (max-width: 1024px) {
    flex-direction: column; 
    align-items: flex-start; 
    padding-bottom: 1.5em; 

    div {
      width: 100%; 
    }

    label {
      margin-bottom: 4px; 
      font-size: 14px;
      color: #fff; 
    }
  }

  @media (max-width: 768px) {
    flex-direction: row; 
    align-items: center; 
    padding-bottom: 0.5em; 
    padding-left: 1.0em; 

    div {
      width: 90%; 
    }

    label {
      margin-right: 1em;
      align-self: center; 
    }
  }

 @media (max-width: 430px) {
    flex-direction: column; 
    align-items: flex-start; 
    padding-bottom: 1.5em; 

    div {
      width: 100%; 
      margin-left: 0; 
      padding-left: 0; 
    }

    label {
      margin-bottom: 4px; 
      font-size: 14px; 
      color: #fff; 
    }
  }

`;



export const InputStyled = styled(InputNumber)`
  color: #fff; 
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
    color: #fff; 
  };
  .ant-input-number-input {
    color: #fff; 
  };

 @media (max-width: 768px) {
    margin-left: 3em; 
   
  }


`;


export const SelectStyled = styled(Select)`
 width: 75%;
  height: 2.5em;
  border-radius: 5px;
  color: #fff !important;  

  &:active,
  &:hover,
  &:focus-within {
    background-color: rgba(255, 255, 255, 0.1) !important;
    border-color: #fff;
    cursor: pointer;
    color: #ff0000; 
  };

  .ant-select-selector {
    background-color: #3e3d56 !important;
    border: 1px solid #fff !important;
    color: #fff !important;
  }

  .ant-select-selection-item {
    color: #fff !important; 
  }

  .ant-select-arrow {
    color: #fff !important; 
  }

 @media (max-width: 768px) {
    margin-left: 3em; 
     
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
  height: 2.5em;
  padding: 1em;
  background-color: #001254;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 6px;
  margin-top: 2em;
  &:hover{
    background-color: #8ab7e9;
  };
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  
   @media (max-width: 768px) {
    width: 70%; 
    margin-left: auto;  
    margin-right: auto; 
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

   @media (max-width: 768px) {
    width: 70%; 
    margin-left: auto;  
    margin-right: auto; 
    margin-top: 1em;  
    height: 20em;
    line-height: 1.9;
  }
`;


export const ResultsDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 2em;

 @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    
  }


`;


export const Result = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  label{
    margin-bottom: 4px;
  }

  
`;



