import React, { useEffect, useState } from 'react';
import './App.css';
import AppContainer from './components/AppContainer';
import List from './components/List';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [isAscending, setIsAscending] = useState(true);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const apiCall = async () => {
      setIsLoading(true);
      try {
        const response = await axios(
          `https://restcountries.com/v2/all?fields=name,region,area`
        );

        setData(response.data);

        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    apiCall();
  }, []);

  const sortHandler = () => {
    if (isAscending) {
      setData(data.reverse());
      setIsAscending(false);
    }

    if (!isAscending) {
      setData(data.reverse());
      setIsAscending(true);
    }
  };

  return (
    <>
      <Navbar
        sortHandler={sortHandler}
        isAscending={isAscending}
        setIsAscending={setIsAscending}
      />

      <AppContainer>
        <List data={data} isLoading={isloading} />
      </AppContainer>
    </>
  );
}

export default App;
