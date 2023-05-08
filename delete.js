let uri =
  "mongodb+srv://Khaled-Alwakel:rTZfq8uZiiJmQw0e@cluster0.g1hid9r.mongodb.net/sample_training?retryWrites=true&w=majority";

const { MongoClient } = require("mongodb");
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    await deleteProductByName(client, "iphone 15");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);
async function deleteProductByName(client, productName) {
  const result = await client
    .db("sample_training")
    .collection("products")
    .deleteOne({ name: productName });
  console.log(`${result.deletedCount} document(s) was/were deleted.`);
}
