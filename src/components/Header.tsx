import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PATH } from '../router/route';
import CommonBtn from './@common/CommonBtn';

const Header = () => {
  return (
    <HeaderLayout>
      <Logo>Sur-round</Logo>
      <HeaderContainer>
        <HeaderLink to={PATH.HOME}>Home</HeaderLink>
        <HeaderLink to={PATH.SURVEY_DISTRIBUTION}>설문배포</HeaderLink>
        <HeaderLink to={PATH.SURVEY_LIST}>설문리스트</HeaderLink>
        <HeaderLink to={PATH.BRAND_STORY}>브랜드스토리</HeaderLink>
        <CommonBtn to={PATH.CONTACT_US}>문의하기</CommonBtn>
      </HeaderContainer>
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  height: 5.5rem;
  background-color: ${({ theme }) => theme.colors.mid};
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fonts.heading1c};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const HeaderLink = styled(Link)`
  ${({ theme }) => theme.fonts.body3};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.maingreen};
  }
`;
