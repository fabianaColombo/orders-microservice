# Orders Service
A microservice to post and get product orders in Node.js and Express + PostgreSQL

## Getting Started

These instructions will cover how to start the application in development

### Prerequisities

#### General
* Node.js
* Git
* An IDE like Visual Code Studio
* PostgreSQL database setup OR existing sample database credentials (owned by me)

#### If you will run this container in docker.

* [Windows](https://docs.docker.com/windows/started)
* [OS X](https://docs.docker.com/mac/started/)
* [Linux](https://docs.docker.com/linux/started/)


### Options to run application

#### Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/fabianaColombo/orders-service.git
cd orders-service
```

```bash
npm install
```

Create a .env file in the root of the repository containing 

###### Environment Variables

* `HOST` - postgresql database host
* `USERNAME` - postgresql database user name
* `PASSWORD` - postgresql database password
* `DB` - postgresql database name
* `DIALECT` - postgres


#### Using a Dockerfile

Build docker image

```shell
docker build -t <yourname>/<your-image-name> .
```

Run docker container

```shell
docker run -p 4000:4000 -d <yourname>/<your-image-name>
```

#### Run server from terminal

To start the express server, run the following

```bash
npm run dev
```

Open [http://localhost:4000](http://localhost:4000) and verify the server is running. If all is correct, you should see "Hello World!".


## API Documentation

* [Swagger](http://localhost:4000/api-docs/)
* [Github Repository](https://quay.io/repository/your/docker-repository)


## Author

* **Fabiana Colombo** - *Orders Service* - [Github - fabianaColombo](https://github.com/fabianaColombo)

