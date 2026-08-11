import { Component } from '@angular/core';

@Component({
    selector: 'app-default-footer',
    templateUrl: './default-footer.component.html',
    styleUrls: ['./default-footer.component.scss'],
    standalone: true,
})
export class DefaultFooterComponent {
  currentYear: number = new Date().getFullYear();

  constructor() {}
}
