# Redis Cache

---

- Redis stands for "Remote Dictionary Server," and it is a key-value store that is designed for fast read and write operations.

- Redis is like a quick-access memory storage that helps your computer or application work faster by keeping important information close at hand, making everything run more smoothly.

- Redis stores the data in-memory for faster access

- The Redis helps to cache the response for the particular request in the server RAM and if the client request the server with the same request then the server serves the client with the response which is cache which reduces the time.

- we can use the redis as the primary database also.

# Installation of redis for the windows

- We cannot install the Redis for because it is basically developed for mac and linux but we can install by going to the Redis github [repository](https://github.com/tporadowski/redis/releases "repository")

- Download the .msi or .zip file and extract it .Copy the file path and add it to the evironment path variable.
- Go to your `cmd` prompt and type `redis-server` it will start redis server on the port 6379
- Open another terminal and type `redis-cli` it will open the redis cli terminal.
- then type `ping` it the cli respondes with `pong` then it server is running successfully.

# Redis and Node setup

- clone is repository
- `npm insatll` it will install all the necessary dependancies
- `npm start` to start the server.

# Cache

- send request to the server and see the response time, if the request being sent first time then it will always be high but after that it will cache the response and serve that response and serve you from that cache.
- send the request to this url `http://localhost:5000/repos/{any Github username}`.
