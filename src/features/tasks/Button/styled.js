import styled, { css } from "styled-components";


export const Button = styled.button`
    color: teal;
    background: none;
    border: none;
    padding: 20px;
    font-size: 18px;
    transition: color 1s;

    &:hover{
        color: hsl(180, 100%, 35%);
    }

    &:disabled{
        color: #e0e0e0;
    }
    ${({ failure }) => failure && css`
    &:disabled{
        color: red;
    }
    `};
`;