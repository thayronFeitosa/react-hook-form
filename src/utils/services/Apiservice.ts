/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import api from './api';

const ApiService = {
  listAllTypesUsers: async () => (
    api.get('/users').then((response) => (
      response.data
    )).catch((erro) => erro?.response?.data)
  ),

  listUserComplianceById: async (id: string) => (
    api.get(`/users/${id}`).then((response) => (
      response.data
    )).catch((erro) => erro?.response?.data)
  ),

};

export default ApiService;
