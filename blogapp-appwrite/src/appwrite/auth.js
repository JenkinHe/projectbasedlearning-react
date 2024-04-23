
import conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";


export class AuthService{
    client=new Client();
    account;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
        this.account =new Account(this.client);
    }

    async createAccount({email,password,name}){
        try{
           const userAccount= await this.account.create(ID.unique(),email,password,name)
           if(userAccount){
                return this.login({email,password})
           }else{
            return userAccount;
           }

        }catch(error){
            throw error
        }
    }
    async login(){}
    async getCurrentUser(){}
    async logout(){}


}




const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const account = new Account(client);