import { Form, Button, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'




export const NavStyle = styled(Nav)`
    background-color: #232E35;
`
export const linkStyle = styled(Link)`
    color: white;
    `

export const FormStyle = styled(Form)`
    color: white;
    background-color: black;
    border-radius: 10px;
    box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
    width: 600px;
`


export const DivForm = styled.div`
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0rem;
    height: 88vh;
`



export const Titulo = styled.h2`
    padding: 1rem;
    text-align: center;
    margin: 0;
`
export const RadioStyle = styled(Form.Check)`
    padding: 0;
    font-size: 1.2rem;
    margin: 1rem 0;
`

export const ButtonStyle = styled(Button)`
    background-color: purple;
    border:none;
    margin-left: 10%;
    width: 80%;
    font-size: 1.4rem;
    font-weight: 500;
    padding: 1rem;
    border-radius: 20px;
    &:hover{
        background-color: #732d91;
    }
    &:focus{
        outline: none;
        background-color: #5e3370;
    }
`
export const ProgressBar = styled.div`
    margin-top: 5px;
    display: flex;
    align-items: center;

    `

export const ContainerStyle = styled.div`
color: white;
background-color: black;
border-radius: 10px;
box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
width: 80%;
padding: 4rem;
display: inline-block;
flex-direction: column;

`