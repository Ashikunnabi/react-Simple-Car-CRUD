import React, { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import PiChart from './components/PiChart';
import Footer from './components/Footer';
import Header from './components/Header';
import Table from './components/Table';

function App() {
  const [queryParameter, setQueryParameter] = useState('')

  const setSearchQueryParameter = (text) => {
    if (queryParameter === '' && text === 'all') setQueryParameter('all');
    else if (queryParameter === '' && text === '') setQueryParameter('all');
    else if (queryParameter === 'all' && text === 'all') setQueryParameter('');
    else if (queryParameter === 'all' && text === '') setQueryParameter('');
    else setQueryParameter(text);
  }

  return (
    <div className="App">
      <Header setSearchQueryParameter={setSearchQueryParameter} />
      <PiChart queryParameter={queryParameter} />
      <br />
      <br />
      <Table queryParameter={queryParameter} setSearchQueryParameter={setSearchQueryParameter} />
      <Footer />
    </div>
  );
}

export default App;
