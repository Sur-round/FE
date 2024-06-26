import styled from 'styled-components';
import { PATH } from '../../router/route';
import CommonBtn from '../@common/CommonBtn';

const Home3 = () => {
  return (
    <Home3Layout>
      <Home3Container>
        <Label>GET IN TOUCH</Label>
        <Title1>설문조사 배포는 서라운드에게 맡기고</Title1>
        <Title2>더 중요한 일에 집중하세요.</Title2>
        <CommonBtn to={PATH.CONTACT_US}>문의하기</CommonBtn>
      </Home3Container>
    </Home3Layout>
  );
};

export default Home3;

const Home3Layout = styled.div`
  display: flex;
  align-items: center;
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.subgreen};
`;

const Home3Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  position: relative;
`;

const Label = styled.div`
  ${({ theme }) => theme.fonts.body2};
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  border-radius: 5rem;
  padding: 0.1rem 1rem;
  position: absolute;
  top: 3rem;
  left: 3rem;
`;

const Title1 = styled.p`
  ${({ theme }) => theme.fonts.heading2};
  margin-top: 2rem;
  line-height: 1.2;
`;

const Title2 = styled.p`
  ${({ theme }) => theme.fonts.heading2b};
  margin-bottom: 2rem;
  line-height: 1.2;
`;
