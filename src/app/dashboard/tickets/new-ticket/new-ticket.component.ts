import { AfterViewInit, Component, ElementRef, OnInit, output, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit, OnInit{
  // Annotation way (old)
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  add = output<{title: string, request: string}>();

  onSubmit({ title, request }: { title: string; request: string }) {
    console.log(title, request);
    this.add.emit({ title, request });
    this.form().nativeElement.reset();
  }

  ngOnInit(){
    console.log('Form element in ngOnInit:', this.form().nativeElement);
  }

  ngAfterViewInit() {
    console.log('Form element in ngAfterViewInit :', this.form().nativeElement);
  }
}
