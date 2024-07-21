import React from 'react';
import logo from './logo.svg';

import { Layout } from './Components/Layout';
import { Nav } from './Components/Nav'
import { Footer } from './Components/Footer';
import { Head } from './Components/Head';
import { WorksList } from './Components/Works';

function App() {
  return (
    <Layout>
      <Nav />
      <Head />
      <WorksList />
      <Footer />
    </Layout>
  );
}

export default App;
