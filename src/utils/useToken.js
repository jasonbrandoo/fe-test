import React from 'react';

function useToken() {
  const [token, setToken] = React.useState(localStorage.getItem('token') || '');

  React.useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  return { token, setToken };
}

export default useToken;
