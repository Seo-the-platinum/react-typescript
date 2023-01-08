import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface AxiosProps {
    body: string | null;
    headers: any | null;
    method: any;
    url: string;
}
interface FFImage {
  collectionId: string;
  id: string;
  primary: number;
  url: string;
}
interface FFData {
  description: string;
  gender: string;
  height: string;
  id: string;
  japaneseName: string | null;
  job: string;
  name: string;
  origin: string;
  pictures: Array<
    FFImage
  >;
  stats: Array<[]>;
  weight: string;
}

const ffArr: FFData[] = []
axios.defaults.baseURL = 'https://www.moogleapi.com/api/v1'
const useAxios = (axiosParams : AxiosProps) => {
  //handle the response, potential errors, and loading with state
    const [ response, setResponse ] = useState<typeof ffArr|null>(null)
    const [ error, setError ] = useState<unknown>(null)
    const [loading, setLoading ] = useState<boolean>(true)
    const controller = new AbortController()
    const { signal } = controller
    const fetchData = async (params : AxiosProps): Promise<any>=> {
      //remember try and catch blocks. also remember async and await
      try {
        //we need await here because this is asynchronus
        const result = await axios.request(params)
        //once we have the data back, update state
        setResponse(result.data)
      }
      catch(error) {
        //check if error is a case of the error constructor.Sometimes we can get back something different than
        //the error constructor, so if it is an instance of, we set it as our error state.
        if (error instanceof Error) setError(error)
        //if the error we receive is not an instance of the error constructor, we take whatever is given
        //to us and convert it into a string. Then we update the error state.
        setError(String(error))
      }
      finally {
        setLoading(false)
      }

    }

    useEffect(()=> {
      if (axiosParams.url) {
        fetchData(axiosParams)
      }
      return ()=> {
        console.log('aborting!')
        controller.abort()}
    },[axiosParams.url])

  return {response, error, loading}
}

export default useAxios