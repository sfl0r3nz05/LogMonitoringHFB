# Log Monitoring based on Hyperledger Fabric Blockchain

## General Architecture
![alt text](https://github.com/sfl0r3nz05/LogMonitoringHFB/blob/main/images/LogMonitoringHFB.png)

## Set up 🙂
1. The necessary plugins must be added as part of the Dockerfile included in logstash folder. E.g.:
    - RUN logstash-plugin install logstash-output-mongodb
    - RUN logstash-plugin install logstash-filter-uuid

## How to use 😎
1. Create a file (.env) in the project root
2. The .env file must be contain:
    - OS_SURICATA=alpine
    - ELK_VERSION=7.12.1
3. Copy and paste the file eve.json.example in the same directory (json-data).
4. Rename the copy to eve.json
    - The purpose of this feature is .gitignore file ignorates the eve.json to avoid overhead the repository with a huge json file.

## To do 🤔
1. Install plugins properly.
2. Add right rules to suricata in order to collect proper logs.