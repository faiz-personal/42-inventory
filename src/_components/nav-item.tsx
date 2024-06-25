import styled from 'styled-components';

// Define the styled component for the menu item
const NavItemWrapper = styled.div`
  font-family: 'Geist', sans-serif;
  font-size: 1.4em;
  color: grey; /* Initial font color */
  text-align: center;
  font-weight: bold;
  font-family: 'Geist';
  transition: all 0.2s ease;

  /* Hover styles */
  &:hover {
    font-size: 1.5em; /* Font size when hovering */
    color: white; /* Font color when hovering */
    cursor: pointer; /* Show a pointer cursor on hover */
  }
`;

interface NavItemProps {
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ text }) => {
  return <NavItemWrapper>{text}</NavItemWrapper>;
};

export default NavItem;
