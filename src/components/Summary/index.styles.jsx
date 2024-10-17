
import styled from 'styled-components';
import { InputNumber, Button } from "antd";


export const Div_container = styled.div`
    padding: 2em;
    background-color: #fff;
    color: white;
    font-color: #000000;
    height: 100%;
    width: 100%;
`;

export const Div_calculator = styled.div`
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Div_text = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
`;

export const Input = styled(InputNumber)`
    height: 30px;
    margin: 0 6px; 
    border-radius: 6px; 
    border: 2px dashed #ff5f54;
    background-color: #fff;
    outline: none;
    cursor:pointer;

    &:hover {
        border: 2px dashed #ff5f54;
    }, 
    &:focus {
        border: 2px dashed #ff5f54;
    }, 
    &:focus:not{
        border: 2px dashed #ff5f54;
    }
`;

export const Total_div = styled.div`

    height: 70px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ff5f54;
    border-radius: 9px 9px 0px 9px;
    h3{
        color: #000000;
    }
`;

export const Total_button = styled(Button)`
    width: 370px;
    height: 40px;
    background-color: #fff;
    border: 1px solid #ff5f54;
    font-size: 13px;
    color: #ff5f54;
    margin: 2%;
    cursor:pointer;

    &:hover {
        background-color: #ff5f54 !important;
        color: #fff;
    }
`;

export const Span = styled.span`
    color: #000000;
`;
