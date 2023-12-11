import { Component } from '@angular/core';
import { CounterBtnComponent } from '../counter-btn/counter-btn.component';
import { CounterService } from '../services/counter.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CounterBtnComponent, NgClass],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  constructor(public counter: CounterService) {}
}
