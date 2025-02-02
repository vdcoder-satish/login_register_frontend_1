const ENV=process.env.REACT_APP_ENV||'dev';

const config=require(`../public/config/config.${ENV}.json`);
export default config;