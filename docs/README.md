# jest-mongodb-node-example
CRUD project to serve as an example for future projects that use the same libraries. This repo has some tests using the JEST framework and the mongoDB database (the tests also use mongoDB, but in memory using the mongodb-memory-server library).

To run this project on your machine you need to create a .env file in the root folder with this content:<br>
PORT=< PORT (e.g. 3001) ><br>
DB_URI=< your mongoDB URI ><br>

To run this project using docker you need to run the following commands in your terminal:<br>
docker build . -t jest-mongodb-node-example<br>
docker run --env PORT=< CONTAINER PORT (e.g. 3001) > --env DB_URI=< your mongoDB URI > -p < LOCALHOST PORT (e.g. 3001) >:< CONTAINER PORT (e.g. 3001) > -d jest-mongodb-node-example<br>

To add your app to a Kubernetes cluster you need to create a .env file (described above) and run the following commands in your terminal:<br>
kubectl create secret generic jest-mongodb-node-secrets --from-env-file=.env<br>
kubectl apply -f manifest.yaml 
