const serve = require('serve');

const server = serve(__dirname, {
  port: process.env.PORT || 3000,
  single: true,
  ignore: ['node_modules']
});

console.log(`Server running on port ${process.env.PORT || 3000}`);
