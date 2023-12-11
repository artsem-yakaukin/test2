import { Component } from '@angular/core';
import { CounterBtnComponent } from '../counter-btn/counter-btn.component';
import { NgClass, NgStyle } from '@angular/common';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CounterBtnComponent, NgStyle, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(public counter: CounterService) {}
}
