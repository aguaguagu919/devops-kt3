const { handle } = require('./server');

async function get(path) {
  const res = { writeHead: jest.fn(), end: jest.fn() };
  await handle({ method: 'GET', url: path }, res);
  return res;
}

test('GET / returns the project title', async () => {
  const res = await get('/');
  expect(res.writeHead.mock.calls[0][0]).toBe(200);
  expect(res.end).toHaveBeenCalledWith('KT3 App');
});

test('GET /health returns a JSON status', async () => {
  const res = await get('/health');
  expect(res.writeHead).toHaveBeenCalledWith(200, { 'Content-Type': 'application/json' });
  expect(JSON.parse(res.end.mock.calls[0][0])).toEqual({ status: 'ok' });
});
