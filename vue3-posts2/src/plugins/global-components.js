import AppCard from '@/components/app/AppCard.vue'
import AppGrid from '@/components/app/AppGrid.vue'
import AppPagination from '@/components/app/AppPagination.vue'

export default {
  install(app) {
    app.component('AppCard', AppCard)
    app.component('AppGrid', AppGrid)
    app.component('AppPagination', AppPagination)
  }
}
