let uri =
  "mongodb+srv://Khaled-Alwakel:rTZfq8uZiiJmQw0e@cluster0.g1hid9r.mongodb.net/sample_training?retryWrites=true&w=majority";

const { MongoClient } = require("mongodb");
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    //read- findOne()
    await findOneProductByName(client, "iphone 15");

    //find()
    // await findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
    //   minimumNumberOfBedrooms: 4,
    //   minimumNumberOfBathrooms: 2,
    //   maximumNumberOfResults: 5,
    // });
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
