const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017/mongo_crud");
async function main() {
  try {
    await client.connect();
    //read- findOne()
    await findOneProductByName(client, "iphone 15");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);

//findOne()
async function findOneProductByName(client, productName) {
  const result = await client
    .db("sample_training")
    .collection("products")
    .findOne({ name: productName });

  if (result) {
    console.log(
      `Found a listing in the collection with the name '${productName}':`
    );
    console.log(result);
  } else {
    console.log(`No listings found with the name '${productName}'`);
  }
}
