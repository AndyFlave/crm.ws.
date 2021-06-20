import M from 'materialize-css/dist/js/materialize.min'

export default {
  install(Vue, options) {
    console.log(options)

    Vue.prototype.$message = function(html) {
      M.toast({html})
    }

    Vue.prototype.$error = function(html) {
      M.toast({html: `[Ошибка]: ${html}`})
    }
  }
}