import React, { useState, useCallback, useEffect } from 'react';

import { FaBars, FaGithub, FaPlus, FaSpinner, FaTrash } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import {
  Container,
  Form,
  SubmitButton,
  ListContainer,
  DeleteButton,
} from './styles';

import { api } from '../../services/api';

const Home = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositorios, setRepositorios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const salvedRepos = localStorage.getItem('repos');

    if (salvedRepos) {
      setRepositorios(JSON.parse(salvedRepos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('repos', JSON.stringify(repositorios));
  }, [repositorios]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      async function submit() {
        setLoading(true);
        setError(null);
        try {
          if (newRepo === '') {
            throw new Error('Voçê precisa passar o nome de um repositório');
          }
          const response = await api.get(`/repos/${newRepo}`);

          const hasRepo = repositorios.find((repo) => repo.name === newRepo);

          if (hasRepo) {
            throw new Error('Esse repositório ja existe');
          }

          const data = {
            name: response.data.full_name,
          };
          setRepositorios([...repositorios, data]);

          setNewRepo('');
        } catch (error) {
          setError(true);
          console.log(error);
        } finally {
          setLoading(false);
        }
      }

      submit();
    },
    [newRepo, repositorios]
  );

  const handleDeleteRepo = useCallback(
    (repoName) => {
      const filteradRepos = repositorios.filter(
        (repo) => repo.name !== repoName
      );
      setRepositorios(filteradRepos);
    },
    [repositorios]
  );

  const handleInputChange = (e) => {
    setNewRepo(e.target.value);
    setError(null);
  };

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositórios
      </h1>

      <Form onSubmit={handleSubmit} err={error}>
        <input
          type='text'
          placeholder='Adicionar repo...'
          value={newRepo}
          onChange={handleInputChange}
        />

        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color='#fff' size={14} />
          ) : (
            <FaPlus color='#fff' size={14} />
          )}
        </SubmitButton>
      </Form>

      <ListContainer>
        {repositorios.map((repo) => (
          <li key={repo.name}>
            <span>
              <DeleteButton onClick={() => handleDeleteRepo(repo.name)}>
                <FaTrash size={14} />
              </DeleteButton>
              {repo.name}
            </span>
            <Link to={`/repo/${repo.name}`}>
              <FaBars size={20} />
            </Link>
          </li>
        ))}
      </ListContainer>
    </Container>
  );
};

export default Home;
