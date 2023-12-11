import { Component } from '@angular/core';
import { CounterBtnComponent } from '../counter-btn/counter-btn.component';
import { CounterService } from '../services/counter.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CounterBtnComponent, NgClass],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
  constructor(public counter: CounterService) {}
}
