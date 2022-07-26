import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Card } from "../components/Card.tsx";
import { useState, useEffect } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
// import { handleSortAsc, handleSortDesc } from "../components/Sort";

export default function Home() {

  // setting variables for rendering cards and filter by name
  const [cardData, setCardData] = useState();
  const [staticData, setStaticData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  //getting data from back with axios
  const getInfo = async () => {
    await axios
    .get(`http://127.0.0.1:8000/clothes/`)
    .then((response) => {
      setCardData(response.data.data);
      setStaticData(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    filter(e.target.value)
  }
  
  // filter by name
  const filter = (text) => {
    let textResult = staticData.filter((item) => {
      if (
        item.name.toString().toLowerCase().includes(text.toLowerCase())
      ) {
        return item;
      }
    });
    setCardData(textResult);
  };

  useEffect(() => {
    getInfo();
  }, [])

  // sort cards by price
  function handleSortDesc() {
    const sortedData = [...cardData].sort((a, b) => {
      return a.value > b.value ? 1 : -1
    })
    setCardData(sortedData)
  }

  function handleSortAsc() {
    const sortedData = [...cardData].sort((a, b) => {
      return a.value < b.value ? 1 : -1
    })
    setCardData(sortedData)
  }

  if (!cardData) {
    return (
      <div>
        <p>Cargando...</p>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Mayoral Proyect</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.bigBox}>
        <div className="header">
          <div className="border"></div>
          <div className="inline">
            <div className="input-icons">
              <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
              <input
                value={searchInput}
                className="input-field"
                placeholder="Buscar"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="orderIcons">
          <FontAwesomeIcon onClick={handleSortDesc} id="sort-price" className="icon" icon={faMinus} />
          <FontAwesomeIcon onClick={handleSortAsc} id="sort-price" className="icon" icon={faPlus} />
          </div>
        </div>
        <div className={styles.box}>
          {cardData.map((data, i) => {
            return (
              <Card
                className={styles.card}
                key={i}
                img={data.img}
                name={data.name}
                prize={data.prize}
                strikedPrize={data.strikedPrize}
                salePrize={data.salePrize}
                colors={data.colors}
                value={data.value}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
