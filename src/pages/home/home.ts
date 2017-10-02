import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddEventPage } from '../add-event/add-event';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  openHomePage() {
    this.navCtrl.push(AddEventPage);
  }

}
