import { Component } from '@angular/core';
import { CounterBtnComponent } from '../counter-btn/counter-btn.component';
import { CounterService } from '../services/counter.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CounterBtnComponent, NgClass],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  constructor(public counter: CounterService) {}
}
