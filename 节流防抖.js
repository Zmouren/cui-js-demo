function debounce(wait, fn) {
  var timeout
  return function() {
    var context = this
    var args = ([]).slice(arguments)
    clearTimeout(timeout)
    timeout = setTimeout(function() {
      fn.apply(context, args)
    }, wait)
  }
}

function throttle(wait, fn) {
  var timeout
  return function() {
    var context = this
    var args = arguments
    if (!timeout) {
      // ! 使用 clearTimeout(timeout) 和 把 timeout = null 这两种操作有什么区别吗?
      timeout = setTimeout(function() {
        // timeout 设置为 null, 保证当等待了一段时间(wait)的定时器函数可以执行的时, 立即执行下一定时器函数
        // 定时器函数一定是等待的
        timeout = null
        fn.apply(context, args)
      }, wait)
    }
  }
}


const fn = () => {
  var timeout

}