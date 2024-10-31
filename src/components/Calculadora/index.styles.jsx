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

export const InvestmentHeader = styled.div`
    margin-bottom: 1em;
    
`;

export const HeaderTable = styled.h3`
color: #fff;
text-align: center; 
    
`;

export const TableInversion = styled.div`
color: #fff; 
background-color: rgba(255, 255, 255, 0.2);
padding: 1em; 
border-radius: 20px; 
border: 1px solid #fff; 
margin: 3em;  
width: 46%;
overflow: hidden;


`;

// position: absolute;
//   background: 
//     linear-gradient(
//       to right,
//       rgba(255, 255, 255, 0.5) 1px, /* Espaciado de la línea */
//       transparent 1px,
//       transparent 10% /* Espaciado total entre líneas */
//     );
//   background-size: 10%; /* Ajusta para tener 9 líneas */
//   pointer-events: none; /* Evita que afecte la interacción con los elementos dentro */
//   padding: 20px; /* Espaciado interior */
//   margin: 10px 0; /* Espaciado superior e inferior */

export const SubtitleTable = styled.p`
color: #fff;
margin-bottom: 0.5em; 
text-align: center; 
`;

export const MinimumAmount = styled.span`
 display: block;
  color: #fff; 
  font-size: 0.9em; 
  font-weight: bold; 
  text-align: center; 
`;

export const InputNumberStyled = styled(InputNumber)`
 width: 100%;
 border-radius: 6px;
  background: transparent !important; 
  color: #ffffff !important; 
  margin-bottom: 1em;
  padding: 0.5em;
  border: 1px solid #ffffff !important; 


  &:hover,
  &:focus,
  &:active {
    background-color: transparent !important; 
    border-color: #fff; 
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5); 
    outline: none; 
  }

  & .ant-input-number-input {
    color: #ffffff !important;
    text-align: center; 
  }

`;

export const ResultTable = styled.div`
  padding: 2em;
  font-size: 0.4em; 
  line-height: 1.0; 
   position: relative;
  overflow: hidden;


`;


export const Investment_online_status = styled.div`
  margin-bottom: 4em;
  color: #fff;
  font-weight: bold;
  padding-left: 16em;
  padding-right: 1em; 
  margin-top: 2em;
  width: 80%; 
  display: flex; 
  flex-direction: row;
  justify-content: center;
  align-items: center; 
`;


export const Investment_item = styled.div`

  display: flex;
  justify-content: space-between;
  padding: 0.5em;
  border: 1px solid #444;
  border-radius: 9px;
  margin-bottom: 0.5em;
  margin-left: 2em;
  margin-right: 1em;
  max-width: 77%;
  width: ${({ isActive, size }) => (isActive ? size : '0%')};
  background: ${({ isActive }) => (isActive ? 'linear-gradient(to right, #fff, #ff5f54);' : '#444')};
  transition: background-color 0.9s;
  };
  
`;


export const Investment_period = styled.div`
  color: #fff;
  width: 70px;
  text-align: right;


`;


export const Investment_results = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  jusitify-content: center;
  algin-items: center;
  

  
`;


export const Results_container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 35px;
  margin-bottom: 0.5em; 


 
`;



export const Investment_yield = styled.div`
  color: #fff;
  
`;


export const Hidden_text = styled.span`
  color: transparent;
 
`;


export const Gat_container = styled.div`
  margin-top: 2em;
  width: 100%; 
  display: flex; 
  flex-direction: row;
  flex-wrap: wrap; 
  justify-content: start;
  font-size: 4px;
  font-family: 'Arial';
  
`;


export const Gat_title = styled.div`
  margin: 0px 8px 0px 12px; 
  font-weight: bold; 
  text-align: center;
  width: 10%;
  display: flex; 
  flex-wrap: wrap;
}
`;


export const Gat_item = styled.div`
  margin: 0px 14px 0px 5px; 
  font-weight: bold; 
  width: 7%;
  height: 35%;
  

 
`;


export const Help_text = styled.span`
  margin: 9px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap; 
  text-align: center;
  
  
`;

export const SpanLine = styled.span`
  display: block;
  position: absolute;
  top: 10px;
  left: ${({ left }) => left || '50%'};
  transform: translateX(-50%);
  width: 1px;
  height: 66%;
  background-color: #fff;
  z-index: 1;
  
`;