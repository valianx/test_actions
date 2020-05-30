const express = require('express')
const app = express()
const exec = require('child_process').exec;


const port = 3000
console.log(port)
app.set('port', port)


const repo = 'https://github.com/valianx/test_actions'

app.get('', (req, res)=>{
  res.send('index')
})

app.post('/github-webhook', ()=> {
  try {
    exec(`git pull`);
  } catch (error) {
    console.log(error);
  }
})

app.listen(port, ()=> {
  console.log('app run on port 3000')
})


const suma = (a, b) => {
  return a + b;
};

module.exports = { suma };
