import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-column-gap: 20px;
    padding: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        grid-row-gap: 15px;
    };
`;

export const Button = styled.button`
    padding: 10px;
    background-color: teal;
    color: white;
    border: none;
    transition: background 1s, transform 0.5s;

    &:hover{
        background-color: hsl(180, 100%, 30%);
    transform: scale(1.1);
    };

    &:active{
        background-color: hsl(180, 100%, 35%);
    };
`;