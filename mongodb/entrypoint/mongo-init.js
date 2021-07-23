db.createUser(
    {
        user: "lourdes",
        pwd: "changeme",
        roles: [
            {
                role: "readWrite",
                db: "suricata"
            }
        ]
    }
);
db = db.getSiblingDB('suricata');
db.createCollection('suricata');