import config from "./config";
export const API_URL=config.API_URL;
console.log('value of api url in api_end_point',API_URL)
export const ENDPOINTS={
  GET_USER:`${API_URL}/posts`,
  //DO SAME FOR OTHERS
}