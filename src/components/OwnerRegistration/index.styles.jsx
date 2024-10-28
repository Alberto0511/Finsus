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
    padding: 60px;
    margin-top: 350px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

  & > div {
    
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    box-sizing: border-box;

    @media (max-width: 768px) {
      flex: 0 0 100%;
      max-width: 100%;
      padding-right: 0;
      padding-left: 0;
    }
  };
`;

export const ClassLabelBodyOwner = styled.label`
  font-size: 1.8rem;
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
  font-size: 0.9rem;
  color: #23223f;
  font-family: "Arial", sans-serif;
`;

export const SelectOwner = styled.div`
  background: #fff;
  flex: 0 0 50%;
  ${({ id }) =>
    id === 'kindProperty' &&
    `
      flex: 0 0 100%;
      width: 100%;
    `}
   @media (max-width: 768px) {
    flex: 0 0 100%;
   }
`;

export const StyledSelect = styled.select`
  border-radius: 3px;
  background: #fff;
  color: #23223f;
  margin-bottom: 1em;
  width: 100%;
  height: 2em;
  font-size: 15px;
  text-align: justify;
  border: 1px solid #23223f;
  padding-left: 15px;
  box-sizing: border-box;
  overflow: none;
  opacity: 0.9;
  appearance: none;
  transition: all 0.8s ease-in-out;




  &:focus {
    opacity: 1;
    transform: scale(1.02);
    transition: opacity 0.8s ease-in-out, transform 0.3s ease-in-out;
  }

  &:focus option:checked {
    font-weight: bold;
  }

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
  };
  ${({ id }) =>
    id === 'kindProperty' &&
    `
      width: 100%;
    `}

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledInputOwner = styled.input`
  border-radius: 6px;
  color: #23223f;
  margin-bottom: 1em;
  width: 100%;
  height: 2.8em;
  font-size: 12px;
  text-align: justify;
  border: 0.5px solid #23223f;
  padding-left: 15px;
  box-sizing: border-box;
  outline: none;

  &:active,
  &:hover,
  &:focus{
    border-color: #23223f;
  };
`;

export const ValidateClassError = styled.span`
  color: red;
`;

export const ClassStyleButtonOwner = styled.button`
  height: 4em;
  border-radius: 0.3em;
  margin-top: 2.3em;
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
  font-family: "Arial", sans-serif;
  font-size: 0.7em;
`;
