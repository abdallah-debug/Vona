import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'

@Component({
  selector: 'app-links',
  imports: [UiCard],
  template: `
    <app-ui-card title="Links Variations" [isTogglable]="true">
      <div class="row g-4" card-body>
        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Colored Links</h5>

          <p>
            <a href="" (click)="$event.preventDefault()" class="link-primary">Primary link</a>
          </p>
          <p>
            <a href="" (click)="$event.preventDefault()" class="link-secondary"
              >Secondary link</a
            >
          </p>
          <p>
            <a href="" (click)="$event.preventDefault()" class="link-success">Success link</a>
          </p>
          <p>
            <a href="" (click)="$event.preventDefault()" class="link-danger">Danger link</a>
          </p>
          <p>
            <a href="" (click)="$event.preventDefault()" class="link-warning">Warning link</a>
          </p>
          <p><a href="" (click)="$event.preventDefault()" class="link-info">Info link</a></p>
          <p><a href="" (click)="$event.preventDefault()" class="link-light">Light link</a></p>
          <p><a href="" (click)="$event.preventDefault()" class="link-dark">Dark link</a></p>
          <p class="mb-0">
            <a href="" (click)="$event.preventDefault()" class="link-body-emphasis"
              >Emphasis link</a
            >
          </p>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Link Utilities</h5>

          <p>
            <a
              href="" (click)="$event.preventDefault()"
              class="link-primary text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >Primary link</a
            >
          </p>
          <p>
            <a
              href="" (click)="$event.preventDefault()"
              class="link-secondary text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >Secondary link</a
            >
          </p>
          <p>
            <a
              href="" (click)="$event.preventDefault()"
              class="link-success text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >Success link</a
            >
          </p>
          <p>
            <a
              href="" (click)="$event.preventDefault()"
              class="link-danger text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >Danger link</a
            >
          </p>
          <p>
            <a
              href="" (click)="$event.preventDefault()"
              class="link-warning text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >Warning link</a
            >
          </p>
          <p>
            <a
              href="" (click)="$event.preventDefault()"
              class="link-info text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >Info link</a
            >
          </p>
          <p>
            <a
              href="" (click)="$event.preventDefault()"
              class="link-light text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >Light link</a
            >
          </p>
          <p>
            <a
              href="" (click)="$event.preventDefault()"
              class="link-dark text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >Dark link</a
            >
          </p>
          <p>
            <a
              href="" (click)="$event.preventDefault()"
              class="link-body-emphasis text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
              >Emphasis link</a
            >
          </p>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Link Opacity</h5>

          <p>
            <a class="link-opacity-10" href="" (click)="$event.preventDefault()"
              >Link opacity 10</a
            >
          </p>
          <p>
            <a class="link-opacity-25" href="" (click)="$event.preventDefault()"
              >Link opacity 25</a
            >
          </p>
          <p>
            <a class="link-opacity-50" href="" (click)="$event.preventDefault()"
              >Link opacity 50</a
            >
          </p>
          <p>
            <a class="link-opacity-75" href="" (click)="$event.preventDefault()"
              >Link opacity 75</a
            >
          </p>
          <p class="mb-0">
            <a class="link-opacity-100" href="" (click)="$event.preventDefault()"
              >Link opacity 100</a
            >
          </p>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Link Hover Opacity</h5>

          <p>
            <a class="link-opacity-10-hover" href="" (click)="$event.preventDefault()"
              >Link hover opacity 10</a
            >
          </p>
          <p>
            <a class="link-opacity-25-hover" href="" (click)="$event.preventDefault()"
              >Link hover opacity 25</a
            >
          </p>
          <p>
            <a class="link-opacity-50-hover" href="" (click)="$event.preventDefault()"
              >Link hover opacity 50</a
            >
          </p>
          <p>
            <a class="link-opacity-75-hover" href="" (click)="$event.preventDefault()"
              >Link hover opacity 75</a
            >
          </p>
          <p class="mb-0">
            <a class="link-opacity-100-hover" href="" (click)="$event.preventDefault()"
              >Link hover opacity 100</a
            >
          </p>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Underline Color</h5>

          <p>
            <a
              href="" (click)="$event.preventDefault()"
              class="text-decoration-underline link-underline-primary"
              >Primary underline</a
            >
          </p>
          <p>
            <a
              href="" (click)="$event.preventDefault()"
              class="text-decoration-underline link-underline-secondary"
              >Secondary underline</a
            >
          </p>
          <p>
            <a
              href="" (click)="$event.preventDefault()"
              class="text-decoration-underline link-underline-success"
              >Success underline</a
            >
          </p>
          <p>
            <a
              href="" (click)="$event.preventDefault()"
              class="text-decoration-underline link-underline-danger"
              >Danger underline</a
            >
          </p>
          <p>
            <a
              href="" (click)="$event.preventDefault()"
              class="text-decoration-underline link-underline-warning"
              >Warning underline</a
            >
          </p>
          <p>
            <a
              href="" (click)="$event.preventDefault()"
              class="text-decoration-underline link-underline-info"
              >Info underline</a
            >
          </p>
          <p>
            <a
              href="" (click)="$event.preventDefault()"
              class="text-decoration-underline link-underline-light"
              >Light underline</a
            >
          </p>
          <p class="mb-0">
            <a
              href="" (click)="$event.preventDefault()"
              class="text-decoration-underline link-underline-dark"
              >Dark underline</a
            >
          </p>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Underline Opacity</h5>

          <p>
            <a
              class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-0"
              href="" (click)="$event.preventDefault()"
              >Underline opacity 0</a
            >
          </p>
          <p>
            <a
              class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-10"
              href="" (click)="$event.preventDefault()"
              >Underline opacity 10</a
            >
          </p>
          <p>
            <a
              class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-25"
              href="" (click)="$event.preventDefault()"
              >Underline opacity 25</a
            >
          </p>
          <p>
            <a
              class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-50"
              href="" (click)="$event.preventDefault()"
              >Underline opacity 50</a
            >
          </p>
          <p>
            <a
              class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-75"
              href="" (click)="$event.preventDefault()"
              >Underline opacity 75</a
            >
          </p>
          <p class="mb-0">
            <a
              class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-100"
              href="" (click)="$event.preventDefault()"
              >Underline opacity 100</a
            >
          </p>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Underline Offset</h5>

          <p><a href="" (click)="$event.preventDefault()">Default link</a></p>
          <p>
            <a
              class="text-decoration-underline link-offset-1"
              href="" (click)="$event.preventDefault()"
              >Offset 1 link</a
            >
          </p>
          <p>
            <a
              class="text-decoration-underline link-offset-2"
              href="" (click)="$event.preventDefault()"
              >Offset 2 link</a
            >
          </p>
          <p class="mb-0">
            <a
              class="text-decoration-underline link-offset-3"
              href="" (click)="$event.preventDefault()"
              >Offset 3 link</a
            >
          </p>
        </div>

        <div class="col-xl-6">
          <h5 class="mb-2 pb-1">Hover Variants</h5>

          <a
            class="link-offset-2 link-offset-3-hover text-decoration-underline link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
            href="" (click)="$event.preventDefault()"
          >
            Underline opacity 0
          </a>
        </div>
      </div>
    </app-ui-card>
  `,
  styles: ``,
})
export class Links {}
