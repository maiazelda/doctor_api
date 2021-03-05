const AWS = require("aws-sdk")
const dbClient = new AWS.DynamoDB.DocumentClient({
    region: "eu-central-1"
})

let response;

exports.lambdaHandler = async (event, context) => {
    console.log(event)
    try {
        const payload = JSON.parse(event.body)
        const dbInsertMsg = await dbClient.put({
            TableName: "doctor-api-MessageTable-1MLDFZ6FB2D3E",
            Item: {
                sender: payload.sender,
                receiver: payload.receiver,
                message: payload.message
            }
        }).promise()
        console.log(dbInsertMsg)

        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'MSG envoyé',

            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
