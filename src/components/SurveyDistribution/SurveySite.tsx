import styled from 'styled-components';

const categories = [
  {
    title: 'IT',
    links: [
      'http://surf-it.io/',
      'http://disquiet.io/',
      'http://careerly.co.kr/',
      'http://outstanding.kr/',
      'http://longblack.co/',
      'http://page.stibee.com/',
      'http://themiilk.com/',
      'http://eopla.net/magazines',
      'https://open.kakao.com/o/gECT4Nbb',
      'https://open.kakao.com/o/gcapg6ub',
      'https://open.kakao.com/o/gQGtno',
    ],
  },
  {
    title: '취업',
    links: [
      'https://comento.kr/job-questions',
      'https://www.saramin.co.kr/zf_user/company-review-qst-and-ans',
      'https://www.jobkorea.co.kr/User/Qstn/QstnBizGroup?GroupCode=1000041',
      'https://community.linkareer.com',
      'https://www.gamejob.co.kr/community/talk/list',
      'https://gall.dcinside.com/board/lists?id=employment',
    ],
  },
  {
    title: '교육',
    links: [
      'https://ssamcafe.kr/',
      'https://school.iamservice.net/',
      'https://cafe.naver.com/ykintelligentschool',
      'https://www.univ100.kr/',
      'http://www.majormap.net/',
      'http://cafe.naver.com/suhui',
      'http://cafe.naver.com/kongdae',
      'http://www.onldo.kr/',
      'http://cafe.daum.net/papa.com',
      'http://adiga.kr/',
      'http://www.academyinfo.go.kr/',
      'https://school.iamservice.net/',
    ],
  },
  {
    title: '게임',
    links: [
      'https://m.inven.co.kr/',
      'https://www.hungryapp.co.kr/',
      'https://gall.dcinside.com/board/lists?id=game1_new',
      'https://inditor.co.kr/',
    ],
  },
  {
    title: '건강',
    links: ['http://www.365healthcare.co.kr/', 'http://swallaby.com/'],
  },
  {
    title: '장애',
    links: ['https://dpikorea.org/bbs/board.php?bo_table=B31'],
  },
];

const SurveySite = () => {
  return (
    <SurveySiteLayout>
      <Title>설문조사 배포사이트 정리</Title>
      <SurveySiteContainer>
        {categories.map((category, index) => (
          <CategoryCard key={index}>
            <CategoryTitle>{category.title}</CategoryTitle>
            <LinksList>
              {category.links.map((link, idx) => (
                <LinkItem key={idx}>
                  <a href={link}>{link}</a>
                </LinkItem>
              ))}
            </LinksList>
          </CategoryCard>
        ))}
      </SurveySiteContainer>
    </SurveySiteLayout>
  );
};

export default SurveySite;

const SurveySiteLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.heading1};
  line-height: 1.5;
`;

const SurveySiteContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 2rem 6rem;
  align-items: start;
`;

const CategoryCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  width: 20rem;
  flex-direction: column;
`;

const CategoryTitle = styled.h3`
  ${({ theme }) => theme.fonts.heading3};
  margin-bottom: 0.5rem;
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  ${({ theme }) => theme.fonts.body3};
`;

const LinkItem = styled.li`
  margin-bottom: 0.5rem;
  a {
    color: ${({ theme }) => theme.colors.subgreen};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    display: block;
    overflow: hidden;
    overflow-wrap: break-word;
  }
`;
