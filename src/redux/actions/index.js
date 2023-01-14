import axios from "axios"
import Swal from 'sweetalert2'

export const getVideoGames = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("/videogames");
      //se toma el dispatch como arguento para mandar un enviar un tipo de accion
      dispatch({
        type: "GET_VIDEOGAMES",
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        payload: error
      })
    }
  };
};

export const getVideogameId = (id) => {
  return async function(dispatch) {
    try{
      const response = await axios.get(`/videogames/${id}`);
      const data = response.data;
      dispatch({
        type: "GET_VIDEOGAME_ID",
        payload: data
      })
    }catch(error){
      dispatch({
        type: 'ERROR',
        payload: error
      })
    }
  }
}

export const filterGameByName = (payload) => {
  return async function(dispatch) {
    try{
      const response = await axios.get(`/videogames?name=${payload}`);
      if(response.status !== 200) {
        Swal.fire({
          title: 'Error!',
          text: 'This Videogame does not exist',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
      const data = response.data;      
      dispatch({
        type: "FILTER_VIDEOGAME_NAME",
        payload: data
      })
    }catch(error){
      dispatch({
        type: 'ERROR',
        payload: error
      })
    }
  }
}

export const getGenres = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("/genres");
      const data = response.data;
      dispatch({
        type: "GET_GENRES",
        payload: data, 
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        payload: error
      })
    }
  };
};

export const postNewVideoGame = (videogame) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("/videogames", videogame)
      dispatch({
        type: "POST_VIDEOGAMES",
        payload: response.data, 
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        payload: error
      })
    }
  };
};

export const filterByGenre = (payload) => {
  return {
    type: 'FILTER_BY_GENRE',
    payload:payload
  }
}

export const orderByRating = (payload) => {
  return {
      type: "ORDER_BY_RATING",
      payload:payload
  }
}

export const alphabeticalOrder = (payload) => {
  return {
    type: 'ALPHABETICAL_ORDER',
    payload: payload
  }
}

export const apiOrDb = (payload) => {
  return {
      type: 'API_OR_DB',
      payload: payload
    }
}

export const filterRateLessFour = (payload) => {
  return {
    type: 'LESS_THAN_FOUR',
    payload
  }
}


