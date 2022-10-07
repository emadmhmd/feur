# Feur

Simple TODO APP
## Table of content

- [Feur](#feur)
  - [Table of content](#table-of-content)
  - [Development](#development)
    - [Prerequisites](#prerequisites)
    - [Configuration](#configuration)
    - [Run instructions](#run-instructions)
  - [Docker](#docker)
    - [Not Tested yet](#not-tested-yet)

## Development

### Prerequisites

- Node.js v16.13.1
- MongoDB v5.0.8
- Yarn v1.22.15 or higher

### Configuration

Copy example.dev.env to dev.env and adapt you variables if needed

- Database (MongoDB)

```env
MONGODB_USER=${USER}
MONGODB_PASSWORD=${PASSWORD}
MONGODB_DATABASE=${DATABASE}
MONGODB_LOCAL_PORT=${LOCAL_PORT}
MONGODB_DOCKER_PORT=${DOCKER_PORT}
```

- Ports

```env
NODE_LOCAL_PORT=${NODE_LOCAL_PORT}
NODE_DOCKER_PORT=${NODE_DOCKER_PORT}
REACT_LOCAL_PORT=${REACT_LOCAL_PORT}
```

- Backend URL

```env
REACT_APP_BACKEND_BASE_URL=${URL}
```

example (Windows) : `REACT_APP_BACKEND_BASE_URL=http://localhost:${NODE_LOCAL_PORT}`

example (Linux) : `REACT_APP_BACKEND_BASE_URL=http://0.0.0.0:${NODE_LOCAL_PORT}`

### Run instructions

- Install node server dependencies

```sh
cd server
yarn
```

- You need to load env variables for the server from dev.env

```sh
# For windows (use Gitbash)
set -a && source ../dev.env && set +a
# Or
export $(grep -v '^#' ../dev.env | xargs)

# For linux
source ../dev.env

```

- Run node server

```sh
yarn start
```

- Install react client dependencies

```sh
cd client
yarn
```

- You need to load env variables for the client from dev.env

```sh
# For windows (use Gitbash)
set -a && source ../dev.env && set +a
# Or
export $(grep -v '^#' ../dev.env | xargs)

# For linux
source ../dev.env

```

- Run react client

```sh
yarn dev
```

## Docker

### Not Tested yet
