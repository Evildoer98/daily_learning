<!--
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-19 23:56:12
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-20 00:11:53
-->


<template>
    <div>
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
// import axios from 'axios'
import ajaxRequest from './utils/ajaxRequest'
export default {
    name: 'promise_axios',
    data () {
        return {
            msg: 'promise 封装 axios 公共方法'
        }
    },
    created() {
        // axios.get('http://localhost:3344/getList')
        // .then( _d => {
        //     console.log(_d);
        // })
        let _url = 'http://localhost:3344/getList'
        let _getData = ajaxRequest(_url, {a: 'Evildoer'})
        _getData.then( _d => {
            console.log(_d);
        }, err=> {
            console.error(err);
        })

    },
}
</script>