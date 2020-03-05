import axios from 'axios';


/* export const retrieveDeals = () => fetch(`${URL}deals.json`) */

export const retrievePhones = action => axios.get('http://localhost:3001/api/phones');
export const retrieveSinglePhone = action => axios.get(`http://localhost:3001/api/phones/${action.id}`);

