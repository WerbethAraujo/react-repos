import React from 'react';

import { FaGithub, FaPlus } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositórios
      </h1>

      <Form onSubmit={handleSubmit}>
        <input type='text' placeholder='Adicionar repo...' />

        <SubmitButton>
          <FaPlus color='#fff' size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default Home;
