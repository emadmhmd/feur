const envConfig = () => {
  const envVars = new Map();

  if (process.env.REACT_APP_BACKEND_BASE_URL) {
    envVars.set('backendUrl', process.env.REACT_APP_BACKEND_BASE_URL);
  } else {
    envVars.set('backendUrl', import.meta.env.REACT_APP_BACKEND_BASE_URL);
  }

  return envVars;
};

export default envConfig();
