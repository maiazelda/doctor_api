const AWS = require("aws-sdk")
const dbClient = new AWS.DynamoDB.DocumentClient({
    region: "eu-central-1"
})

let response;

exports.lambdaHandler = async (event, context) => {
    try {
        console.log(event)
        
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: "test"
             })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
