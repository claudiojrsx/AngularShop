import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}
  ngAfterViewInit() {
    //optional, just in case you want other background color than default
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#eff3f4';
  }
}
