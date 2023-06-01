import { Link } from "components/Header/Header.styled";
import styled from "styled-components";

export const ContainerMovieDetails = styled.div`
    padding-left: 20px;
    padding-top: 40px;
`
export const LinkStyled = styled(Link)`
    border: 1px solid;
    padding: 5px 10px;
    background-color: lightcoral;
    border-radius: 5px;
    &:hover {
        color: #000;
    }
`
export const WrapperImg = styled.div`
    padding-top: 20px;
    display: block;
    width: 500px;
`
export const WrapperContent = styled.div`
   display: flex; 
`
export const Info = styled.div`
    margin-left: 20px;
`
