const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

/**
 * users list
 */
server.get('/users', (req, res) => {

  let xperiences = router.db.get('users').value();

  let paginatedResponse = paginateResponse(req, xperiences);

  res.json(paginatedResponse);

});

/**
 * get user by id
 */
server.get('/user/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = router.db.get('users').find({ id: id }).value();
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('user not found');
  }
});

paginateResponse = (req, elements) => {

    const number = parseInt(req.query.page) || 0;
    const size = parseInt(req.query.pageSize) || 10;
    const startIndex = number * size;
    const endIndex = startIndex + size;
  
    const paginatedElements = elements.slice(startIndex, endIndex);
    const totalPages = Math.ceil(elements.length / size);
  
    const numberOfElements = paginatedElements.length;
  
    const first = number === 0;
    const last = totalPages === (number + 1);
  
    return {
      number,
      size,
      numberOfElements,
      first,
      last,
      totalPages,
      totalElements: elements.length,
      content: paginatedElements
    };
  
  }

  server.use(router);
  server.listen(3000, () => {
    console.log('JSON Server is running on port 3000');
  });
  