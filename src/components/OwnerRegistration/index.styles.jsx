import styled from "styled-components";

export const DivElement = styled.div`
  width: 50%;
  float: left;
  margin-top: 30px;

  @media (max-width: 768px) {
    width: 100%;
    float: none;
  }
`;

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const CubeDiv = styled.div`
  width: 1000px;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 1200px) {
    width: 800px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 15px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

  & > div {
    flex: 0 0 50%;
    max-width: 50%;
    padding-right: 15px;
    padding-left: 15px;
    box-sizing: border-box;

    @media (max-width: 768px) {
      flex: 0 0 100%;
      max-width: 100%;
      padding-right: 0;
      padding-left: 0;
    }
  }
`;

export const ClassLabelBodyOwner = styled.label`
  font-size: 1.5rem;
  color: #4a4b65;
  font-family: "Arial", sans-serif;
  margin-bottom: -40px;
`;
export const Subtitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  color: #4a4b65;
  margin-bottom: 1.5em;
  font-family: "Arial", sans-serif;
  margin-top: 45px;
`;

export const Label = styled.p`
  font-size: 1rem;
  color: #23223f;
  font-family: "Arial", sans-serif;
`;

export const SelectOwner = styled.div`
   background: #fff;
`;


export const StyledSelect = styled.select`
  border-radius: 3px;
  color: #23223f;
  margin-bottom: 1em;
  width: 100%;
  height: 2.5em;
  font-size: 12px;
  text-align: justify;
  border: 1.5px solid #23223f;
  padding-left: 15px;
  box-sizing: border-box;
  overflow: auto; 

  &::-webkit-scrollbar {
    width: 12px; 
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 10px; 
    border: 2px solid #f1f1f1; 
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`;

export const StyledInputOwner = styled.input`
  border-radius: 6px;
  color: #23223f;
  margin-bottom: 1em;
  width: 100%;
  height: 2.5em;
  font-size: 12px;
  text-align: justify;
  border: 1px solid #23223f;
  padding-left: 15px;
  box-sizing: border-box; 
`;

export const ValidateClassError = styled.span`
  color: red;
`;

export const ClassStyleButtonOwner = styled.button`
  height: 4em;
  border-radius: 0.3em;
  margin-top: 1em;
  width: 100%;
  background: white !important;
  color: red !important;
  border: 1px solid #ff5f54 !important;

  &:hover {
    background: #ff5f54 !important;
    color: #fffcfc !important;
  }

  ${({ disabled }) =>
    disabled &&
    `
    background: #f0f0f0 !important; 
    color: #b8b8b8 !important; 
    border: 1px solid #ccc !important; 
    cursor: not-allowed; 
  `}
`;

export const ContainerDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  
`;

export const LoginContainerFormSummary = styled.div`
  background: hsla(0, 0%, 100%, 0.12) !important;
  color: #fff !important;
  font-family: "Poppins";
  box-shadow: none !important;
`;

export const LoaderClass = styled.div`
  span > i {
    background-color: #ff5f54;
    width: 46px;
    height: 46px;
  }

  span {
    font-size: 94px;
  }
`;

export const ButtonDiv = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLabel = styled.label`
  display: ${(props) => props.display || "block"};
  color: ${(props) => props.color || "red"};
`;
