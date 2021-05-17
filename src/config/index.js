const envVars = process.env;
console.log(envVars,'ok');
const config = {
  root_path: `${process.env.REACT_APP_ROOT_PATH}`,
};
export default config;
