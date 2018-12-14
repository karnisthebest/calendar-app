import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  username:string;
  password:string;
  repassword:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  Register(){
    if(this.username.length==0 || this.password.length==0 || this.repassword.length==0 ){
      alert("Please Fill All Fields");
    }
    else if (this.username.length<8){
      alert("Please enter at least 8 characters on Username");
    }
    else if (this.password.length<8){
      alert("Please enter at least 8 characters on Password");
    }
    else if(this.username == this.password){
      alert("You can not use SAME Username and Password");
    }
    else if(this.password!= this.repassword){
      alert("Password ans Re-password are DIFFERENT!");
    }
    else{
      alert("Register is DONE!!")
      console.log("Register-Username : " + this.username);
      console.log("Register-Password : " + this.password);
      this.navCtrl.push(LoginPage);
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
