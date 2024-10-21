
import styled from "styled-components";

export const DivElement = styled.div`
  width: 50%;
  float: left;
  margin-top: 30px;
`;

export const ClassLabelBodyOwner = styled.label`
  font-size: 0.9rem !important;
  font-weight: 400 !important;
  color: #4a4b65;
  margin-bottom: 1.5em;
`;

export const SelectOwner = styled.div`
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    color: #23223f !important;
  }
`;

export const StyledInputOwner = styled.input`
  border-radius: 6px;
  color: #000;
  margin-bottom: 1em;
  width: 100%;
  height: 2.5em;
  font-size: 12px;
  text-align: justify;
  border: 1px solid #23223f;
  padding-left: 15px;
`;

export const InputOwner = styled.input`
  font-size: 12px !important;
  color: #4a4b65 !important;
`;

export const ValidateClassError = styled.span`
  color: red;
`;

export const ClassStyleButtonOwner = styled.button`
  height: 3em !important;
  border-radius: 0.7em !important;
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

export const BtnOwner = styled.button`
  font-size: 16px !important;
  border-radius: 6px !important;

  &.btn-secondary.disabled,
  .btn-secondary:disabled {
    background-color: #ff5f54 !important;
    color: #b8b8b8 !important;
    font-size: 16px !important;
  }
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

//Estilos faltantes o generados nuevos
export const StyledSelect = styled.select`
  border-radius: 3px;
  color: #000;
  margin-bottom: 1em;
  width: 100%;
  border: 2px solid #23223f;
  height: 2.5em;
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
  }
`;
