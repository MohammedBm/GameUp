const DOMAIN = 'http://localhost:3000';
const API_PATH = '/api/v1'
const API_KEY = 'ApiKey 588f3739f09eaa11425d135e96582ae53d3248dbb7ce7bcbd190489566a8932f'


const Room = {
  getRooms() {
    return fetch(
      `${DOMAIN}${API_PATH}/rooms`,
      {
        headers: {'Authorization':API_KEY}
      }
    ).then(res => res.json());
  },
  get(id){
    return fetch(
      `${DOMAIN}${API_PATH}/rooms/${id}`,
      {
        headers: {'Authorization':API_KEY}
      }
    ).then(res => res.json());
  }
}

export { Room };
