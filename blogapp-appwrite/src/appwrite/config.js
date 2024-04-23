import { Client, Databases ,Storage,Query,ID} from "appwrite";

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

    async getPosts(queries=[Query.equal("status",'active')]){
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId,queries)
        } catch (error) {
            console.log('Appwrite service ::getPosts()::',error);
            return false;
            
        }

    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,
            slug, {title,content,featuredImage,status,userId})
            
        } catch (error) {
            console.log('Appwrite service ::createPost()::',error);
            return false;
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId, slug,{
                title,content,featuredImage,status
                
            })
            
        } catch (error) {
            console.log('Appwrite service ::updatePost()::',error);
            return false;
            
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId, slug)
            return true;
            
        } catch (error) {
            console.log('Appwrite service ::deletePost()::',error);
            return false;
            
        }
    }

    // STORAGE SERVICE

    async uploadFile(file){
        try {
            return await this.bucket.createFile(conf.appwriteBucketId,ID.unique(),file)
            
        } catch (error) {
            console.log('Appwrite service ::uploadFile()::',error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(conf.appwriteBucketId,fileId)
            
        } catch (error) {
            console.log('Appwrite service ::deleteFile()::',error);
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