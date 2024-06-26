import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

interface CommonBtnProps extends LinkProps {
  children: React.ReactNode;
}

const CommonBtn = ({ to, children, ...rest }: CommonBtnProps) => {
  return (
    <StyledLink to={to} {...rest}>
      {children}
    </StyledLink>
  );
};

export default CommonBtn;

const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors.subgreen};
  ${({ theme }) => theme.fonts.body4};
  padding: 0.8rem 1.5rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.maingreen};
  }

  &:focus {
    outline: none;
  }
`;
