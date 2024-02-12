const https = require('https');

const getUsers = async () => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'jsonplaceholder.typicode.com',
      path: '/users',
      method: 'GET'
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve(JSON.parse(data));
      });
    });

    req.on('error', (error) => {
      console.error('Error fetching users:', error);
      reject(error);
    });

    req.end();
  });
};

module.exports = { getUsers };
