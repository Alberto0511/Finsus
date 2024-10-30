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
border-radius: 5px; 
border: 2px solid #fff; 
margin: 3em;  
width: 60%;
`;

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

  font-size: 0.5em; 
  line-height: 2.0; 
`;


export const Investment_online_status = styled.div`
  margin-bottom: 1em;
  color: #fff;
  font-weight: bold;
  display: flex;
  flex-direction: center;
  }
`;


export const Investment_item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
  border: 1px solid #444;
  border-radius: 6px;
  margin-bottom: 0.5em;
  margin-left: 2em;
  margin-right: 2em;
  max-width: 80%;
  width: ${({ isActive, size }) => (isActive ? size : '0%')};
  background: ${({ isActive }) => (isActive ? 'linear-gradient(to right, #fff, #ff5f54);' : '#444')};
  transition: background-color 0.3s;
  };
`;


export const Investment_period = styled.div`
  color: #fff;
  width: 40px;
  }
`;


export const Investment_results = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  jusitify-content: center;
  algin-items: center;
  }
`;


export const Results_container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30px;
`


export const Investment_yield = styled.div`
  color: #fff;
  }
`;


export const Hidden_text = styled.span`
  color: transparent;
  }
`;


export const Gat_container = styled.div`
  margin-top: 2em;
  width: 100%; 
  display: flex; 
  flex-direction: row;
  flex-wrap: wrap; 
  justify-content: start;
  font-size: 12px;
  font-family: 'Arial';
  }
`;


// export const Gat_items = styled.div`
//   display: flex;
//   flex-wrap: wrap; 
//   justify-content: space-around;
//   width: 100%;
//   margin: 0px 10px 0px 10px; 
// }
// `;

export const Gat_title = styled.div`
  margin: 0px 65px 0px 70px; 
  font-weight: bold; 
  text-align: center;
  width: 10%;
  display: flex; 
  flex-wrap: wrap;
}
`;


export const Gat_item = styled.div`
  margin: 0px 5px 0px 5px; 
  font-weight: bold; 
  width: 7%;
  height: 5%;
}
`;


export const Help_text = styled.span`
  margin: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap; 
  text-align: center;
  }
`;





// export const Body = styled.body`
//   background-color: #23223f;
//   color: white;
//   font-family: Arial, sans-serif;
// `;

// export const InvestmentSimulator = styled.div`
//   max-width: 1000px;
//   margin: 2em auto;
//   padding: 1em;
//   border-radius: 10px;
//   background-color: rgba(255, 255, 255, 0.2);
//   backdrop-filter: blur(1px);
//   border: 2px solid rgba(255, 255, 255, 0.8);
// `;

// export const Header = styled.h1`
//   color: #fff;
//   text-align: center;
// `;

// export const InvestmentHeader = styled.div`
//   margin-bottom: 1em;
// `;

// export const InvestmentDescription = styled.p`
//   color: #fff;
//   margin-bottom: 0.5em;
//   text-align: center;
// `;

// export const InputNumber = styled.input`
//   border-radius: 6px;
//   background: transparent;
//   color: #fff;
//   margin-bottom: 1em;
//   padding: 0.5em;
//   border: 1px solid #fff;
//   width: 100%;
// `;

// export const MinimumAmount = styled.span`
//   display: block;
//   color: #fff;
//   font-size: 0.9em;
//   font-weight: bold;
//   text-align: center;
// `;

// export const MarginBottom = styled.div`
//   margin-bottom: 1em;
// `;

// export const InvestmentDetails = styled.div`
//   margin-top: 1em;
// `;

// export const InvestmentOnlineStatus = styled.div`
//   margin-bottom: 1em;
//   color: #fff;
//   font-weight: bold;
// `;

// export const InvestmentResults = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const InvestmentItem = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 0.5em;
//   border: 1px solid #444;
//   border-radius: 6px;
//   margin-bottom: 0.5em;
//   background-color: #444;
//   transition: background-color 0.3s;

//   &.active {
//     background-color: #ff5f54;
//   }
// `;

// export const InvestmentPeriod = styled.div`
//   color: #fff;
// `;

// export const InvestmentYield = styled.div`
//   color: #fff;
// `;

// export const HiddenText = styled.span`
//   color: transparent;
// `;

// export const GatContainer = styled.div`
//   margin-top: 2em;
//   margin-left: -3em;
//   width: 120%; 
//   display: flex; 
//   align-items: center; 
// `;

// export const Title = styled.div`
//   margin-bottom: 0; 
//   font-weight: bold; 
//   text-align: left; 
//   flex: 1; 
// `;

// export const GatItems = styled.div`
//   display: flex;
//   flex-wrap: wrap; 
//   justify-content: flex-start; 
//   margin-left: 0.5em; 
// `;

// export const GatItem = styled.div`
//   margin: 0.3em;
//   flex: 0 1 auto; 
//   font-weight: bold; 
// `;
