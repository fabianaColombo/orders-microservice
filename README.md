# Orders Service
A microservice to post and get product orders in Node.js and Express + PostgressSQL

## Getting Started

These instructions will cover usage information and for the docker container 

### Prerequisities

In order to run this container you'll need docker installed.

* [Windows](https://docs.docker.com/windows/started)
* [OS X](https://docs.docker.com/mac/started/)
* [Linux](https://docs.docker.com/linux/started/)

### Options to run application

#### Using a Dockerfile

Build docker image

```shell
docker build -t fabianacolombo/orders-service-4 .
```

Run docker container

```shell
docker run -p 5000:5000 -d fabianacolombo/orders-service-4
```

#### Locally run with node

Clone the repo and install the dependencies.

```bash
git clone https://github.com/fabianaColombo/orders-service.git
cd orders-service
```

```bash
npm install
```

## Steps for read-only access

To start the express server, run the following

```bash
npm run dev
```

Open [http://localhost:4000](http://localhost:4000) and verify the server is running. If all is correct, you should see "Hello World!".

#### Environment Variables

* `HOST` - postgresql database host
* `USERNAME` - postgresql database user name
* `PASSWORD` - postgresql database password
* `DB` - postgresql database name
* `DIALECT` - postgres


## API Documentation

* [Swagger](http://localhost:4000/api-docs/)
* [Github Repository](https://quay.io/repository/your/docker-repository)


## Author

* **Fabiana Colombo** - *Orders Service* - [Github - fabianaColombo](https://github.com/fabianaColombo)

