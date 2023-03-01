import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    padding-bottom: 10px;
`;

export const Item = styled.li`
    margin: 20px;
    border-bottom: solid 2px #e0e0e0;
    display: flex;
    align-items: center;

    ${({ hidden }) => hidden && css`
        display: none;
    `};
`;

export const Content = styled.span`
    flex-grow: 1;

     ${({ done }) => done && css`
       text-decoration: line-through;
    `};
`;

export const Button = styled.button`
    width: 35px;
    height: 35px;
    background-color: green;
    border: none;
    margin: 10px;
    flex-shrink: 0;
    font-size: 20px;
    color: white;
    transition: background 1s;

    &:hover {
        background-color: hsl(120, 100%, 30%);
    };

    ${({ remove }) => remove && css`
        background-color: red;

        &:hover { 
            background-color: hsl(0, 100%, 60%);
        };
    `};
`;