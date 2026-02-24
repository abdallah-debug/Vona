import { Directive, ElementRef, inject, Input, type OnInit } from '@angular/core'
import Choices, { Options as ChoiceOption } from 'choices.js'

export type SelectOptions = Partial<ChoiceOption>

@Directive({
  selector: '[choicesSelect]',
  standalone: true,
})
export class ChoiceSelectInputDirective implements OnInit {
  @Input() className?: string
  @Input() onChange?: (text: string) => void
  @Input() options?: SelectOptions

  private eleRef = inject(ElementRef)

  ngOnInit(): void {
    const choices = new Choices(this.eleRef.nativeElement, {
      ...this.options,
      placeholder: true,
      allowHTML: true,
      shouldSort: false,
    })

    choices.passedElement.element.addEventListener('change', (e: Event) => {
      if (!(e.target instanceof HTMLSelectElement)) return
      if (this.onChange) {
        this.onChange(e.target.value)
      }
    })
  }
}
