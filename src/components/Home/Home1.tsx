import styled from 'styled-components';
import { PATH } from '../../router/route';
import CommonBtn from '../@common/CommonBtn';

const Home1 = () => {
  const content = `에브리타임, 카톡방 일일이 찾아다니면서 설문 조사 뿌리지 마세요
  설렁에 한 번 업로드하면 각종 커뮤니티 배포와 기프티콘 배부까지 무료로 해드립니다!`;
  return (
    <Home1Layout>
      <Home1Container>
        <Title1>대학생이 설문조사 배포하는</Title1>
        <Title2>가장 합리적인 방법</Title2>
        <Content>{content}</Content>
        <CommonBtn to={PATH.SURVEY_DISTRIBUTION}>설문조사 배포하기</CommonBtn>
      </Home1Container>
    </Home1Layout>
  );
};

export default Home1;

const Home1Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem 8rem;
  background-color: ${({ theme }) => theme.colors.maingreen};
  text-align: center;
`;

const Home1Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 12rem 3rem 12rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Title1 = styled.p`
  ${({ theme }) => theme.fonts.heading1};
  line-height: 1.2;
`;

const Title2 = styled.p`
  ${({ theme }) => theme.fonts.heading1b};
  line-height: 1.2;
`;

const Content = styled.p`
  ${({ theme }) => theme.fonts.body};
  white-space: pre-wrap;
  margin: 1rem 0 3rem 0;
  line-height: 1.5;
`;
