let baseUrl = "";

console.log("process.env.NODE_ENV---------------------------"+process.env.NODE_ENV);

switch (process.env.NODE_ENV) {
    case 'development':
        baseUrl = "http://localhost:8088/"  //开发环境url
        break
    case 'serve':
        baseUrl = "http://localhost:8089/"   //生产环境url
        break
}
 
export default baseUrl;