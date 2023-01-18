import React, { useState } from "react";
import axios from "axios";

export function MessagesList ({message, index}) {
    const URL = process.env.REACT_APP_API_BASE_URL;

    async function clickHandler (event) {
        event.preventDefault();
        const response = await axios.get(URL + "/messages/" + message.message_id)
        console.log(response.data.data.message);
    }

    return (
        <div key = {index} onClick={clickHandler}>
            <p>Message: {message.message}</p>
            <p>Author: {message.author}</p>
            <br></br>
        </div>
    )
}