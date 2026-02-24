import { Static } from '@/app/views/tables/static/static'
import { Routes } from '@angular/router'

export const TABLES_ROUTES: Routes = [
  {
    path: 'tables/static',
    component: Static,
    data: { title: 'Static Tables' },
  },
]
