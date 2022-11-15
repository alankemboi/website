import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const COOKIE_NAME = 'accept-cookies';

export const useAcceptCookies = () => {
  const [acceptedCookies, setAccedptedCookies] = useState(true);

  useEffect(() => {
    if (!Cookies.get(COOKIE_NAME)) {
      setAccedptedCookies(false);
    }
  }, []);

  const acceptCookies = () => {
    setAccedptedCookies(true);
    Cookies.set(COOKIE_NAME, 'accepted', { expires: 365 });
  };
  return {
    acceptedCookies,
    onAcceptCookies: acceptCookies,
  };
};
