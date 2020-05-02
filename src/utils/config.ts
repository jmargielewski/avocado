enum configDev {
  API = 'http://localhost:5000',
  BASE_URL = 'http://localhost:3000',
}

enum configProd {
  API = 'https://caramba-backend.herokuapp.com/',
  BASE_URL = 'https://avocado-pro.herokuapp.com/',
}

// prettier-ignore
let config: typeof configDev | typeof configProd /* eslint-disable-line import/no-mutable-exports */;

if (process.env.NODE_ENV === 'development') {
  config = configDev;
} else if (process.env.NODE_ENV === 'production') {
  config = configProd;
}

export { config };
