import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pop3',
  templateUrl: './pop3.component.html',
  styleUrls: ['./pop3.component.css']
})
export class Pop3Component implements OnInit {

  constructor(public activeModal:NgbActiveModal ) { }

  ngOnInit(): void {
  }

}
