const express = require("express");
const redis = require("redis");
import("node-fetch")
  .then((nodeFetchModule) => {
    const fetch = nodeFetchModule.default; // or the appropriate export
    // Now you can use the 'fetch' function
  })
  .catch((error) => {
    // Handle any errors that occur during the import
    console.error(error);
  });

const PORT = 5000;

const client = redis.createClient();
const app = express();

client.on("error", (error) => {
  console.log("Error encountered :", error);
});

client.on("connect", (error) => {
  console.log("Redis connection Established");
});

client.connect();

app.get("/repos/:username", async (req, res) => {
  const { username } = req.params;

  const cacheresponse = await client.get(username);
  if (cacheresponse !== null) {
    res.send(JSON.parse(cacheresponse));
  } else {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    client.set(username, JSON.stringify(data));
    res.send(data);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on the port http://localhost:${PORT}`);
});
