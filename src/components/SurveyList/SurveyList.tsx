import styled from 'styled-components';

const data = [
  {
    title: '스마트ICT융합공학과 종합설계1 팀프로젝트 수요조사',
    link: 'https://docs.google.com/forms/',
  },
  {
    title: '스마트ICT융합공학과 종합설계1 팀프로젝트 수요조사',
    link: 'https://docs.google.com/forms/',
  },
  {
    title: '스마트ICT융합공학과 종합설계1 팀프로젝트 수요조사',
    link: 'https://docs.google.com/forms/',
  },
  {
    title: '스마트ICT융합공학과 종합설계1 팀프로젝트 수요조사',
    link: 'https://docs.google.com/forms/',
  },
];

const SurveyList = () => {
  return (
    <SurveyListLayout>
      <Label>LIST</Label>
      <Title>설문조사 리스트</Title>
      <SurveyListContainer>
        {data.map((item, index) => (
          <ListItem key={index}>
            <p>{item.title}</p>
            <p>
              링크: <a href={item.link}>{item.link}</a>
            </p>
          </ListItem>
        ))}
      </SurveyListContainer>
    </SurveyListLayout>
  );
};

export default SurveyList;

const SurveyListLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
`;

const Label = styled.div`
  ${({ theme }) => theme.fonts.body2};
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  border-radius: 5rem;
  padding: 0.1rem 1rem;
  position: absolute;
  top: 6rem;
  left: 6rem;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.heading1};
  margin-top: 2rem;
`;

const SurveyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 5rem;
  gap: 1rem;
`;

const ListItem = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.blue1};
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.blue1};
  }
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.blue2};
  }
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
