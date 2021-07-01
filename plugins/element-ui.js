import '../assets/element-variables.scss'
import Vue from 'vue'
import {
  Pagination,
  Table,
  TableColumn,
  Button,
  Progress
} from 'element-ui'
import locale from 'element-ui/lib/locale'
import lang from 'element-ui/lib/locale/lang/en'

locale.use(lang)

const components = [
  Pagination,
  Table,
  TableColumn,
  Button,
  Progress
]

const Element = {
  install (Vue) {
    components.forEach((component) => {
      Vue.component(component.name, component)
    })
  }
}

Vue.use(Element)
