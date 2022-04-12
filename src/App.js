import React, { useEffect, useState, useMemo } from 'react';
import './App.css';
import AppContainer from './components/AppContainer';
import List from './components/List';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [results, setResults] = useState();
  const [resultData, setResultData] = useState();
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
    setResults(false);
    setResultData('');
    setIsFilterOptionsOpen(false);
  }, [data]);

  const searchHandler = (value) => {
    let response = data.find((country) => {
      setResults(true);
      return country.name.toLowerCase().includes(value.toLowerCase());
    });

    setResultData(response);

    setData((prev) => {
      return prev;
    });
  };

  const sortByOceaniaRegion = () => {
    console.log('yes');
  };

  const searchByAreaHandler = () => {
    console.log('yes');
  };

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
        searchHandler={searchHandler}
        resultData={resultData}
        searchByAreaHandler={searchByAreaHandler}
        sortByOceaniaRegion={sortByOceaniaRegion}
      />

      <AppContainer>
        <List
          data={data}
          isLoading={isloading}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          resultData={resultData}
          results={results}
        />
      </AppContainer>
    </>
  );
}

export default App;
