const http = require('http');

const options = {
  hostname: 'server',
  port: 3000, 
  path: '/',
  method: 'GET'
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response from server:', data);
  });
});

req.on('error', (e) => {
  console.error('Error:', e);
});

req.end();
