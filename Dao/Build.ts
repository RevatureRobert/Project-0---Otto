import * as AWS from 'aws-sdk';
import { config } from 'dotenv';
import { IGame } from '../models/gameModel';

config();

AWS.config.update({
    region: process.env.region,
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey
})

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const GAMES_TABLE = "GAMES_TABLE";


/**
 * 
 */
export default class GameDao {
    
    /**
     * 
     * @returns 
     */
    public getAll = async() => {
        const params = {
            TableName: GAMES_TABLE
        };
        const game = await dynamoClient.scan(params).promise();
        console.log(game.Items);
        return game.Items as IGame[];
    }

    /**
     * 
     * @param Genre 
     * @returns 
     */
    public getByGenre = async(Genre) => {
        const params = {
            TableName: GAMES_TABLE,
            IndexName: "Genre-index",
            KeyConditionExpression: "#Genre = :Genre",
            ExpressionAttributeValues: {
                ":Genre": Genre
            },
            ExpressionAttributeNames:{
                "#Genre": "Genre"
            }
        }
        const game = await dynamoClient.query(params).promise();
        console.log(game.Items);
        return game.Items as IGame[];
    }
    
    /**
     * 
     * @param genre 
     * @param title 
     * @returns 
     */
    public getById = async(genre, title) => {
        const params = {
            TableName: GAMES_TABLE,
            IndexName: "Genre-Title-index", 
            KeyConditionExpression: "#Title = :Title and #Genre = :Genre",
            ExpressionAttributeValues: {
                ":Genre": genre,
                ":Title": title
                
            },
            ExpressionAttributeNames:{
                "#Genre": "Genre",
                "#Title": "Title"
                
            }
        }
        console.log(title);
        const game = await dynamoClient.query(params).promise();
        console.log(game.Items);
        return game.Items as IGame[];
    }

    /**
     * 
     * @param game 
     * @returns 
     */
    public addOrUpdate = async (game: IGame) => {
        const params = {
            TableName: GAMES_TABLE,
            Item: game,
            Key: {
                "Genre": `${game.genre}`,
                "id": `${game.id}`
            }
        };
        return await dynamoClient.put(params).promise();
    }

    /**
     * 
     * @param game 
     * @returns 
     */
    public delById = async(game: IGame) => {
        const params = {
            TableName: GAMES_TABLE,
            Key: {
                "Genre": `${game.genre}`,
                "id": `${game.id}`
            }
        }
        return await dynamoClient.delete(params).promise();
        
    }
}

