import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CalendarModalOptions, CalendarModal } from 'ion2-calendar';

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  dates: Date[];

  public txtTitle: string;
  public txtLocation: string;
  public txtDescription: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
    ) {
  }

  openCalendar() {
    const options: CalendarModalOptions = {
      pickMode: 'multi',
      title: 'MULTI',
      defaultDates: this.dates
    };

    let myCalendar = this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();

    myCalendar.onDidDismiss((dates, type) => {
      if (type === 'done') {
        this.dates = [...dates.map(e => e.dateObj)]
      }
      console.log(dates);
      console.log(type);
    })
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad CreatePage');
  // }

  // goCalendar() {
  //   this.navCtrl.push("MultiPage");
  // }
  
}
