import { ObjectId } from "mongodb";
import { connectToDatabase } from "./mongo";

async function allProduct(req, res) {
  const id = req.query.id;

  try {
    // Connect to the database
    const client = await connectToDatabase();
    const db = client.db("myShopdb");
    const itemCollection = db.collection("products");

    // get  single data from db
    if (req.method === "GET") {
      if (id) {
        const objectId = new ObjectId(id);
        const data = await itemCollection.findOne({ _id: objectId });
        res.status(200).json({ message: "Success", status: 200, data: data });

        // get all data from db
      } else {
        const items = await itemCollection.find({}).toArray();
        res.status(200).json({ message: "Success", status: 200, data: items });
      }
    }
  } catch (error) {
    console.error(error);

    // Respond with an error message and status in case of an error
    res.status(500).json({
      message: "Internal server error",
      status: 500,
      error: error.message,
    });
  }
}

export default allProduct;
