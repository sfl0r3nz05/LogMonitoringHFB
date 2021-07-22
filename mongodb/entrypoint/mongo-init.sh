#!/bin/bash

echo "Creating suricata..."

mongo --eval "db.createUser({user: 'lourdes', pwd: 'changeme',roles: [{role: 'dbOwner', db: 'suricata'},{role: 'readWrite', db: 'test'}]});"
mongo -u lourdes -p changeme --eval "db = db.getSiblingDB('suricata'); 
db.createCollection('suricata');"


echo "Finishing with suricata"