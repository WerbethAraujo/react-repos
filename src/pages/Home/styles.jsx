import styled, { keyframes, css } from 'styled-components';

export const Container = styled.main`
  background: #fff;
  max-width: 700px;
  width: 100%;
  border-radius: 0.3rem;
  margin: 4rem auto;
  padding: 2rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);

  h1 {
    font-size: 1.9rem;
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }
`;

export const Form = styled.form`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    font-style: italic;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    transition: 0.5s;

    &:hover {
      border-color: #0d2636;
    }
  }
`;

const animatedLoading = keyframes`
  from{
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #0d2636;
  padding: 0.5rem 0.7rem;
  margin-left: 0.3rem;
  border-radius: 0.3rem;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${animatedLoading} 2s linear infinite;
      }
    `}
`;
