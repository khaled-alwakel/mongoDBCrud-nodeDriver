const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017/mongo_crud");
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
