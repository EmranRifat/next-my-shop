import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://imranachieveit:m9Ijfr8zSu4VPf6r@cluster0.o2tls7p.mongodb.net/?retryWrites=true&w=majority";
const dbName = "imranachieveit"

let cachedClient = null;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

if (!dbName) {
  throw new Error('Please define the MONGODB_DB environment variable');
}

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    cachedClient = client;
    return client;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export { connectToDatabase };
