// nasa.js
import axios from "axios";

const API_KEY = "RBEn8x06wLcSjoouaMasrrWrrFtD5ygLmq9g4UYj"; 

const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

// Função que busca os dados da API da NASA
export const fetchNasaData = async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados da NASA:", error);
    return null;
  }
};
