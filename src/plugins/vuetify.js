// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

const MY_ICONS = {
  complete: '...',
  cancel: '...',
  close: '...',
  delete: '...', // delete (e.g. v-chip close)
  clear: '...',
  success: '...',
  info: '...',
  warning: '...',
  error: '...',
  prev: '...',
  next: '...',
  checkboxOn: '...',
  checkboxOff: '...',
  checkboxIndeterminate: '...',
  delimiter: '...', // for carousel
  sort: '...',
  expand: '...',
  menu: '...',
  subgroup: '...',
  dropdown: '...',
  radioOn: '...',
  radioOff: '...',
  edit: '...',
  ratingEmpty: '...',
  ratingFull: '...',
  ratingHalf: '...',
  loading: '...',
  first: '...',
  last: '...',
  unfold: '...',
  file: '...',
}

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    values: MY_ICONS,
  },
})
Vue.use(Vuetify);
