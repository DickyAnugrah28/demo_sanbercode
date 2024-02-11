//ini adalah contoh api automation menggunakan module js
import request from "supertest";
import { expect } from "chai";
import { createToken } from "../function/createToken.specs.js";

const baseUrl = "https://restful-booker.herokuapp.com";

describe("Get Token Scenario" , () => {
    let token;
    it("Positive - Success Get Token", async () => {
       
        const payload = {
                "username" : "admin",
                "password" : "password123"
        }
        //send request
        const response = await request (baseUrl)
        .post("/auth") //endpoint
        .send(payload) //request body
        .set("Content-Type", "Application/json") //header

        expect((await response).status).to.equal(200)
        token = (await response).body.token
        console.log(await token)

    })
    it("import token", async () => {
        const token = await createToken()
        console.log(await token)

    })

})

