const AWS = require("aws-sdk")
const uuid = require("uuid")

module.exports.kudosRepository = () => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" })
  const TableName = 'kudos'
  return {
    insertKudo: kudo => {
      const params = {
        TableName,
        Item: {
          id: uuid.v4(),
          date: new Date().toISOString(),
          ...kudo
        }
      }
      try{
        dynamoDB.put(params, function(err, data) {
          if (err) {
              throw("Unable to add kudo. Error JSON:", JSON.stringify(err, null, 2))
          } else {
              return `Added kudo:" ${JSON.stringify(data, null, 2)}`
          }
        });
      }
      catch (err) {
        console.log(err)
      }
    },
    getKudos: async () => {
      const params = {
        TableName,
        Select: "ALL_ATTRIBUTES"
      }
      const data = await dynamoDB.scan(params, function(err, data) {
        if (err) {
            throw("Unable to query. Error:", JSON.stringify(err, null, 2))
        } else {
            console.log(`Query succeeded, ${data.Items.length} returned.`)
          }
      }).promise()
      return data.Items
    }
  }
}