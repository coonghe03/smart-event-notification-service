import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Smart Event Notification Service API",
      version: "1.0.0",
      description: "API documentation for Notification Service",
    },
    servers: [
      {
        url: "http://localhost:3004", // change if your port is different
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
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.js"], // 👈 IMPORTANT
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;