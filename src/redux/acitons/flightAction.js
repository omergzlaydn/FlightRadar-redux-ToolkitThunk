import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../slices/constant";
import axios from "axios";




export const getFlights =  createAsyncThunk("flight/getFlights", async() => {
    //? 1) APİ İSTEĞİ AT
    const res = await axios.request(options);
    console.log(res.data.aircraft)

    //? 2) GELEN VERİYİ FORMATLA 
     const refinedData = res.data.aircraft.map((i) => ({
        id : i[0],
        code: i[1],
        lat: i[2],
        lng: i[3],

    }));

    

    //? FORMATLANAN VERİYİ PAYLOAD OLARAK BELİRLE
    return refinedData;
})