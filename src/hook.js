
import { useState } from "react";
import uuid from "uuid";
import axios from "axios";


const useFlip = (initialFlipState = true) => {
    const [isFacingUp, setIsFacingUp] = useState(initialFlipState = true);
    
    const flipCard = () => {
      setIsFacingUp(isUp => !isUp);
    }
    
      return[isFacingUp, flipCard]
}


const useAxios = () => {
    const [data, newData] = useState([])
    const addData = async (url,customUrl="") => {
        const response = await axios.get(
          `${url}${customUrl}`
        );
        newData(data => [...data, { ...response.data, id: uuid() }]);
      };
      return [data,addData]
}


export {useFlip, useAxios}