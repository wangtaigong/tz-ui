import Button from './button/index.js'

const componentList = [
  Button
]

const install = (Vue) => {
  if (install.installed) return
  componentList.map(component => {
    Vue.component(component.name, component)
  })
}

if (window && window.Vue) {
  install(window.Vue)
}

export {
  install,
  Button
}