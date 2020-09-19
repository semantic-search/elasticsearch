DELETE /store


PUT /store
{
  "settings": {
    "analysis": {
      "filter": {
        "autocomplete_filter": {
          "type": "edge_ngram",
          "min_gram": 1,
          "max_gram": 5
        }
      },
      "analyzer": {
        "autocomplete_analyzer": {
          "type": "custom",
          "tokenizer": "standard",
          "filter": [
            "lowercase",
            "autocomplete_filter"
          ]
        }
      }
    }
  }
}

GET /store

GET /store/_analyze
{
"analyzer": "autocomplete_analyzer",
"text": "Database"
}


PUT /store/_mapping
{
  "properties": {
    "name": {
      "type": "text",
      "analyzer": "autocomplete_analyzer"
    },
    "price": {
      "type": "double"
    },
    "quantity": {
      "type": "integer"
    },
    "department": {
      "type": "keyword"
    }
  }
}


PUT /store/_doc/1
{
  "name": "Multi-Grain Cereal",
  "price": "4.99",
  "quantity": "4",
  "department": "Packaged Foods"
}

# Depricated type waystuff 
PUT /store/products/1
{
  "name": "Multi-Grain Cereal",
  "price": "4.99",
  "quantity": "4",
  "department": "Packaged Foods"
}


PUT /store
{
  "name": "Naya mal",
  "price": "4.99",
  "quantity": "4",
  "department": "Packaged Foods"
}

GET /store/_search
{
  "query": {
    "match_all": {}
  }
}


GET /store/_search
{
  "query": {
    "match": {
      "name": {
        "query": "Super Wasabi",
        "analyzer": "autocomplete_analyzer"
      }
    }
  }
}

POST /store/_analyze
{
  "explain": true,
  "field": "name",
  "text": "Multi-Grain Cereal",
  "analyzer": "autocomplete_analyzer"
}
