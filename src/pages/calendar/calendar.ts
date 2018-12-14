import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CalendarComponentOptions } from 'ion2-calendar';

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  date: string[] = ['2018-01-01', '2018-01-02', '2018-01-05'];
  options: CalendarComponentOptions = {
    from: new Date(2000, 0, 1),
    pickMode: 'multi'
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

  onChange($event) {
    console.log($event);
  }

  

}
