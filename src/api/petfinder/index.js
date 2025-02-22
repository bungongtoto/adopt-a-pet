import { createSearchParams } from "react-router-dom";

export const getPets = async (type = '', query = '') => {
  const searchParams = createSearchParams({ type, query });
  const requestUrl = `/animals?${searchParams.toString()}`;

  const response = await fetch(requestUrl, {
    method: 'GET'
  });

  const json = await response.json();

  return json;
};

export const getPetDetails = async (id) => {
  const requestUrl = `/animals/${id}`;
  const response = await fetch(requestUrl, {
    method: 'GET'
  });

  const json = await response.json();

  return json;
};

export const getPetTypes = async () => {
  const requestUrl = `/types`;
  const response = await fetch(requestUrl, {
    method: 'GET'
  });

  const json = await response.json();

  return json;
};
