# Log Monitoring based on Hyperledger Fabric Blockchain

## General Architecture
![alt text](https://github.com/sfl0r3nz05/LogMonitoringHFB/blob/main/images/LogMonitoringHFB.png)

## Set up 🙂
1. The necessary plugins must be added as part of the Dockerfile included in logstash folder. E.g.:
    - RUN logstash-plugin install logstash-output-mongodb
    - RUN logstash-plugin install logstash-filter-uuid
2. Create a file (.env) in the project root or just rename .env.example file as .env
3. The .env file must be contain:
    - OS_SURICATA=
    - ELK_VERSION=
    - MONGO_INITDB_DATABASE=
    - MONGO_INITDB_COLLECTION=
    - MONGO_INITDB_ROOT_USERNAME=
    - MONGO_INITDB_ROOT_PASSWORD=
4. Copy and paste the file eve.json.example in the same directory (json-data).
5. Rename the copy to eve.json
    - The purpose of this feature is .gitignore file ignorates the eve.json to avoid overhead the repository with a huge json file.
6. Set execution permissions to eve.json file E.g.: sudo chmod +x -R json-data/*
7. Create folders mkdir -pv mongodb/database
8. Create folders mkdir -pv mongodb/entrypoiny
9. Set the entrypoint file mongo-init.js
10. Set execution permissions to mongodb folder E.g.: sudo chmod +x -R mongodb

## How to use 😎
1. Start: docker-compose up -d
2. Stop: docker-compose stop
3. Down: docker-compose down

## How to test 👁‍🗨
### Mongodb
1. To connect to mongo docker, e.g., docker exec -it bad88f0b0326 bash
2. To log in in mongodb client, e.g., mongo -u lourdes -p changeme
3. To connect to database, e.g., use suricata
4. To show collectios created, e.g., show collections
5. To see inside collections, e.g., db.suricata.find().pretty()

## To do 🤔
1. Install plugins properly. 🔚
2. Sync logstash and mongodb
2. Add right rules to suricata in order to collect proper logs.