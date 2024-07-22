import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TextWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Link = styled.a`
  color: #007bff;
  cursor: pointer;
  text-decoration: none;
`;

const JoinText = () => {
    const navigate = useNavigate();
  const handleJoinClick = () => {
    navigate('/signup');
  };

  return (
    <TextWrapper>
      계정이 없으신가요? <Link onClick={handleJoinClick}>회원가입</Link>
    </TextWrapper>
  );
};

export default JoinText;
