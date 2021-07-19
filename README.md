# Log Monitoring based on Hyperledger Fabric Blockchain

## General Architecture
![alt text](https://github.com/sfl0r3nz05/LogMonitoringHFB/blob/main/images/LogMonitoringHFB.png)

## How to use 😎
1. Create a file (.env) in the project root
2. The .env file must be contain:
    - OS_SURICATA=alpine
    - ELK_VERSION=7.12.1
3. Copy and paste the file eve.json.example in the same directory (json-data).
4. Rename the copy to eve.json
    - The purpose of this feature is .gitignore file ignorates the eve.json to avoid overhead the repository with a huge json file.