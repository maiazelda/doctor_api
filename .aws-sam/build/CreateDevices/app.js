const AWS = require("aws-sdk")
const dbClient = new AWS.DynamoDB.DocumentClient({
    region: "eu-central-1"
})

let response;

exports.lambdaHandler = async (event, context) => {
    console.log(event)
    try {
        const payload = JSON.parse(event.body)
        const dbInsertDevice = await dbClient.put({
            TableName: "doctor-api-DeviceTable-HML8L1N4HCFG",
            Item: {
                user: payload.user,
                device: payload.device
            }
        }).promise()
        console.log(dbInsertDevice)

        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Create devices api',

            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
