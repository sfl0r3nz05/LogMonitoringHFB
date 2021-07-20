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

  db.createCollection('suricata');