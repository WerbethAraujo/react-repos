import { useParams } from 'react-router-dom';
import { Container } from './styles';

import React from 'react';

const Repo = () => {
  const repoName = useParams();

  const { repo } = repoName;

  return (
    <Container>
      <h1>{repo}</h1>
    </Container>
  );
};

export default Repo;
