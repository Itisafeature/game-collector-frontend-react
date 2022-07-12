import { useState } from 'react';
import styled from 'styled-components';
import logo from './logo.png';

const HeaderContainer = styled.header`
  padding: 0.5rem 0.5rem 0 0.5rem;
  background: #264563;
  display: flex;
  justify-content: space-between;
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

const HamburgerContainer = styled.div``;

const HamburgerButton = styled.button`
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const HamburgerBar = styled.div`
  width: 2.5rem;
  height: 0.25rem;
  background: black;
  border-radius: 10px;
  transition: all 0.3s linear;
  transform-origin: 1px;
`;

const BarOne = styled(HamburgerBar)`
  transform: ${props =>
    props.mobileMenuShown ? 'rotate(45deg)' : 'rotate(0)'};
`;

const BarTwo = styled(HamburgerBar)`
  opacity: ${props => (props.mobileMenuShown ? 0 : 1)};
  transform: ${props =>
    props.mobileMenuShown ? 'translateX(20px)' : 'translateX(0)'};
`;

const BarThree = styled(HamburgerBar)`
  transform: ${props =>
    props.mobileMenuShown ? 'rotate(-45deg)' : 'rotate(0)'};
`;

const Header = () => {
  const [mobileMenuShown, setMobileMenuShown] = useState(false);

  return (
    <HeaderContainer>
      <LogoDiv>
        <a href="/">
          <LogoImage src={logo} />
        </a>
      </LogoDiv>
      <HamburgerContainer>
        <HamburgerButton>
          <BarOne></BarOne>
          <BarTwo></BarTwo>
          <BarThree></BarThree>
        </HamburgerButton>
      </HamburgerContainer>
    </HeaderContainer>
  );
};

export default Header;
