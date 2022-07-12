import styled from 'styled-components';
import logo from './logo.png';

const HeaderContainer = styled.header`
  padding: 0.5rem 0.5rem 0 0.5rem;
  background: #264563;
`;

const LogoDiv = styled.div``;

const LogoLink = styled.a`
  height: 100%;
`;

const LogoImage = styled.img`
  width: 20%;
  height: auto;
  vertical-align: middle;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoDiv>
        <a href="/">
          <LogoImage src={logo} />
        </a>
      </LogoDiv>
    </HeaderContainer>
  );
};

export default Header;
