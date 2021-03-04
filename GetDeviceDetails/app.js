const AWS = require("aws-sdk")
const dbClient = new AWS.DynamoDB.DocumentClient({
    region: "eu-central-1"
})

let response;

exports.lambdaHandler = async (event, context) => {
    try {
        const dbResponse = await dbClient.get({
            TableName: "doctor-api-DeviceTable-HML8L1N4HCFG",
            Key: {
                user: event.pathParameters.user,
                device: event.pathParameters.device
            }
        }).promise()
        if (dbResponse.Item) {
            response = {
                'statusCode': 200,
                'body': JSON.stringify({
                    device: dbResponse.Item
                })
            }
        } else {
            response = {
                'statusCode': 404,
                'body': JSON.stringify({
                    message: "Device not found"
                })
            }
        }

    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
