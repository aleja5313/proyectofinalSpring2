import styled from "styled-components";

export const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    background-color: black;
    margin:  0px;
   
`
export const Subtitulo = styled.h2`
    padding: 2.7rem;
    margin-top: -1.5rem;
    font-size: 16px;
    font-family:'Nunito', sans-serif; 
    font-weight: normal; 
    font-style: normal;
    line-height: 30px;
    text-align: left;
    color: white;
    margin-bottom:0.5rem;
    background-color: black;
`
export const Info = styled.p`
    color: white;
    font-size: 16px;
    font-family:'Nunito', sans-serif; 
    font-weight: normal; 
    border: 1px solid #fff;
    padding: 30px;
    width: fit-content;
    border-radius: 20px;
    @media only screen and (min-width: 366px) {
        width: 300px;
        
    }
`


