// import {
//   Input,
//   Directive,
//   HostListener
// } from '@angular/core';

// import * as htmlElementStringify from 'html-element-stringify';

// @Directive({
//   selector: 'button[ripple], a[ripple]',
//   host: {
//     '[class.ripple]': 'true',
//     '[style.position]': '"relative"',
//     '[style.outline]': '"none"',
//   }
// })
// export class RippleDirective {
//   isRippling = false;
//   @Input('ripple') color: string = '#fff';
//   @HostListener('click', ['$event']) onClick(evt: MouseEvent) {
//     evt.preventDefault();

//     if (this.isRippling) {
//       return;
//     }

//     this.isRippling = true;

//     const button: any = evt.target;
//     const div = document.createElement('div');
//     const xPos = evt.pageX - button.offsetLeft;
//     const yPos = evt.pageY - button.offsetTop;

//     div.classList.add('ripple-effect');
//     div.style.height = button.clientHeight;
//     div.style.width = button.clientHeight;
//     div.style.top = (yPos - (button.clientHeight / 2)) + 'px';
//     div.style.left = (xPos - (button.clientWidth / 2)) + 'px';
//     div.style.background = this.color;

//     button.insertAdjacentHTML('beforeend', htmlElementStringify(div));

//     window.setTimeout(() => {
//       button.removeChild(button.querySelector('.ripple-effect'));
//       this.isRippling = false;
//     }, 1000);
//   }

// }
