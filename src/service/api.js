import axios from 'axios';
import { useState } from 'react';
import { getHeaderAndParams } from '../utils/utils';
import prettyBytes from 'pretty-bytes'


export const getData = async (paramData, headerData, formData, jsonText, setStatus, setApiResponse, setErrorResponse, setTime, setSize) => {
    const apiType = formData.type.toLowerCase()
    const apiUrl = formData.url
    const apiHeaders = getHeaderAndParams(headerData)
    const apiParams = getHeaderAndParams(paramData)
    // try {
    //     return await axios({
    //         method: apiType,
    //         url: apiUrl,
    //         body: jsonText,
    //         headers: apiHeaders,
    //         params: apiParams
    //     })

    // } catch (error) {
    //     console.log("Error calling APi", error)
    //     setStatus(error.response.status)
    //     return 'error'
    // }

    axios.interceptors.request.use(request => {
        request.customData = request.customData || {}
        request.customData.startTime = new Date().getTime()
        return request
    })

    axios.interceptors.response.use(response => {
        // response.responseTime = new Date().getTime() - response.config.meta.beginTimer;
        // return response;
        response.customData = response.customData || {}
        response.customData.time = new Date().getTime() - response.config.customData.startTime
        return response
    })

    await axios({
        method: apiType,
        url: apiUrl,
        body: jsonText,
        headers: apiHeaders,
        params: apiParams
    }).then(response => {
        setApiResponse(response.data)
        setStatus(response.status)
        setErrorResponse(false)
        setTime(response.customData.time)
        setSize(prettyBytes(
            JSON.stringify(response.data).length +
            JSON.stringify(response.headers).length
        ))
        // return response
    }).catch(error => {
        console.log("Error calling APi", error)
        setStatus(error.response.status)
        setErrorResponse(true)
    })

}