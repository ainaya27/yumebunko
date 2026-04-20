const { MongoClient } = require('mongodb');

// Ganti dengan connection string kamu
const uri = "mongodb://yumebunko_admin:rwBiy2Pd7jedOZKq@ac-gboxdzr-shard-00-00.0hjs7lz.mongodb.net:27017,ac-gboxdzr-shard-00-01.0hjs7lz.mongodb.net:27017,ac-gboxdzr-shard-00-02.0hjs7lz.mongodb.net:27017/?ssl=true&replicaSet=atlas-k6j2a5-shard-0&authSource=admin&appName=Cluster0";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Koneksi Berhasil!");
    const db = client.db('db_perpustakaan');
    const col = db.collection('komik');
    const data = await col.find().toArray();
    console.log("Data dari MongoDB:", data);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);