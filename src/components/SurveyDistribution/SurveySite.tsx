import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Axios from '../../services/axios';

interface SiteData {
  id: number;
  site: string;
  category: string;
}

const categories = {
  IT: 'IT',
  취업: 'employ',
  교육: 'edu',
  건강: 'health',
  게임: 'game',
  장애: 'disabled',
  정책: 'policy',
  마케팅: 'marketing',
};

const SurveySite = () => {
  const [data, setData] = useState<{ [key: string]: string[] }>({});

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const newData: { [key: string]: string[] } = {};
        for (const [key, value] of Object.entries(categories)) {
          const response = await Axios.get(`/api/v1/sites?category=${value}`);
          newData[key] = response.data.map((item: SiteData) => item.site);
        }
        setData(newData);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchCategoryData();
  }, []);

  return (
    <SurveySiteLayout>
      <Title>설문조사 배포사이트 정리</Title>
      <SurveySiteContainer>
        {Object.entries(data).map(([category, links], index) => (
          <CategoryCard key={index}>
            <CategoryTitle>{category}</CategoryTitle>
            <LinksList>
              {links.map((link, idx) => (
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
