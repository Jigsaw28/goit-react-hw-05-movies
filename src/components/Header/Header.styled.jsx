import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.nav`
    width: 100%;
    padding: 20px 0;
    padding-left: 40px;
    color: black;
    box-shadow: 0px 1px 1px rgba(0,0,0,.12), 0px 4px 4px rgba(0,0,0,.06), 1px 4px 6px rgba(0,0,0,.16);
`
export const Link = styled(NavLink)`
    font-size: 20px;

        &:hover {
            color: orange;
            text-decoration: underline;
        }

        &:last-child {
            padding-left: 20px;
        }
`