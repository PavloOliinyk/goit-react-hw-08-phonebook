import axios from 'axios';
import { store } from '../redux/store';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data }) => {
    const persistedToken = store.getState().auth.token;

    if (url === '/users/current') {
      axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;
    }

    try {
      const result = await axios({ url: baseUrl + url, method, data });

      if (url === '/users/logout') {
        axios.defaults.headers.common.Authorization = '';
      }
      if (url === '/users/current') {
        axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;
      } else {
        axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;
      }

      return { data: result.data };
    } catch (err) {
      return err;
    }
  };

export default axiosBaseQuery;
