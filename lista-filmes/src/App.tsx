import styled from 'styled-components';
import Movie from './components/Movie'
import './App.css';
import { Grid } from './components/Grid';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default function App() {
  return (
    <div>
      <Title>Aula de FrontEnd</Title>
      <Grid>
        <Movie></Movie>
        <Movie></Movie>
        <Movie></Movie>
        <Movie></Movie>
      </Grid>
    </div>
  );
}



