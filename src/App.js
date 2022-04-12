import React, { useEffect, useState } from 'react';
import './App.css';
import AppContainer from './components/AppContainer';
import List from './components/List';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await axios(
          `https://restcountries.com/v2/all?fields=name,region,area`
        );

        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    apiCall();
  }, []);

  return (
    <>
      <Navbar />
      <AppContainer>
        <List data={data} />
      </AppContainer>
    </>
  );
}

export default App;
