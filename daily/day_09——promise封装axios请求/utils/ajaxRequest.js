/*
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-20 00:01:00
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-20 00:04:22
 */


import axios from 'axios'

function get (_url, _params) {
    _params = _params || {}

    return new Promise ((resolve, reject) => {
        axios.get(_url, {_params})
        // 成功
        .then (res => {
            if (res.status === 200) {
                resolve(res.data)
            }
        })

        // 失败
        .catch (err => {
            reject(err)
        })

    })
}

function post (_url, _params) {
    return new Promise ((resolve, reject) => {
        axios.post(_url, {_params})
    }) 
}

export default {get}