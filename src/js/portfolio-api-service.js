import axios from 'axios';

const BASE_URL = 'https://portfolio-js.b.goit.study/api'

async function getRequest(request) {
  try{
    const data = await axios.get(`${BASE_URL}/${request}`)

    return data
  } catch(err){
    return err.message
  }
}

async function postRequest(request) {
  try{
    const data = await axios.post(`${BASE_URL}/requests`, request)

    return data
  } catch (err){
    return err
  }
}

export {getRequest, postRequest}