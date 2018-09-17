import { Component } from '@angular/core';
import {BookAndCdService} from "../../services/bookAndCd.service";
import {Book} from "../../models/Book";
import {MenuController, ModalController} from "ionic-angular";
import {LendBookPage} from "../lend-book/lend-book";

/**
 * Generated class for the BookListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  books: Book[];

  constructor(private bookAndCdService: BookAndCdService,
              private modalCtrl: ModalController,
              public menuCtrl: MenuController) {
    this.books = this.bookAndCdService.book;
  }

  onBookClick(index) {
    let modal = this.modalCtrl.create(LendBookPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.toggle();
  }

}
