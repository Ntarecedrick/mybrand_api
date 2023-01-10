import swaggerJSDoc from 'swagger-jsdoc';
import dotenv from "dotenv";
dotenv.config()

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Swagger Documentation for API",
        version: "1.0.0",
        description: "An API for a professional branding portfolio website",
      },
      servers: [
        {
          url: process.env.SERVER,
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
    },
    apis: ["./src/swagger/*.js"],
  };
  const specs = swaggerJSDoc(options);

  export default specs