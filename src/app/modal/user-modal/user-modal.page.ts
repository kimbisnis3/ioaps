import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.page.html',
  styleUrls: ['./user-modal.page.scss'],
})
export class UserModalPage implements OnInit {
  @Input("value") value;
  @Input() otherValue;
  constructor() { }

  ngOnInit() {
    //print 123
    console.log(this.value);
    //print 234
    console.log(this.otherValue);
  }

}
