import { Component, inject } from '@angular/core'
import { LayoutStoreService } from '@core/services/layout-store.service'
import { NgIcon } from '@ng-icons/core'

@Component({
  selector: 'app-theme-toggler',
  imports: [NgIcon],
  templateUrl: './theme-toggler.html',
})
export class ThemeToggler {
    public layout = inject(LayoutStoreService)

  toggleTheme() {
    if (this.layout.theme === 'light') {
      this.layout.setTheme('dark')
    } else {
      this.layout.setTheme('light')
    }
  }
}
