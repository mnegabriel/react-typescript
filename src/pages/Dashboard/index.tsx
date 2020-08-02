import React from 'react';

import logo from '../../assets/Logo.svg';
import { Title, Form } from './style';

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="Logo do site" />
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input type="text" placeholder="Digite o nome do repositório" />
      <button>Pesquisar</button>
    </Form>
  </>
);

export default Dashboard;
