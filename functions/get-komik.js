const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

exports.handler = async (event, context) => {
    try {
        if (!uri) {
            throw new Error("Link database (ENV) belum diset di Netlify!")
        }
        
        await client.connect();
        const database = client.db('db_perpustakaan');
        const collection = database.collection('komik');

        const dataKomik = await collection.find({}).toArray();

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(dataKomik),
        };
    } catch (error) {
        return { 
            statusCode: 500, 
            body: JSON.stringify({ error: error.message })
        };
    } finally {
        await client.close();
    }
};