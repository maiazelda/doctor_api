const AWS = require("aws-sdk")
const dbClient = new AWS.DynamoDB.DocumentClient({
    region: "eu-central-1"
})

let response;

exports.lambdaHandler = async (event, context) => {
    try {
        const dbResponse = await dbClient.scan({
            TableName:"doctor-api-DeviceTable-HML8L1N4HCFG",
        }).promise()
        console.log(dbResponse)
        
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                devices: dbResponse.Items
             })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
