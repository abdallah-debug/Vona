import { Component, inject, OnInit, type OnDestroy } from '@angular/core'
import {
    NgbDropdown,
    NgbDropdownMenu,
    NgbDropdownToggle,
} from '@ng-bootstrap/ng-bootstrap'
import { LanguageOptionType } from '@/app/types/layout'
import { LanguageService } from '@core/services/language.service'
import { Subject, takeUntil } from 'rxjs'

@Component({
    selector: 'app-language-dropdown',
    imports: [NgbDropdown, NgbDropdownMenu, NgbDropdownToggle],
    templateUrl: './language-dropdown.html',
})
export class LanguageDropdown implements OnInit, OnDestroy {
    languages: LanguageOptionType[] = []
    selectedLang: LanguageOptionType = this.languages[0]
    public langService = inject(LanguageService)

    private destroy$ = new Subject<void>()

    ngOnInit(): void {
        this.languages = this.langService.getLanguages()
        this.langService.currentLang$.pipe(
            takeUntil(this.destroy$)
        ).subscribe(
            (lang) => (this.selectedLang = lang)
        )
        this.langService.initLanguage()
    }

    changeLanguage(code: string) {
        this.langService.setLanguage(code)
    }

    ngOnDestroy(): void {
        this.destroy$.next()
        this.destroy$.complete()
    }
}
