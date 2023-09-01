import { Client, Account, Databases } from "appwrite";
require('dotenv').config();

const client = new Client();


client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64e9ea77d685252a9eed');

export const databases = new Databases(client);
export const account = new Account(client)