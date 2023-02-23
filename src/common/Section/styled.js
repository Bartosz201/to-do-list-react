import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: white;
    margin-top: 10px;
    min-height: 160px;
`;

export const Header = styled.h2`
    padding: 20px;
    margin: 0;
`;

export const SectionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto;
    border-bottom: solid 2px #e0e0e0;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`