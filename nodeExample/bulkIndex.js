const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://52.188.166.61:9200" });

async function run() {
  const { body: bulkResponse } = await client.bulk({
    refresh: true,
    body: [
      { index: { _index: "store" } },
      {
        name: "Multi-Grain Cereal",
        price: "4.99",
        quantity: "4",
        department: "Packaged Foods",
      },

      { index: { _index: "store" } },
      {
        name: "1lb Ground Beef",
        price: "3.99",
        quantity: "29",
        department: "Meat and Seafood",
      },

      { index: { _index: "store" } },
      {
        name: "Dozen Apples",
        price: "2.49",
        quantity: "12",
        department: "Produce",
      },

      { index: { _index: "store" } },
      {
        name: "Chocolate Bar",
        price: "1.29",
        quantity: "2",
        department: "Packaged Foods",
      },

      { index: { _index: "store" } },
      {
        name: "1 Gallon Milk",
        price: "3.29",
        quantity: "16",
        department: "Dairy",
      },

      { index: { _index: "store" } },
      {
        name: "12 Pack Cherry Cola",
        price: "5.599",
        quantity: "5",
        department: "Packaged Foods",
      },

      { index: { _index: "store" } },
      {
        name: "Dozen Sodas",
        price: "2.49",
        quantity: "12",
        department: "Produce",
      },

      { index: { _index: "store" } },
      {
        name: "0.5lb Jumbo Shrimp",
        price: "5.29",
        quantity: "12",
        department: "Meat and Seafood",
      },
    ],
  });

  console.log(JSON.stringify(bulkResponse), "bulkResponse");

  if (bulkResponse.errors) {
    console.log(bulkResponse);
    process.exit(1);
  }
}

run().catch((err) => console.log(JSON.stringify(err)));
