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
  
  


@media (max-width: 1255px) {
  background: #23223f; 
  height: 110vh; 
  
    }
  

  @media (max-width: 950px) and (min-width: 800){
    position: none; 
    max-width: 1255px;
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
margin-top: 3em;

@media (max-width: 1200px) {
    display: none;
    }
`;

export const TableInversion = styled.div`
  color: #D3D3D3; 
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0px; 
  border-radius: 20px; 
  border: 1px solid #fff; 
  margin: 1em auto; 
  width: 1190px; 
  
  overflow: hidden;
  font-size: 17px;
  padding-right: 5px;
  height: 95%;


  @media (max-width: 1255px) {
    width: 900px; 
    padding: 0.4em; 
    font-size: 15px; 
    
  }

  @media (max-width: 950px) {
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
margin-bottom: 1.6em; 
text-align: center; 
font-size: 16px;
@media (max-width: 1255px) {
  font-size: 15px;
  text-align: start; 
  margin-bottom: 1.4em;
  text-align: center; 
  font-size: 16px;
};
 
`;

export const MinimumAmount = styled.span`
  display: block;
  color: #fff; 
  font-size: 18px;
  font-weight: bold; 
  text-align: center; 
  margin-bottom: 2.5em;

  @media (max-width: 950px) {
    text-align: start; 
    font-size: 11px; 
  }
 
`;

export const InputNumberStyled = styled(InputNumber)`
 width: 95%;
 border-radius: 6px;
  background: transparent !important; 
  color: #ffffff !important; 
  margin-bottom: 1em;
  margin-left: 33px; 
  margin-right: 30px;
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

  @media (max-width: 1255px){
    width: 93%;
    margin-left: 30px; 
     padding: 0.6em;
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
  margin-left: 1em;
  margin-right: 0.5em;
  max-width: 100%;
  width: ${({ isActive, size }) => (isActive ? size : '0%')}; 

  background: ${({ isActive }) => (isActive ? 'linear-gradient(to right,#e0c7c0 , #ff5f54)' : 'linear-gradient(to right, #fff, #ff5f54)')}; 
  transition: background 1.9s, width 1.9s;

  /* Ajuste responsivo */
  @media (max-width: 1255px) {
   max-width: 100%;
    padding: 1em;
   width: ${({ isActive, size }) => (isActive ? `calc(${size} - 5%)` : '0%')};
  };
  @media (max-width: 950px) {
    display: none;
    }
`;


export const Investment_period = styled.div`
  color: #fff;
  width: 100px;
  margin-right: 0px;
  display: flex;
  align-items: center;    
  margin-left: 0px;  
  justify-content: flex-end;

  @media (max-width: 1255px) {
  width: 90px;
  justify-content: flex-end;
  text-align: right; 
    
  }
`;



export const Investment_results = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  jusitify-content: center;
  algin-items: center;


  @media (max-width: 950px) {
    height: 400px;
    font-size: 12px;
    width: 350px;
  }
`;


export const Results_container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 36px;
  margin-bottom: 0.2em;

  @media (max-width: 950px) {
    width: 300px;
    justify-content: center;
    margin-right: 0em;
    margin-bottom: 0; 
    margin-top: 1em; 
    margin-left: 9.5em;
    
  }


  @media (max-width: 1255px) {
  
  width: 107%;
  height: 36px;
  margin-bottom: 0.2em;
    
  }
 
`;



export const Investment_yield = styled.div`
  color: #fff;

  margin-right: 0px;
  margin-bottom: 0px; 
  margin-top: 0px; 
  margin-left: 0px;

  display: flex;           
  justify-content: center;  
  align-items: center;     
  
  @media (max-width: 1255px) {
    width: 100px;
    text-align; center;
    justify-content: start; 
  }
`;


export const Hidden_text = styled.span`
  color: transparent;
 
`;

export const Investment_online_status = styled.div`
  margin-bottom: 2.1em;
  color: #fff;
  font-weight: bold;
  padding-left: 12em;
  padding-right: 0em; 
  margin-top: 0.4em;
  width: 82%; 
  display: flex; 
  flex-direction: row;
  justify-content: center;
  align-items: center; 
  font-size: 17px;

  @media (max-width: 950px) {
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

   @media (max-width: 1255px) {
    width: 81%; 
    padding-left: 9.5em;
  }
`;



export const Gat_container = styled.div`
  margin-top: 0.2em;
  width: 100%; 
  display: flex; 
  flex-direction: row;
  flex-wrap: wrap; 
  justify-content: start;
  font-size: 17px;
  color: #fff;

  @media (max-width: 955px) {
    display: none;
    }
    
`;


export const Gat_title = styled.div`
  margin: 0px 25px 0px 90px; 
  font-weight: bold; 
  text-align: center;
  width: 7%;
  display: flex; 
  flex-wrap: wrap;
  line-height: 1.3; 
  
 @media (max-width: 1255px) {
  margin: 0px 15px 5px 65px; 
  font-weight: bold; 
  width: 7%;
  display: flex; 
  flex-wrap: wrap;
  line-height: 1.3; 
  
    }
`;


export const Gat_item = styled.div`
  margin: 0px 35px 30px 3px; 
  font-weight: bold; 
  width: 5%;
  height: 5%;

  @media (max-width: 1255px) {
  margin: 2px 10px 10px 17px; 
 
  font-weight: bold; 
  width: 5%;
  height: 5%;
    }
`;


export const Help_text = styled.span`
  margin: 5px;
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
  height: 64%;
  background-color: #808080;
  z-index: -1;

@media (max-width: 950px) {
    display: none;
    }


@media (max-width: 1255px) {
  height: 65%;
 
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
      width: 90%;
      margin-left: 1em;
      }
    }
`;
