import React, { useState, useCallback } from 'react';

import { FaGithub, FaPlus } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

import { api } from '../../services/api';

const Home = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositorios, setRepositorios] = useState([]);

  const handleInputChange = (e) => {
    setNewRepo(e.target.value);
  };

  const handleRequestRepos = useCallback(
    (e) => {
      e.preventDefault();

      async function handleSubmit() {
        const response = await api.get(`/repos/${newRepo}`);

        const data = {
          name: response.data.full_name,
        };
        setRepositorios([...repositorios, data]);

        console.log(repositorios);
        setNewRepo('');
      }

      handleSubmit();
    },
    [newRepo, repositorios]
  );

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositórios
      </h1>

      <Form onSubmit={handleRequestRepos}>
        <input
          type='text'
          placeholder='Adicionar repo...'
          value={newRepo}
          onChange={handleInputChange}
        />

        <SubmitButton>
          <FaPlus color='#fff' size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default Home;
