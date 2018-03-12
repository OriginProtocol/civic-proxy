# civic-proxy

Description: Handles the decrypting of user information being returned from Civic


## Install and run civic-proxy locally
  
 1) Install all npm dependencies `npm install`
 2) Create your `.env` file and define your ENV vars. `touch .evn`
 
 The contents of your `.env` file should look like:
  ```
  SERVER_HOST=0.0.0.0
  SERVER_PORT=8080
  
  CIVIC_APP_ID=your_id
  CIVIC_PRIVATE_KEY=your_key
  CIVIC_PUBLIC_KEY=your_key
  CIVIC_SECRET=your_secret
  CIVIC_PRIVATE_ENCRYPTION_KEY=your_key
  CIVIC_PUBLIC_ENCRYPTION_KEY=your_key
  ```
 2) Start the server `npm run dev` (Server will automatically restart during development file saves)


## Install and run civic-proxy Docker Container (Production)

 Civic-proxy runs a node.js + express.js server in a docker container.  [Learn to install Docker](https://docs.docker.com/install/)
 
 1) Build civic-proxy Docker Container `docker build -t civic-proxy .`
 2) Run the container `docker run --name civic-proxy -p 8080:8080 -d civic-proxy`
 
 Debugging the container
 
 1) Print the app output `docker logs civic-proxy`
 2) Enter the Docker container `docker exec -it civic-proxy /bin/bash`
 
 Testing the container response on local machine
 
 1) Curl the docker container from localhost `curl -i localhost:8080`
  
