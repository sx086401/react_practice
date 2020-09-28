This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Docker

Build a docker file.

``` shell
docker build . / docker build -f Dockerfile -p .
```

Also can add docker file for dev environment.

``` shell
docker build -f Dockerfile.dev -p .
```

Run a docker container. -p for prot mapping, -v for code syncing

``` shell
docker run -it -p {local_port}:{container_port} --name {docker_name} -v /app/node_modules -v (pwd):/app  -d{image_id}
```

``` shell
docker exec -it {docker_name} yarn test
```
