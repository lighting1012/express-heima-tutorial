import { Toast } from 'vant'
import 'vant/es/toast/style'

export default {
  success: function(message) {
    return Toast.success({
      message,
    })
  },
  fail: function(message) {
    return Toast.fail({
      message,
    })
  }
}

