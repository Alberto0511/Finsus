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

export const InputOwner = styled.input`
  font-size: 12px !important;
  color: #4a4b65 !important;
`;

export const ValidateClassError = styled.span`
  color: red;
`;

export const ClassStileButtonOwner = styled.button`
  height: 3em !important;
  background: white !important;
  color: red !important;
  border: 1px solid #ff5f54 !important;
  border-radius: 0.7em !important;
  margin-top: 1em;

  &:hover {
    background: #ff5f54 !important;
    color: #fffcfc !important;
  }
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
  border-radius: 6px;
  color: #000;
  margin-bottom: 1em;
  width: 100%;
  border: 1px solid #8b9ba0cc;
`;

export const StyledLabel = styled.label`
  display: ${(props) => props.display};
  color: red;
`;
