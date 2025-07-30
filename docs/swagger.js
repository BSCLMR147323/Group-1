const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Bank API",
      version: "1.0.0",
      description: "Bank Marketing Dataset CRUD API",
      contact: {
        name: "Group 1 GitHub Repository",
        url: "https://github.com/BSCLMR147323/Group-1.git", 
      },
    servers: [{ url: "http://localhost:3000" }],
  },
    },
     
  apis: ["./views/*.js"],
};

const specs = swaggerJsDoc(options);

module.exports = { swaggerUi, specs };
