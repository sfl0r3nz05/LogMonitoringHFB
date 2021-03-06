ex# Log Monitoring based on Hyperledger Fabric Blockchain

## General Architecture
![alt text](https://github.com/sfl0r3nz05/LogMonitoringHFB/blob/main/images/LogMonitoringHFB.png)

## Set up 🙂
1. The necessary plugins must be added as part of the Dockerfile included in logstash folder. E.g.:
    - RUN logstash-plugin install logstash-output-mongodb
    - RUN logstash-plugin install logstash-filter-uuid
2. Create a file (.env) in the project root based on .env.example file.
    - The .env file must be contain:
        - OS_SURICATA=
        - ELK_VERSION=
        - MONGO_INITDB_DATABASE=
        - MONGO_INITDB_COLLECTION=
        - MONGO_INITDB_ROOT_USERNAME=
        - MONGO_INITDB_ROOT_PASSWORD=
        - ME_CONFIG_BASICAUTH_USERNAME=
        - ME_CONFIG_BASICAUTH_PASSWORD=
        - ME_CONFIG_MONGODB_ADMINUSERNAME=
        - ME_CONFIG_MONGODB_ADMINPASSWORD=
3. Create a folder json-data
4. Create a file eve.json in the same directory (json-data).
    - The purpose of this feature is .gitignore file ignorates the eve.json to avoid overhead the repository with a huge json file.
5. Set execution permissions to eve.json file E.g.: sudo chmod +x -R json-data/*
6. Create folders mkdir -pv mongodb/database
7. Create folders mkdir -pv mongodb/entrypoint
8. Set the entrypoint file mongo-init.js
9. Set execution permissions to mongodb folder E.g.: sudo chmod +x -R mongodb/*
10. Create the file .dbshell
11. Set execution permissions to .dbshell file E.g.: sudo chmod +x -R mongodb/.dbshell

## How to use 😎
1. Start: docker-compose up -d
2. Stop: docker-compose stop
3. Down: docker-compose down

## How to test 👁‍🗨
### Test MongoDB
1. To connect to mongo docker, e.g., docker exec -it bad88f0b0326 bash
2. To log in in mongodb client, e.g., mongo -u lourdes -p changeme
3. To connect to database, e.g., use suricata
4. To show collectios created, e.g., show collections
5. To see inside collections, e.g., db.suricata.find().pretty()
### Test connection between logstash with MongoDB
1. To transfer the data, e.g., curl https://downloads.mongodb.com/compass/mongosh-1.0.1-linux-x64.tgz --output mongosh-1.0.1-linux-x64.tgz
2. To unzip mongosh-1.0.1-linux-x64, e.g., tar -zxvf mongosh-1.0.1-linux-x64.tgz
3. To access to bin folder, e.g., cd mongosh-1.0.1-linux-x64/bin
4. To log in mongodb client, e.g., ./mongosh mongodb://lourdes:changeme@172.20.0.3:27017/suricata
5. To authenticate in the database, e.g., ./mongosh mongodb://lourdes:changeme@172.18.0.2:27017/suricata?authSource=admin

## To do 🤔
1. Install plugins properly. 🔚
2. Sync logstash and mongodb
2. Add right rules to suricata in order to collect proper logs.

## Troubleshoot
1. To test the UUID and Json filters the mongodb plugin is disabled and then the file plugin is enabled:
    - file {path => "/usr/share/logstash/output/output.json"}