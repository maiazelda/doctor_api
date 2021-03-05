const corsHeaders = {
    "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,X-Amz-Security-Token,Authorization,X-Api-Key,X-Requested-With,Accept,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Access-Control-Allow-Headers",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT",
    "X-Requested-With": "*"
  }
  module.exports = {
    corsHeaders,
    success (jsonPayload, statusCode=200) {
      return {
        statusCode,
        headers: corsHeaders,
        body: jsonPayload ? JSON.stringify(jsonPayload) : ''
      }
    },
    abort (statusCode, jsonPayload) {
      return {
        statusCode,
        headers: corsHeaders,
        body: jsonPayload ? JSON.stringify(jsonPayload) : ''
      }
    }
  }