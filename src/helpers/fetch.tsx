import { RegisterData, Resp } from '../interfaces/AuthInterface';
import { Contact, ContactResp } from '../interfaces/ContactInterface';
import { ActualizarUsuario, RespActualizar } from '../interfaces/UserInterface';

const baseURL = 'https://prueba-red1a1.herokuapp.com/api';

export const fetchSinToken = async (
  endpoint: string,
  data: RegisterData,
  method = 'GET'
): Promise<Resp> => {
  const url = `${baseURL}/${endpoint}`;

  if (method === 'GET') {
    const resp = await fetch(url);
    return await resp.json();
  } else {
    const resp = await fetch(url, {
      method,
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    });

    return await resp.json();
  }
};

export const fetchConToken = async (
  endpoint: string,
  data?: RegisterData,
  method = 'GET'
) => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem('token') || '';

  if (method === 'GET') {
    const resp = await fetch(url, {
      headers: { 'x-token': token },
    });
    return await resp.json();
  } else {
    const resp = await fetch(url, {
      method,
      headers: { 'Content-type': 'application/json', 'x-token': token },
      body: JSON.stringify(data),
    });

    return await resp.json();
  }
};

export const fetchContactForm = async (
  endpoint: string,
  data: Contact
): Promise<ContactResp> => {
  const url = `${baseURL}/${endpoint}`;

  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  });

  return await resp.json();
};

export const fetchInmueble = async (
  endpoint: string,
  data?: any,
  method = 'GET'
) => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem('token') || '';

  if (method === 'GET') {
    const resp = await fetch(url, {
      headers: { 'x-token': token },
    });
    return await resp.json();
  } else {
    const resp = await fetch(url, {
      method,
      headers: { 'Content-type': 'application/json', 'x-token': token },
      body: JSON.stringify(data),
    });

    return await resp.json();
  }
};

export const actualizarPerfilFetch = async (
  endpoint: string,
  data: ActualizarUsuario
): Promise<RespActualizar> => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem('token') || '';

  const resp = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json', 'x-token': token },
    body: JSON.stringify(data),
  });

  return await resp.json();
};
