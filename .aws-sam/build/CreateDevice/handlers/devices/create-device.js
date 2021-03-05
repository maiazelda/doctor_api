const AWS = require("aws-sdk")
const dbClient = new AWS.DynamoDB.DocumentClient({
    region: "eu-central-1"
})
const {
    success,
    abort
} = require("../../utils/response")

let response;

exports.lambdaHandler = async (event, context) => {
    console.log(event)
    try {
        const payload = JSON.parse(event.body)
        const dbInsertDevice = await dbClient.put({
            TableName: "doctor-api-DeviceTable-1X525QLJIKMCP",
            Item: {
                user: payload.user,
                device: payload.device
            }
        }).promise()
        console.log(dbInsertDevice)

        response = success({
            message : "device créé"
        })

    } catch (err) {
        console.log(err);
        response = abort(400, {
            message: "bug"
        })
    }

    return response
};
