import {GENDER_FILTER, HANDLE_FILTER} from '../actionTypes'

export const handleFilter = (payload) => {
    return {
      type: HANDLE_FILTER,
      payload,
    };
  };

  export const handleGenderFilter = (payload) => {
    return {
      type: GENDER_FILTER,
      payload
    }
  }