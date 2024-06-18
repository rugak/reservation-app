import axios from 'axios';
import dotenv from "dotenv";
import { opendir } from 'fs';
dotenv.config();

export const register = async (email: string, pass: string) => {
  const response = await axios.post(`${process.env.API_URL}/account`, { login : email, password: pass, roles: ['user'], status: "open"});
  return response.data;
};

export const login = async (email: string, pass: string) => {
  try{
    const response = await axios.post(`${process.env.API_URL}/token`, { login: email, password : pass, from : 'web' });
    return response;
  }
  catch (error){
    return error;
  }
};