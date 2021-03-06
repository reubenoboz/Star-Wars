import starWarsAxiosInstance from '../axios/starwars.axios'
import {charactersApi} from '../apis/characters.api'
import { appNotification } from '../../components';

//Get All Charaters
export const GetAllCharacters = async (page=1) => { //default page of 1
    try {
      const response = await starWarsAxiosInstance.get(
        `${charactersApi.getAllCharacters}?page=${page}`,
      );
      return response.data;
    } catch (err) {
        appNotification(err.message, 'Something went wrong!', 'error');
        throw err
    }
  };
  
  //Get a character
  export const getSingleCharacter = async (id) => {
    try {
        const response = await starWarsAxiosInstance.get(
            charactersApi.getACharacter + id,
          );
      return response.data;
    } catch (err) {
        appNotification(err.message, 'Something went wrong!', 'error');
        throw err
    }
  };