import { Component, inject, OnInit, OnDestroy } from '@angular/core'
import {
    ActivatedRoute,
    NavigationEnd,
    Router,
    RouterOutlet,
} from '@angular/router'
import * as tablerIcons from '@ng-icons/tabler-icons'
import * as tablerIconsFill from '@ng-icons/tabler-icons/fill'
import * as lucideIcons from '@ng-icons/lucide'
import { provideIcons } from '@ng-icons/core'
import { Title } from '@angular/platform-browser'
import { filter, map, mergeMap, Subscription } from 'rxjs'

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.scss',
    viewProviders: [
        provideIcons({ ...tablerIcons, ...tablerIconsFill, ...lucideIcons }),
    ],
})
export class App implements OnInit ,OnDestroy{
    private titleService = inject(Title)
    private router = inject(Router)
    private activatedRoute = inject(ActivatedRoute)
    private routerEventsSub?: Subscription

    ngOnInit(): void {
        this.routerEventsSub = this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                map(() => {
                    let route = this.activatedRoute
                    while (route.firstChild) {
                        route = route.firstChild
                    }
                    return route
                }),
                mergeMap((route) => route.data)
            )
            .subscribe((data) => {
                if (data['title']) {
                    this.titleService.setTitle(
                        data['title'] +
                        ' | Vona - Angular Responsive Bootstrap 5 Admin Dashboard'
                    )
                }
            })
    }

    ngOnDestroy(): void {
        this.routerEventsSub?.unsubscribe()
    }
}
