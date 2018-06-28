import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const fadeInOutAnimation =
  trigger('fadeInOut', [
    transition(':enter', [
      style({
        opacity: 0,
        background: '#000'
      }),
      animate('.5s', style({
        opacity: 1,
        background: '#eee'
      }))
    ]),
    // transition(':leave', animate('300ms ease-in'))
  ]);
