const { MongoClient } = require('mongodb');

exports.handler = async (event, context) => {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('db_perpustakaan');
        const collection = database.collection('komik');

        const dataKomik = await collection.find({}).toArray();

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers":"Content-Type",
            },
            body: JSON.stringify(dataKomik),
        };
    } catch (error) {
        return { 
            statusCode: 500, 
            body: JSON.stringify({ 
                error: "Gagal ambil data",
                message: error.message 
            })
        };
    } finally {
        await client.close();
    }
};