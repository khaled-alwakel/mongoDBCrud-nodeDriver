let uri =
  "mongodb+srv://Khaled-Alwakel:rTZfq8uZiiJmQw0e@cluster0.g1hid9r.mongodb.net/sample_training?retryWrites=true&w=majority";

const { MongoClient } = require("mongodb");
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    await updateProductByName(client, "iphone 15", {
      price: 9000,
    });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);

async function updateProductByName(client, productName, updatedProduct) {
  const result = await client
    .db("sample_training")
    .collection("products")
    .updateOne({ name: productName }, { $set: updatedProduct });

  console.log(`${result.matchedCount} document(s) matched the query criteria.`);
  console.log(`${result.modifiedCount} document(s) was/were updated.`);
}
