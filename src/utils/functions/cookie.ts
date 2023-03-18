import Cookies, { CookieSetOptions } from 'universal-cookie';
const cookies = new Cookies();

export const setCookie = (key: string, value: string, option?: CookieSetOptions | undefined) => {
  return cookies.set(key, value, { ...option });
};

export const getCookie = (key: string) => {
  return cookies.get(key);
};

export const removeCookie = (key: string) => {
  return cookies.remove(key);
};