import { Button } from 'react-bootstrap'
import styled from "styled-components";

export const DivProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: black;
    padding: 9rem 3rem
    
`
export const Titulo = styled.h2`
    font-size: 24px;
    font-family:'Nunito', sans-serif;
    font-weight: bold;
    font-style: normal;
    text-align: left;
    color: white;
    background-color: black;
`
export const ButtonProfile = styled(Button)`
    background-color: black;
    color: #EF4565;
    border: none;
    border-radius:0px;
    width: 100%;
    font-size: 16px;
    padding: 2rem;
`
export const NombreProfile = styled.h2`
    font-size: 24px;
    font-family:'Nunito', sans-serif;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0;
`
export const MailProfile = styled.h3`
    margin-top: 0;
    font-size: 14px;
    font-family:'Nunito', sans-serif;
    font-style: normal;
    font-weight: 800;
    text-align: center;

`
