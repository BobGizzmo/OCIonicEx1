import {Component, OnInit} from '@angular/core';
import {BookAndCdService} from "../../services/bookAndCd.service";
import {Cd} from "../../models/Cd";
import {LendBookPage} from "../lend-book/lend-book";
import {MenuController, ModalController} from "ionic-angular";
import {LendCdPage} from "../lend-cd/lend-cd";

/**
 * Generated class for the CdListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage implements OnInit{

  cds: Cd[];

  constructor(private bookAndCdService: BookAndCdService,
              private modalCtrl: ModalController,
              public menuCtrl: MenuController) {
  }

  ngOnInit() {
    this.cds = this.bookAndCdService.cd;
  }

  onCdClick(index) {
    let modal = this.modalCtrl.create(LendCdPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.toggle();
  }

}
