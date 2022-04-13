import React, { useEffect, useState } from 'react';
import './App.css';
import AppContainer from './components/AppContainer';
import List from './components/List';
import Navbar from './components/Navbar';
import axios from 'axios';
import Pagination from './components/Pagination';

function App() {
  const [data, setData] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [defaultData, setDefaultData] = useState([]);
  const [results, setResults] = useState(false);
  const [resultData, setResultData] = useState([]);
  const [dataReset, setDataReset] = useState(false);
  const [isAscending, setIsAscending] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isFilterOptionsOpen, setIsFilterOptionsOpen] = useState(false);

  // - Pagination
  const [countriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const IndexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const countries = data.slice(IndexOfFirstCountry, indexOfLastCountry);

  // - Change page number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const apiCall = async () => {
      setIsLoading(true);
      try {
        const response = await axios(
          `https://restcountries.com/v2/all?fields=name,region,area`
        );

        setData(response.data);
        setDefaultData(response.data);
        setResultData(null);
        setResults(false);
        setSearchedValue('');
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    apiCall();
  }, []);

  // - resets app global state and uses'cached' api call data
  useEffect(() => {
    setData(defaultData);
    setResultData([]);
    setIsFilterOptionsOpen(false);
    setResults(false);
    setSearchedValue('');
  }, [dataReset, defaultData]);

  // - finds searched for country via a duplicate copy of 'data' i.e 'defaultData', as we dont want to mutate 'data' as we are doing other stuff with it simultaneously.
  const searchHandler = (value) => {
    let response = defaultData.filter((country) => {
      setResults(true);
      return country.name.toLowerCase().includes(value.toLowerCase());
    });

    // - sets state for the 'search result' area above the main list
    setResultData(response);
    setData(defaultData);
  };

  const sortByOceaniaRegion = () => {
    setCurrentPage(1);
    setData(() => {
      let response = data.filter((country) => {
        return country.region === 'Oceania';
      });

      return response;
    });
  };

  const searchByAreaHandler = () => {
    setCurrentPage(1);
    setData(defaultData);

    console.log({ data });
    console.log({ resultData });
    setData((prev) => {
      let response = prev.filter((country) => {
        if (resultData[0].area > country.area) {
          return country;
        }
      });

      // - orders county area sizes from biggest to smallest
      let newResponse = response.sort((a, b) => b.area - a.area);

      return newResponse;
    });
  };

  const sortHandler = () => {
    if (isAscending) {
      setData(data.reverse((a, b) => a.name.localeCompare(b.name)));
      setIsAscending(false);
    }

    if (!isAscending) {
      setData(data.sort((a, b) => a.name.localeCompare(b.name)));
      setIsAscending(true);
    }
  };

  const filterHandler = () => {
    setCurrentPage(1);
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
        filterHandler={filterHandler}
        isFilterOptionsOpen={isFilterOptionsOpen}
        setDataReset={setDataReset}
        resetDataHandler={resetDataHandler}
        searchHandler={searchHandler}
        resultData={resultData}
        searchByAreaHandler={searchByAreaHandler}
        sortByOceaniaRegion={sortByOceaniaRegion}
        searchedValue={searchedValue}
        setSearchedValue={setSearchedValue}
      />

      <AppContainer>
        <Pagination
          countriesPerPage={countriesPerPage}
          totalCountries={data.length}
          paginate={paginate}
          currentPage={currentPage}
          data={data}
          isLoading={isLoading}
        />

        <List
          data={countries}
          isLoading={isLoading}
          resultData={resultData}
          setResultData={setResultData}
          results={results}
          searchedValue={searchedValue}
        />
      </AppContainer>
    </>
  );
}

export default App;
