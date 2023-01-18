import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function MessageForm () {
    const URL = process.env.REACT_APP_API_BASE_URL;
    const [ errors, setErrors] = useState(null);
    const navigate = useNavigate();
    const initialFormState = {
        author: "",
        message: "",
    }
    const [ formData, setFormData ] = useState( initialFormState );

    const handleChange = (event) => {
        event.preventDefault();
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
        console.log(formData)
    }

    const handleSubmit = async ( event ) => {
        event.preventDefault();
        try {
            setErrors(null);
            console.log("POST request here")
            //await axios.post(URL + "/messages")
            setFormData(initialFormState)
            navigate("/messages")

        } catch (error) {
            setErrors(error.response.data.error);
        }
        // axios.post
    }

    return (
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="author">Your Name:</label>
          <input
            name="author"
            type="text"
            id="author"
            placeholder="Your Name"
            required={true}
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="message">Message:</label>
          <input
            name="message"
            type="text"
            id="message"
            placeholder="Message"
            required={true}
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <br></br>
      </form>
    )
}