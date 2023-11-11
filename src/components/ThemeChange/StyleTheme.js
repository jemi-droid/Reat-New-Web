// Styled components for different sections
import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  transition: background-color 0.3s, color 0.3s;
`;

export const NavigationCont = styled.nav`
  background-color: ${(props) => props.theme.navBackground};
  color: ${(props) => props.theme.navText};
  transition: background-color 0.3s, color 0.3s;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonText};
  transition: background-color 0.3s, color 0.3s;
`;
