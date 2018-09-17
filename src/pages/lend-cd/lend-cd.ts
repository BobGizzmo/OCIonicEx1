import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {Cd} from "../../models/Cd";
import {BookAndCdService} from "../../services/bookAndCd.service";

/**
 * Generated class for the LendCdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage implements OnInit{

  cd: Cd;
  index: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              private bookAndCdService: BookAndCdService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.bookAndCdService.cd[this.index];
  }

  onLend(index: number) {
    this.bookAndCdService.getLend(index, true);
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

}
