import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from 'pages';
import { Header } from 'components/Header';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routing />
    </BrowserRouter>
  );
};