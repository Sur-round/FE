import Axios from '../../services/axios';
import { useState } from 'react';
import styled from 'styled-components';

const SurveyLinkUpload = () => {
  const [surveyName, setSurveyName] = useState('');
  const [surveyLink, setSurveyLink] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurveyName(e.target.value);
  };

  const handleURLInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurveyLink(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await Axios.post('/api/v1/url', {
        name: surveyName,
        url: surveyLink,
      });
      console.log('POST 응답 데이터:', response.data);
    } catch (error) {
      console.error('Error posting data', error);
    }
    setSurveyName('');
    setSurveyLink('');
  };

  return (
    <SurveyLinkUploadLayout>
      <SurveyLinkUploadContainer>
        <Title>설문조사 링크 등록하기</Title>
        <Content>{`구글폼, 네이버폼 등 여러분이 제작한 설문링크를 등록해주시면\n각 대학교의 에브리타임 홍보게시판, 해당 주제에 적합한 오픈채팅방 등 커뮤니티에 무료로 배포해드립니다.\n한 번의 클릭으로 가장 쉽고 저렴하게 응답자를 모집하세요!`}</Content>
        <FormLayout onSubmit={handleSubmit}>
          <Input
            type='text'
            placeholder='설문조사 제목'
            value={surveyName}
            onChange={handleInputChange}
          />
          <Input
            type='text'
            placeholder='설문조사 링크'
            value={surveyLink}
            onChange={handleURLInputChange}
          />
          <Button type='submit'>배포하기</Button>
        </FormLayout>
      </SurveyLinkUploadContainer>
    </SurveyLinkUploadLayout>
  );
};

export default SurveyLinkUpload;

const SurveyLinkUploadLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  background-color: ${({ theme }) => theme.colors.subgreen};
`;

const SurveyLinkUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 2rem 3rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.heading1};
  line-height: 1.5;
`;

const Content = styled.p`
  ${({ theme }) => theme.fonts.body};
  white-space: pre-wrap;
  line-height: 1.5;
`;

const FormLayout = styled.form`
  display: flex;
  align-items: center;
  margin: 3rem 0 1rem 0;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  flex: 0.7;
  background-color: ${({ theme }) => theme.colors.light};
  ${({ theme }) => theme.fonts.body6};
  outline: none;
`;

const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkgray};
  }

  &:focus {
    outline: none;
  }
`;
