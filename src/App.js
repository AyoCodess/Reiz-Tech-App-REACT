import React, { useEffect, useState } from 'react';
import './App.css';
import AppContainer from './components/AppContainer';
import List from './components/List';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [dataReset, setDataReset] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('COUNTRY');
  const [isAscending, setIsAscending] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const [isFilterOptionsOpen, setIsFilterOptionsOpen] = useState(false);

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
  }, [dataReset]);

  useEffect(() => {
    setUpdate(false);
  }, [data]);

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

  const sortRegionHandler = () => {
    setData(() => {
      return data.sort((a, b) => a.region.localeCompare(b.region));
    });

    setUpdate(true);
  };

  console.log(data);

  const filterHandler = () => {
    isFilterOptionsOpen
      ? setIsFilterOptionsOpen(false)
      : setIsFilterOptionsOpen(true);
  };

  const resetDataHandler = () => {
    dataReset ? setDataReset(false) : setDataReset(true);
  };

  return (
    <>
      <Navbar
        sortHandler={sortHandler}
        isAscending={isAscending}
        setIsAscending={setIsAscending}
        filterHandler={filterHandler}
        isFilterOptionsOpen={isFilterOptionsOpen}
        setIsFilterOptionsOpen={setIsFilterOptionsOpen}
        selectedCountry={selectedCountry}
        sortRegionHandler={sortRegionHandler}
        setDataReset={setDataReset}
        resetDataHandler={resetDataHandler}
      />

      <AppContainer>
        <List
          data={data}
          isLoading={isloading}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      </AppContainer>
    </>
  );
}

export default App;
