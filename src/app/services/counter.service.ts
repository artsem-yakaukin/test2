import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private _counter$: BehaviorSubject<{ [p: string]: number }> =
    new BehaviorSubject<{ [p: string]: number }>({
      Header: 1,
      SideNav: 0,
      Content: 9,
      Footer: 10,
    });
  public readonly counter$: Observable<{ [p: string]: number }> =
    this._counter$.asObservable();
  get counter(): { [p: string]: number } {
    return this._counter$.getValue();
  }

  constructor() {}

  increase(source: string) {
    this.counter[source]++;
    this._counter$.next(this.counter);
  }
}
