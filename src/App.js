import React, { Component } from 'react';
import styled from 'styled-components';
import frame1 from './imgs/frame-1.gif';
import frame2 from './imgs/frame-2.gif';

// INICIO ESTILIZAÇÃO
const Main = styled.main`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H2 = styled.h2`
font-family: 'Roboto Slab', serif;
`;

const Section = styled.section`
  height: 30vh;
  width: 30vw;
  border-radius: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background-image: url(${frame1});
  background-size: 30vw 30vh;
  box-shadow: 0rem 0.188rem 0.625rem black;
`;

const H1 = styled.h1`
margin-bottom:1rem;
`;

const Div = styled.div`
  width: 23vh;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  margin-bottom: 0.2rem;
  height: 3.5vh;
  width: 2vw;
  border-radius: 50%;
  background-color: #00000080;
  color: white;
  cursor: pointer;
  border: solid 0.063rem black;
`;

const ButtonReset = styled.button`
border: 0.094rem solid black;
border-radius: 0.75rem;
margin: 0rem 0rem 0.5rem 0rem;
cursor: pointer;
background: #00000080;
color: white;
font-family: 'Roboto Slab', serif;
letter-spacing: 0.063rem;
text-transform: uppercase; 
`
// TERMINO ESTILIZAÇÃO

class App extends Component {
  state = {
    begin: 0,
    h2: "Ajude o Jerry chegar a 10 marteladas!"
  };

  // INICIO FUNÇÕES
  toAdd = () => {
    if (this.state.begin < 10) {
      this.setState({
        begin: this.state.begin +1,
        backgroundImage: frame2
      });

      setTimeout(() => {
        this.setState({
          backgroundImage: frame1
        });
      }, 100); 
    } 
  };

  toDecrease = () => {
    if (this.state.begin > 0) {
      this.setState({
        begin: this.state.begin -1,
        h2: "Ajude o Jerry chegar a 10 marteladas!"
      });
    }
  };

  toReset = () => {
    this.setState({
      begin:0,
      h2: "Ajude o Jerry chegar a 10 marteladas!"
    });
  };

  componentDidUpdate(change, changed) {
    if (this.state.begin === 10 && changed.begin !== 10) {
      this.setState({ h2: "Parabéns, você ajudou o Jerry a construir seu ninho de rato 🎉" });
    }
    if (this.state.backgroundImage !== changed.backgroundImage) {
      const section = document.getElementById('section');
      section.style.backgroundImage = `url(${this.state.backgroundImage})`;
    }
  }
  // TERMINO FUNÇÕES
  render() {
    return (
      <Main>
        <H2>{this.state.h2}</H2>
        <Section id="section">
          <H1>{this.state.begin}</H1>
          <Div>
            <Button onClick={this.toDecrease}>-</Button>
            <ButtonReset onClick={this.toReset}>Resetar</ButtonReset>
            <Button onClick={this.toAdd}>+</Button>
          </Div>
        </Section>
      </Main>
    );
  }
}
export default App;
