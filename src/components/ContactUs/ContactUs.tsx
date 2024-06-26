import { useState } from 'react';
import styled from 'styled-components';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <ContactUsLayout>
      <ContactUsContainer>
        <Title>문의하기</Title>
        <Content>Sur-round에게 문의할 사항은 여기로!</Content>
        <Input
          type='text'
          placeholder='Name'
          value={name}
          onChange={handleNameInputChange}
        />
        <Input
          type='text'
          placeholder='Email'
          value={email}
          onChange={handleEmailInputChange}
        />
        <Input
          type='text'
          placeholder='Message'
          value={message}
          onChange={handleMessageInputChange}
        />
        <Button type='submit'>SUBMIT</Button>
      </ContactUsContainer>
    </ContactUsLayout>
  );
};

export default ContactUs;

const ContactUsLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 20rem;
  background-color: ${({ theme }) => theme.colors.green2};
`;

const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 3rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  gap: 1.5rem;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.heading1};
  line-height: 0.5;
`;

const Content = styled.p`
  ${({ theme }) => theme.fonts.body};
  white-space: pre-wrap;
  line-height: 1;
`;

const Input = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  flex: 0.7;
  background-color: ${({ theme }) => theme.colors.light};
  ${({ theme }) => theme.fonts.body6};
  outline: none;
`;

const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.green2};
  ${({ theme }) => theme.fonts.body4};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.maingreen};
  }

  &:focus {
    outline: none;
  }
`;
