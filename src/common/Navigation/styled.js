import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const Wraper = styled.nav`
    background-color: teal;
    margin: 0;
`;

export const NavigationList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 10px;
    display: flex;
    justify-content: center;
`;

export const ListItem = styled.li`
padding: 10px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName: "active"
}))`
color: white;
text-decoration: none;
&.active{
    font-weight: bold;
}
`;
