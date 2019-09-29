 class StudentsController {
  
  constructor (connection) {
    console.clear();
    console.log('1', connection);
    this.connection = connection
  }
  
  index (request, response, next) {
    
    console.log('this', this);
    console.log('2', this.connection);
    this.connection.query("SELECT name FROM students", (error, results, fields) => {
      if(error) {
        response.send(error);
      }
      response.send(results);
    });
    this.connection.end();
  }
}
