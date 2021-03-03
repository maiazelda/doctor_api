const AWS = require("aws-sdk")
const dbClient = new AWS.DynamoDB.DocumentClient({
    region: "eu-central-1"
})


async function testReadTablebyKey (patient) {
    const params = {
        TableName:"ma-1ere-table",
        Key:{
            idClient:patient
        }
    }
    console.log('called')
    const response = await dbClient.get(params).promise()
    console.log(response.Item)
    return response.Item
}

async function testInsertinDb(newIdClient, newEmail, newTel, newGender){
    const params= {
        TableName:"ma-1ere-table",
        Item:{
            idClient:newIdClient,
            email:newEmail,
            tel:newTel,
            gender:newGender
        }
        
    }
    const resultat = await dbClient.put(params).promise()
    console.log(resultat)
    return resultat
}

async function main () {
    const element = await testReadTablebyKey("maia")
    await testInsertinDb("theo","theo@dev.dev", "06666666", "male")
}

const _= main() // 