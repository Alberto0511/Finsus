import styled from "styled-components";
import { InputNumber, Select } from "antd";



export const MainDiv = styled.div`
  background: #23223f; 
  height: 100vh; 
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
  font-family: 'Arial';

  @media (max-width: 1200px) and (min-width: 800){
    position: none; 
    max-width: 1200px;
    height: 100%; 
  };
  
`;

export const InvestmentHeader = styled.div`
    margin-bottom: 1em;

    @media (max-width: 1200px) {
      display: flex;
      flex-direction: column;
      justify-content: start;
      margin-bottom: 5em;
      text-align: start; 
      font-size: 13px;
      width: 350px;
    }
`;

export const HeaderTable = styled.h3`
color: #fff;
text-align: center; 
@media (max-width: 1200px) {
    display: none;
    }
`;

export const TableInversion = styled.div`
  color: #D3D3D3; 
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1em; 
  border-radius: 20px; 
  border: 1px solid #fff; 
  margin: 3em auto; 
  width: 1160px; 
  max-width: 1200px; 
  overflow: hidden;
  font-size: 17px;
  

  @media (max-width: 1255px) {
    width: 1000px; 
    padding: 0.4em; 
    font-size: 15px; 
  }

  @media (max-width: 1200px) {
    background: transparent;
    width: 350px; 
    border: none;
    }
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
margin-bottom: 1.2em; 
text-align: center; 
font-size: 16px;
@media (max-width: 1200px) {
  font-size: 15px;
  text-align: start; 
};
 
`;

export const MinimumAmount = styled.span`
 display: block;
  color: #fff; 
  font-size: 1.1em; 
  font-weight: bold; 
  text-align: center; 

  @media (max-width: 1200px) {
    text-align: start; 
    font-size: 11px; 
  }
 
`;

export const InputNumberStyled = styled(InputNumber)`
 width: 100%;
 border-radius: 6px;
  background: transparent !important; 
  color: #ffffff !important; 
  margin-bottom: 1em;
  padding: 0.4em;
  border: 1px solid #ffffff !important; 
  font-size: 1.3em; 

  &:hover,
  &:focus,
  &:active {
    background-color: transparent !important; 
    border-color: #fff; 
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5); 
    outline: none; 
  };

  & .ant-input-number-input {
    color: #ffffff !important;
    text-align: center; 
  };

  @media (max-width: 1200px){
    width: 95%;
  };
`;

export const ResultTable = styled.div`
  padding: 0em; 
  line-height: 1.0; 
  position: relative;
  overflow: hidden;
  font-size: 16px;
  position: relative;
  z-index: 1;
  @media (max-width: 1200px) {
    display: flex;
    width: 350px;
  }


`;




export const Investment_item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.0em;
  border: 1px solid #444;
  border-radius: 9px;
  margin-bottom: 0.5em;
  margin-left: 0em;
  margin-right: 0.5em;
  max-width: 100%;
  width: ${({ isActive, size }) => (isActive ? size : '0%')}; 

  background: ${({ isActive }) => (isActive ? 'linear-gradient(to right, #fff, #ff5f54)' : 'linear-gradient(to right, #fff, #ff5f54)')}; 
  transition: background 1.9s, width 1.9s;

  /* Ajuste responsivo */
  @media (max-width: 1255px) {
    padding: 0.9em;
    width: ${({ isActive, size }) => (isActive ? `calc(${size} * 1 - 9px)` : '0%')};
  };
  @media (max-width: 1200px) {
    display: none;
    }
`;


export const Investment_period = styled.div`
  color: #fff;
  width: 70px;
  margin-right: 15px;
  display: flex;
  align-items: center;    
      
  justify-content: flex-end;

  @media (max-width: 1200px) {
    width: 120px;
    text-align: center; 
    justify-content: start;
    text-align: right; 
    margin-right: 0em;
  }
`;



export const Investment_results = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  jusitify-content: center;
  algin-items: center;

  @media (max-width: 1200px) {
    height: 400px;
    font-size: 12px;
    width: 350px;
  }
`;


export const Results_container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 35px;
  margin-bottom: 0.6em; 
  @media (max-width: 1200px) {
    width: 300px;
    justify-content: center;
    margin-right: 0em;
    margin-bottom: 0; 
    margin-top: 1em; 
    margin-left: 9.5em;
    
  }
 
`;



export const Investment_yield = styled.div`
  color: #fff;
 
  display: flex;           
  justify-content: center;  
  align-items: center;     
  
  @media (max-width: 1200px) {
    width: 100px;
    text-align; center;
    justify-content: start; 
  }
`;


export const Hidden_text = styled.span`
  color: transparent;
 
`;

export const Investment_online_status = styled.div`
  margin-bottom: 2em;
  color: #fff;
  font-weight: bold;
  padding-left: 10em;
  padding-right: 1em; 
  margin-top: 1em;
  width: 79%; 
  display: flex; 
  flex-direction: row;
  justify-content: center;
  align-items: center; 
  font-size: 17px;

  @media (max-width: 1200px) {
    flex-direction: column;
    margin: 0;
    pading: 0;
    font-weight: normal;
    width: 50px; 
    height: 200px;
    position: absolute;
    top: 130px;
    left: -107px;
    font-size: 12px;

    span{
      margin-bottom: 2.6em;
    }
  }
`;



export const Gat_container = styled.div`
  margin-top: .2em;
  width: 100%; 
  display: flex; 
  flex-direction: row;
  flex-wrap: wrap; 
  justify-content: start;
  font-size: 17px;
  color: #fff;

  @media (max-width: 1200px) {
    display: none;
    }
`;


export const Gat_title = styled.div`
  margin: 0px 29px 0px 50px; 
  font-weight: bold; 
  text-align: center;
  width: 7%;
  display: flex; 
  flex-wrap: wrap;
  
}
`;


export const Gat_item = styled.div`
  margin: 0px 15px 0px 5px; 
  font-weight: bold; 
  width: 7%;
  height: 35%;
`;


export const Help_text = styled.span`
  margin: 7px;
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
  height: 63%;
  background-color: #fff;
  z-index: -1;
  @media (max-width: 1200px) {
    display: none;
    }
`;


export const Resp_Titles = styled.div`
  display: none;
  span{
      display: none;
  };
  @media (max-width: 1200px) {
    width: 350px;
    display: flex;
    flex-direction: row;
    justify-content: center
    margin-bottom: 1em;
    
    font-weight: bold; 
    span{
      display: block;
      
    };
    div{
      width: 90px;
      margin-left: 3em;
      }
    }
`;
