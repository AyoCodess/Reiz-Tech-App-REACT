import React, { useEffect, useState, useMemo } from 'react';
import './App.css';
import AppContainer from './components/AppContainer';
import List from './components/List';
import Navbar from './components/Navbar';
import axios from 'axios';
import Pagination from './components/Pzgination';
import Page from './components/Page';

function App() {
  const [data, setData] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [defaultData, setDefaultData] = useState([]);
  const [results, setResults] = useState();
  const [resultData, setResultData] = useState();
  const [update, setUpdate] = useState(false);
  const [dataReset, setDataReset] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('COUNTRY');
  const [isAscending, setIsAscending] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const [isFilterOptionsOpen, setIsFilterOptionsOpen] = useState(false);

  // - Pagination
  const [countriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([]);

  const indexOfLastPost = currentPage * countriesPerPage;
  const indexOfFirstPost = indexOfLastPost - countriesPerPage;
  const countries = data.slice(indexOfFirstPost, indexOfLastPost);

  // - Change page
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
  }, [dataReset]);

  useEffect(() => {
    setUpdate(false);
    setIsFilterOptionsOpen(false);
  }, [data]);

  const searchHandler = (value) => {
    let response = defaultData.find((country) => {
      setResults(true);
      return country.name.toLowerCase().includes(value.toLowerCase());
    });

    setResultData(response);

    setData(defaultData);
  };

  const sortByOceaniaRegion = () => {
    setData(() => {
      let response = data.filter((country) => {
        return country.region === 'Oceania';
      });

      return response;
    });
  };

  const searchByAreaHandler = () => {
    setData(defaultData);
    setData((prev) => {
      let response = prev.filter((country) => {
        if (resultData.area > country.area) {
          return country;
        }
      });

      // - orders county area sizes from biggest to smallest
      let newResponse = response.sort((a, b) => b.area - a.area);

      return newResponse;
    });
  };

  const sortHandler = () => {
    console.log({ data });
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
        setDataReset={setDataReset}
        resetDataHandler={resetDataHandler}
        searchHandler={searchHandler}
        resultData={resultData}
        searchByAreaHandler={searchByAreaHandler}
        sortByOceaniaRegion={sortByOceaniaRegion}
        searchedValue={searchedValue}
        setSearchedValue={setSearchedValue}
      />
      {/* <Page /> */}
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={data.length}
        paginate={paginate}
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        setPageNumbers={setPageNumbers}
      />

      <AppContainer>
        <List
          data={countries}
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
