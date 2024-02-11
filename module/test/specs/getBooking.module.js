//ini adalah contoh api automation menggunakan module js
import request from "supertest";
import { expect } from "chai";
import { getBooking } from "../function/getBooking.specs.js";

const baseUrl = "https://restful-booker.herokuapp.com";
const bookingId = "10"

describe("Get All Booking" ,() => {
    it('Positive - success get all booking' , async () => {
        const response = await request(baseUrl) //baseUrl 
        .get("/booking") //endpoint

        //Assertion menggunakan chai
        expect((await response).status).to.equal(200)
        console.log((await response).body)
        
    })

    it('Positive - success get booking Id' , async () => {
        const response = await request(baseUrl) //baseUrl 
        .get(`/booking/${bookingId}`) //endpoint
        console.log(`/booking/${bookingId}`)

        //Assertion menggunakan chai
        expect((await response).status).to.equal(200)
        console.log((await response).body)
        
    })
        
})

describe("Get Booking Scenario By Function", () => {
    it("Success get booking all", async () => {
        const response = await getBooking.all();
        console.log((await response).status)

         //Assertion menggunakan chai
         expect((await response).status).to.equal(200)
         console.log((await response).body)
         
    })
})
