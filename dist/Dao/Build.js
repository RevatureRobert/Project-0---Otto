"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require("aws-sdk");
const dotenv_1 = require("dotenv");
dotenv_1.config();
AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
const dynamoClient = new AWS.DynamoDB.DocumentClient();
const GAMES_TABLE = "GAMES_TABLE";
class GameDao {
    constructor() {
        this.getAll = async () => {
            const params = {
                TableName: GAMES_TABLE
            };
            const game = await dynamoClient.scan(params).promise();
            console.log(game.Items);
            return game.Items;
        };
        this.getById = async (id) => {
            const params = {
                TableName: GAMES_TABLE,
                Item: id
            };
            const game = await dynamoClient.scan(params).promise();
            console.log(game.Items);
            return game.Items;
        };
        this.add = async (game) => {
            const params = {
                TableName: GAMES_TABLE,
                Item: game,
            };
            return await dynamoClient.put(params).promise();
        };
        this.update = async (game) => {
            const params = {
                TableName: GAMES_TABLE,
                Item: game,
            };
            return await dynamoClient.put(params).promise();
        };
        this.delById = async (Genre, id) => {
            const params = {
                TableName: GAMES_TABLE,
                Key: {
                    Genre,
                    id
                }
            };
            const game = await dynamoClient.delete(params).promise();
            return game;
        };
    }
}
exports.default = GameDao;
//# sourceMappingURL=Build.js.map