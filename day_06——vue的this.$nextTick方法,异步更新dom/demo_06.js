/*
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-18 21:04:53
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-18 21:12:30
 */

new Vue ({
    el: '#app',
    data: {
        msg: 'Evildoer'
    },
    methods: {
        msgFn() {
            this.msg = test
            // console.log(this.$refs['ref_p'].innerHTML);  /// Evildoer 因为是异步操作
            this.$nextTick( () => {
                console.log(this.$refs['ref_p'].innerHTML); // test
            })
        }
    }
})