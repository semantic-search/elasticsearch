const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://52.188.166.61:9200" });

async function run() {
//   const { body: bulkResponse } = await client.bulk({
//     refresh: true,
//     body: [
//       { index: { _index: "game-of-thrones" } },
//       {
//         character: "Ned Stark",
//         quote: "Winter is coming.",
//       },

//       { index: { _index: "game-of-thrones" } },
//       {
//         character: "Daenerys Targaryen",
//         quote: "I am the blood of the dragon.",
//       },

//       { index: { _index: "game-of-thrones" } },
//       {
//         character: "Tyrion Lannister",
//         quote: "A mind needs books like a sword needs a whetstone.",
//       },
//     ],
//   });

//   if (bulkResponse.errors) {
//     console.log(bulkResponse);
//     process.exit(1);
//   }

  const { body } = await client.search({
    index: "game-of-thrones",
    body: {
      //   query: {
      //     match: { quote: 'witner' }
      //   },
      suggest: {
        gotQuotes: {
          text: "witer",
          term: { field: "quote" },
        },
      },
    },
  });

  const {
    suggest: {
        gotQuotes: [data],
    },
  } = body;

  console.log(data)
  console.log(body);
}

run().catch(console.log);
