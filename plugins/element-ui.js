import '../assets/element-variables.scss'
import Vue from 'vue'
import {
  Pagination,
  Table,
  TableColumn,
  Button
} from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

const components = [
  Pagination,
  Table,
  TableColumn,
  Button
]

const Element = {
  install (Vue) {
    components.forEach((component) => {
      Vue.component(component.name, component)
    })
  }
}

Vue.use(Element, { locale })
