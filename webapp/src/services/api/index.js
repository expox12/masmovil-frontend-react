import axios from 'axios';


/* export const retrieveDeals = () => fetch(`${URL}deals.json`) */

export const retrievePhones = action => axios.get('http://192.168.1.128:3000/api/phones');

