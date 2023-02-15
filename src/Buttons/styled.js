import styled from "styled-components";

export const ButtonsContainer = styled.div`
    align-self: center;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr;
    };
`;

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
`;