import { APIRequestContext } from "@playwright/test";

export default class BasicAuth {

    private Basic_Auth_EndPoint = "/basic_auth";

    constructor() {}

    async login(req:APIRequestContext,username: string, password: string) {
      let res =   await req.get(this.Basic_Auth_EndPoint, {
            headers: {
            'authorization' : `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`
        }});
        console.log(await res.text()); // prints the json response
        return res;
    }






}


