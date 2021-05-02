import starWarsAxiosInstance from '../axios/starwars.axios'
import {shipsApi} from '../apis/ships.api'
import { appNotification } from '../../components';

//Get All Ships
export const GetAllShips = async () => {
    try {
      const response = await starWarsAxiosInstance.get(
        shipsApi.getAllShips,
      );
      return response.data;
    } catch (err) {
        appNotification(err.message, 'Something went wrong!', 'error');
        throw err
    }
  };
  
  //Get a Ship
  export const getSingleShip = async (id) => {
    try {
        const response = await starWarsAxiosInstance.get(
            shipsApi.getAShip + id,
          );
      return response.data;
    } catch (err) {
        appNotification(err.message, 'Something went wrong!', 'error');
        throw err
    }
  };