import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const[data, setData] = useState([]);
  const[filtered, setFiltered]=useState([])
  const[activeGenre, setActiveGenre] = useState("")


  const getData =async () => {
    let veri= await axios.get("https://fakestoreapi.com/products")
    .then((res) => setData(res.data));
  };

  const getCopyData =async () => {
    let veri= await axios.get("https://fakestoreapi.com/products")
    .then((res) => setFiltered(res.data));
  };

  useEffect(() => {
    getData();
    getCopyData()
  }, []);

  
  return (
    <div>
      <Header setData={setData} data={data} getData={getData} filtered={filtered} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
      <ProductCard data={data} filtered={filtered} />
    </div>
  );
};

export default Home;
