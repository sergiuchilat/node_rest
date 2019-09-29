module.exports = (app, connection) => {
  app.get('/route1', [
    async (request, response, next) => {
      const SampleObject = require('../models/Sample');
      response.send(SampleObject.getData());
    }
  ]);
  
  app.get('/students', [
    (request, response, next) => {
      connection.query("SELECT name FROM students", (error, results, fields) => {
        if(error) {
          response.send(error);
        }
        response.send(results);
      });
      connection.end();
    }
  ]);
  
  app.post('/students', [
    (request, response, next) => {
      connection.query(`INSERT INTO students SET name = '${request.body.name}', age = ${request.body.age}`, (error, results, fields) => {
        if(error) {
          response.send(error);
        }
        response.send(results);
      });
      connection.end();
    }
  ]);
  
  app.patch('/students/:id', [
    (request, response, next) => {
      connection.query(`UPDATE students SET name = '${request.body.name}', age = ${request.body.age} WHERE id = ${request.params.id}`, (error, results, fields) => {
        if(error) {
          response.send(error);
        }
        response.send(results);
      });
      connection.end();
    }
  ]);
  
  
  app.delete('/students/:id', [
    (request, response, next) => {
      connection.query(`DELETE FROM students WHERE id = ${request.params.id}`, (error, results, fields) => {
        if(error) {
          response.send(error);
        }
        response.send(results);
      });
      connection.end();
    }
  ]);
}
