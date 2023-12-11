import { Component, Input } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter-btn',
  standalone: true,
  imports: [],
  templateUrl: './counter-btn.component.html',
  styleUrl: './counter-btn.component.css',
})
export class CounterBtnComponent {
  @Input() source!: string;

  constructor(public counter: CounterService) {}

  handleClick() {
    this.counter.increase(this.source);
  }
}
