import {
    afterNextRender,
    AfterViewInit,
    Component,
    type ElementRef,
    HostListener,
    Input,
    OnDestroy,
    ViewChild,
} from '@angular/core'
import JsVectorMap from 'jsvectormap'
declare global {
    interface Window {
        jsVectorMap?: any
    }
}

@Component({
    selector: 'app-vector-map',
    standalone: true,
    template:
        '<div #mapContainer [style.width]="width" [style.height]="height"></div>',
})
export class VectorMap implements  OnDestroy {
    @Input() width: string = ''
    @Input() height: string = ''
    @Input() options: Record<string, unknown> = {}
    @ViewChild('mapContainer', { static: true }) mapContainerRef!: ElementRef

    mapInstance!: any

    constructor() {
        afterNextRender(() => {
            const container = this.mapContainerRef.nativeElement

            if (container) {
                this.mapInstance = new JsVectorMap({
                    selector: container,
                    ...this.options,
                })
            } else {
                console.warn('JsVectorMap: mapContainerRef was not available.')
            }
        })
    }

    @HostListener('window:resize')
    onWindowResize(): void {
      if (this.mapInstance) {
      this.mapInstance.updateSize()
    }
    }

    ngOnDestroy(): void {
        if (this.mapInstance) {
      this.mapInstance.destroy()
    }
    }
}
