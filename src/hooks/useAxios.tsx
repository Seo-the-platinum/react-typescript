import React from 'react'
import axios from 'axios'


export default axios.create({
  baseURL: 'https://www.moogleapi.com/api/v1/',
  headers: {
    "Content-Type": "application/json",
  }
})