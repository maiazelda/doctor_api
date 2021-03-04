const AWS = require("aws-sdk")
const dbClient = new AWS.DynamoDB.DocumentClient({
    region: "eu-central-1"
})

let response;


exports.lambdaHandler = async (event, context) => {
    try {
        
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Update devices api',
                
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
