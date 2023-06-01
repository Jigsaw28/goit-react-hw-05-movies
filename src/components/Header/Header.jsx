import { HeaderStyled, Link } from "./Header.styled"

export const Header = () => {
    return (
        <HeaderStyled>
            <Link to='/'>Home</Link>
            <Link to='/movies'>Movies</Link>
        </HeaderStyled>
    )
}