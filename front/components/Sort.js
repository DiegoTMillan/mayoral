import { useContext } from "react";
import Context from "./Context";
import { useState } from "react";


// export const Sort = () => {
  export default function useSort () {

  
  const { cardData, setCardData } = useState()
  console.log(cardData);

    const sortedData = [...cardData].sort((a, b) => {
      return a.value > b.value ? 1 : -1;
    });
    setCardData(sortedData);
    console.log(sortedData);
    return(
      console.log("done")
    )
  }

// export function handleSortDesc() {

//   const sortedData = [...cardData].sort((a, b) => {
//     return a.value < b.value ? 1 : -1;
//   });
//   setCardData(sortedData);
// }
