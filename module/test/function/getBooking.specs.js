import request from "supertest";
import { baseUrl } from "../../data/config.js";

async function getBookingAll(){
    let response = await request(baseUrl) //baseUrl 
    .get("/booking") //endpoint

    return (await response)
}

async function getBookingParams(paramFirtName,paramLastName){
    let response = await request(baseUrl) //baseUrl 
    .get(`booking`+`?firstName=${paramFirtName}&lastName=${paramLastName}`) //endpoint

    
    return (await response)
}


async function getBookingId(bookingId){
    let response = await request(baseUrl) //baseUrl 
        .get(`/booking/${bookingId}`) //endpoint

   
    return (await response)
}


export const getBooking = {
    all : getBookingAll,
    params : getBookingParams,
    id : getBookingId,
}