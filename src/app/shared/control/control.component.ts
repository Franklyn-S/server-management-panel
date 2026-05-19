import {
  AfterContentInit,
  Component,
  contentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit{
  label = input.required<string>();
  for = input.required<string>();
  private el = inject(ElementRef);

  // Old way (annotation)
  // @ContentChild('input, select, textarea') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  // >;

  private control = contentChild.required<
    ElementRef<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  >('input, select, textarea');

  constructor() {
    // afterRender(() => {
    //     console.log('ControlComponent after rendered!');
    // });
    // afterNextRender(() => {
    //     console.log('ControlComponent after next rendered!');
    // });
  }

  ngAfterContentInit(): void {

  }

  onClick() {
    console.log(`Control for ${this.for()} clicked!`);
    console.log('Element:', this.el);
    console.log('Control:', this.control());
  }
}
