import starWarsAxiosInstance from '../axios/starwars.axios'
import {planetsApi} from '../apis/planet.api'
import { appNotification } from '../../components';

//Get All Planets
export const GetAllPlanets = async (page=1) => { //default page of 1
    try {
      const response = await starWarsAxiosInstance.get(
        `${planetsApi.getAllPlanets}?page=${page}`,
      );
      return response.data;
    } catch (err) {
        appNotification(err.message, 'Something went wrong!', 'error');
        throw err
    }
  };
  
  //Get a Planet
  export const getSinglePlanet = async (id) => {
    try {
        const response = await starWarsAxiosInstance.get(
            planetsApi.getAPlanet + id,
          );
      return response.data;
    } catch (err) {
        appNotification(err.message, 'Something went wrong!', 'error');
        throw err
    }
  };