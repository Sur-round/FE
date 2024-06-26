import styled from 'styled-components';

interface CommonHome2Props {
  imageUrl: string;
  altText: string;
  title: string;
  content: string;
}

const CommonHome2 = (props: CommonHome2Props) => {
  const { imageUrl, altText, title, content } = props;
  return (
    <CommonHome2Layout>
      <Image src={imageUrl} alt={altText} />
      <Title>{title}</Title>
      <Content>{content}</Content>
    </CommonHome2Layout>
  );
};

export default CommonHome2;

const CommonHome2Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25rem;
  height: 18rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Image = styled.img`
  height: 10rem;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.body5};
`;

const Content = styled.p`
  ${({ theme }) => theme.fonts.body6};
  white-space: pre-wrap;
  line-height: 1.3;
`;
