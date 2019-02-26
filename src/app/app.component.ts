import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input nz-input placeholder="Basic usage" [(ngModel)]="value">
    <br>
    <br>
    <input nz-input placeholder="Basic usage" [(ngModel)]="value" [disabled]="true">
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'appName';
}


export class NzDemoInputBasicComponent {
  value: string;
}