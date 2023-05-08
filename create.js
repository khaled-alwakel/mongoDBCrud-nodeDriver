let uri =
  "mongodb+srv://Khaled-Alwakel:rTZfq8uZiiJmQw0e@cluster0.g1hid9r.mongodb.net/sample_training?retryWrites=true&w=majority";

const { MongoClient } = require("mongodb");
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // insertOne();
    // await createProduct(client, {
    //   category: "mobile phones",
    //   name: "iphone 15",
    //   color: "black",
    //   price: 1500,
    // });

    // insertMany() notice the flexible Schema
    await createMultipleProducts(client, [
      {
        category: "pc",
        name: "hp pro desk g1",
        color: "black",
        price: 1300,
      },
      {
        category: "mobile workstation",
        name: "dell precision m4800",
        color: "black",
        price: 2500,
      },
      {
        category: "smart watch",
        name: "apple watch",
        color: "black",
        price: 500,
      },
    ]);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
// insertOne()
async function createProduct(client, newProduct) {
  const result = await client
    .db("sample_training")
    .collection("products")
    .insertOne(newProduct);
  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
}

// insertMany()
async function createMultipleProducts(client, newProducts) {
  const result = await client
    .db("sample_training")
    .collection("products")
    .insertMany(newProducts);

  console.log(
    `${result.insertedCount} new listing(s) created with the following id(s):`
  );
  console.log(result.insertedIds);
}
