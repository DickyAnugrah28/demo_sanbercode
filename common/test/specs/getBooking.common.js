//ini adalah contoh api automation menggunakan common js
const { expect } = require("chai");
const request = require("supertest");

const baseUrl = "https://restful-booker.herokuapp.com";

describe("Get All Booking" ,() => {
    it('Positive - success get all booking' , () => {
        const response = request(baseUrl) //baseUrl 
        .get("/booking") //endpoint

        //Assertion menggunakan chai
        expect(response.status).to.equal(200)
    })

})