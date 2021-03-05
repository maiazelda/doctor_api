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
    try {
        const dbResponse = await dbClient.get({
            TableName: "doctor-api-DeviceTable-1X525QLJIKMCP",
            Key: {
                user: event.pathParameters.user,
                device: event.pathParameters.device
            }
        }).promise()
        if (dbResponse.Item) {
            await dbClient.delete({
                TableName: "doctor-api-DeviceTable-1X525QLJIKMCP",
                Key: {
                    user: event.pathParameters.user,
                    device: event.pathParameters.device
                }
            }).promise()


            response = success({
                message: "device supprimé"
            })
        } else {
            response = abort(404, {
                message: "device not found"
            })
        
        }

    } catch (err) {
        console.log(err);
        response = abort(400, {
            message: "bug"
        })
    }

    return response
};
