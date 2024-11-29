import React, { useState, useEffect } from "react";
import data from "./crypto.json";
import currencies from "./currencies.json";
import NewsCard from "./NewsCard";

const CryptoDropdown = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("BTC");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [value, setvalue] = useState("");
  const [fetchedData, setFetchedData] = useState({});
  const [news, setNews] = useState([]);

  const getNews = async (getCrypto) => {
    const response = await fetch(
      `http://api.mediastack.com/v1/news?access_key=${MEDIA_STACK_API_KEY}&keywords=${getCrypto}`
    );
    const result = await response.json();
    const latesNews = []; // Initialize an empty array
    if (result.data && Array.isArray(result.data)) {
      // Check if data exists and is an array
      latesNews.push(...result.data.slice(0, 8)); // Use slice to get the first 8 elements and spread to push into news
    }
    setNews(latesNews);
  };
  const handleCryptoChange = (event) => {
    setSelectedCrypto(event.target.value);
    setvalue(fetchedData[event.target.value]);
    getNews(event.target.value);
    console.log(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  useEffect(() => {
    getNews(selectedCrypto);
  }, []);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://api.coinlayer.com/2024-11-20?access_key=${COIN_LAYER_API_KEY}&target=${selectedCurrency}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setFetchedData(result.rates);
      setvalue(result.rates[selectedCrypto]);
    };
    getData();
  }, [selectedCurrency]);

  useEffect(() => {
    setvalue(fetchedData[selectedCrypto]);
  }, [selectedCrypto]);

  return (
    <div className="min-h-screen w-full bg-[#121212] text-gray-200 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-teal-400">
        Crypto Value Finder
      </h1>
      <div className="space-y-4 mb-6">
        <div>
          <label
            htmlFor="crypto-select"
            className="block text-lg font-medium mb-2 text-purple-400"
          >
            Select Cryptocurrency:
          </label>
          <select
            id="crypto-select"
            className="w-full bg-[#1E1E2F] text-gray-200 border border-purple-500 rounded-md p-3 focus:ring focus:ring-teal-500 focus:outline-none"
            value={selectedCrypto}
            onChange={handleCryptoChange}
          >
            {data.map((crypto, index) => (
              <option key={index} value={crypto.short}>
                {crypto.name} ({crypto.short})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="currency-select"
            className="block text-lg font-medium mb-2 text-purple-400"
          >
            Select Currency:
          </label>
          <select
            id="currency-select"
            className="w-full bg-[#1E1E2F] text-gray-200 border border-purple-500 rounded-md p-3 focus:ring focus:ring-teal-500 focus:outline-none"
            value={selectedCurrency}
            onChange={handleCurrencyChange}
          >
            {currencies.map((currency, index) => (
              <option key={index} value={currency.code}>
                {currency.code}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="text-xl font-semibold mb-6 text-center text-teal-400">
        1 {selectedCrypto} = {value === "" ? "__" : value} {selectedCurrency}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.map((eachNews, index) => (
          <div
            key={index}
            className="bg-[#1E1E2F] p-4 rounded-lg shadow-md text-gray-200 border border-purple-500"
          >
            <NewsCard news={eachNews} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoDropdown;
