to populate your mongo atlas instance use the following command in your terminal
mongoimport --host <primary shard> --ssl --username <username> --password <password> --authenticationDatabase admin --db <dbName> --collection <collectionName> --jsonArray --file <filename>
