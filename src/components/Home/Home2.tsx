import styled from 'styled-components';
import CommonHome2 from '../@common/CommonHome2';

const Home2 = () => {
  return (
    <Home2Layout>
      <Label>BENEFITS</Label>
      <Title>대학생이 Sur-round를 사용하는 이유</Title>
      <Home2Container>
        <CommonHome2
          imageUrl='src/assets/고양이.png'
          altText='임시'
          title='설문조사 배포'
          content={`제작한 설문조사 링크를 업로드하면\n각종 커뮤니티에 무료 배포해드립니다.`}
        />
        <CommonHome2
          imageUrl='src/assets/고양이.png'
          altText='임시'
          title='응답자 보상'
          content={`데이터 수집 알림을 받거나 응답자에게\n보상을 제공하는 일도 한 번에 해결하세요.`}
        />
        <CommonHome2
          imageUrl='src/assets/고양이.png'
          altText='임시'
          title='데이터 분석_개발 중'
          content={`전체 데이터 분석과 요약으로\n데이터 파악 시간을 줄여드립니다.`}
        />
      </Home2Container>
    </Home2Layout>
  );
};

export default Home2;

const Home2Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 6rem 6rem 6rem;
  background-color: ${({ theme }) => theme.colors.mid};
  position: relative;
`;

const Label = styled.div`
  ${({ theme }) => theme.fonts.body2};
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  border-radius: 5rem;
  padding: 0.1rem 1rem;
  position: absolute;
  top: 4rem;
  left: 7rem;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.heading2};
  margin: 2rem;
`;

const Home2Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
