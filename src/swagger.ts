import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "1.0.0",
    title: "My API",
    description: "Some description...",
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}/api`,
    },
  ],
  components: {
    schemas: {
      someBody: {
        $name: "Jhon Doe",
        $age: 29,
        about: "",
      },
      usuario: {
        $name: 'string'
      },
      login: {
        $email: 'string',
        password: 'string'
      },
      someResponse: {
        name: "Jhon Doe",
        age: 29,
        diplomas: [
          {
            school: "XYZ University",
            year: 2020,
            completed: true,
            internship: {
              hours: 290,
              location: "XYZ Company",
            },
          },
        ],
      },
      someEnum: {
        "@enum": ["red", "yellow", "green"],
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
  },
};




const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/routes.ts"];

export default swaggerAutogen({openapi:"3.0.3"})(outputFile, endpointsFiles, doc);
