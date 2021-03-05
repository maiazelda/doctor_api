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
        const dbResponse = await dbClient.scan({
            TableName:"doctor-api-DeviceTable-1X525QLJIKMCP",
        }).promise()
        
        response = success({
            devices: dbResponse.Items
        })
        
    } catch (err) {
        console.log(err);
        response = abort(400, {
            message: "bug"
        })
        
    }

    return response
};
