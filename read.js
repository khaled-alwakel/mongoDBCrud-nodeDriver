const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017/sample_training");
async function main() {
  try {
    await client.connect();
    //read- findOne()
    await findOneProductByName(client, "apple watch");
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

console.log(' return array of objects ')

  async function test () {
    const x = await client
    .db("sample_training")
    .collection("products")
    .find()  
    .toArray();
    if (x){
      console.log(x)
    }
    
  }

test()

