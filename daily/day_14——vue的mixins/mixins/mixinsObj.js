/*
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-27 21:05:56
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-27 21:12:38
 */

// 创建一个混入对象
export const mixinsObj = {
  data () {
    return {
      msg: '2222',
      name: 'Evildoer'
    }
  },
  mehtods: {
    fn: function () {
      // this.$data 用于获取 data 里面的数据
      console.log(this.$data);
    }
  }
}



