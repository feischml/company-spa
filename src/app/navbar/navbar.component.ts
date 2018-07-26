import { Component, OnInit } from '@angular/core';
import { SmoothScrollToDirective } from 'ng2-smooth-scroll';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ SmoothScrollToDirective ]
})
export class NavbarComponent implements OnInit {

  constructor(private scroll: SmoothScrollToDirective = new SmoothScrollToDirective() ) { }

  ngOnInit() {
  }

  scrollTo(divId: String){
    this.scroll.scrollTo = divId;
    this.scroll.duration = 1500;
    this.scroll.offset = 80;
    // trigger the scroll
    this.scroll.onClick();
  }

}
