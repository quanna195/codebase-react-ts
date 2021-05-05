import cookie from 'react-cookies';
import env from '@/env';

const COOKIE_DOMAIN = env.cookie.domain;
const COOKIE_REFRESH_TOKEN = 'rtk';
const COOKIE_ACCESS_TOKEN = 'atk';
// const MAXIMUM_EXPIRES_TIME = 2147483647;

const cookieSetting = {
  path: '/',
  domain: COOKIE_DOMAIN,
  // secure: true,
  // httpOnly: true,
  // expires: MAXIMUM_EXPIRES_TIME,
};

const setCookie = (name: string, value: string) => cookie.save(name, value, cookieSetting);

const getCookie = (name: string) => cookie.load(name);

const removeCookie = (name: string) => cookie.remove(name, cookieSetting);

class AuthHelpers {
  getRefreshToken = () => getCookie(COOKIE_REFRESH_TOKEN);

  storeRefreshToken = (refreshToken: string) => setCookie(COOKIE_REFRESH_TOKEN, refreshToken);

  getAccessToken = () => getCookie(COOKIE_ACCESS_TOKEN);

  storeAccessToken = (accessToken: string) => setCookie(COOKIE_ACCESS_TOKEN, accessToken);

  clearTokens = () => {
    removeCookie(COOKIE_REFRESH_TOKEN);
    removeCookie(COOKIE_ACCESS_TOKEN);
  };
}

const instance = new AuthHelpers();
export default instance;
