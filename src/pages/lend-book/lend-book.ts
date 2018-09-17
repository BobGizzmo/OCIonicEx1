import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {Book} from "../../models/Book";
import {BookAndCdService} from "../../services/bookAndCd.service";

/**
 * Generated class for the LendBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit{

  book: Book;
  index: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private bookAndCdService: BookAndCdService,
              private viewCtrl: ViewController) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.bookAndCdService.book[this.index];
  }

  onLend(book: boolean, index: number) {
    this.bookAndCdService.getLend(index);
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

}
