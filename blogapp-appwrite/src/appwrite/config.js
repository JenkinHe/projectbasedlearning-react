import { Client, Databases ,Storage,Query} from "appwrite";

import conf from "../conf/conf";


export class Service{
    client=new Client()
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
        this.databases=new Databases(this.client)
        this.bucket= new Storage(this.client)
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
            
        } catch (error) {
            console.log('Appwrite service ::getPost()::',error);
            return false;
            
        }
    }
}





const client = new Client();

const databases = new Databases(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
;