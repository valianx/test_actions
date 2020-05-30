const express = require("express");
const app = express();
const { exec } = require("child_process");

const port = 3000;

app.set("port", port);
console.log("QUE WEAAAA???!!!")

const repo = "https://github.com/valianx/test_actions";

app.get("", (req, res) => {
  res.send("index");
});

app.post("/github-webhook", async (req, res) => {
  try {
    exec(`cd ${__dirname} && git pull origin master`, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });

    return res.status(200).json("ok");
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
});

app.listen(port, () => {
  console.log("app run on port 3000");
});

const suma = (a, b) => {
  return a + b;
};

module.exports = { suma };
