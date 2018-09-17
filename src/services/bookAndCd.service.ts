import {Book} from "../models/Book";
import {Cd} from "../models/Cd";

export class BookAndCdService {

  book: Book[] = [
    {
      title: 'J’ai hérité de ton passé',
      author: 'Cédric Charles Antoine',
      description: 'En avril 1983, un mois après l’enterrement de ma pauvre mère,' +
        ' alors que je nettoyais la maison vide de mon enfance, une modeste ferme normande bientôt vendue,' +
        ' j’ai reçu un étrange colis. Un manuscrit anonyme, tapé à la machine, relatait l’histoire détaillée du voisin,' +
        ' un patriarche autocrate, propriétaire du grand manoir, que j’avais très bien connu gamine.\n',
      cover: 'https://images-eu.ssl-images-amazon.com/images/I/51wSrKFV50L.jpg',
      owner: 'l\'auteur lui même',
      isLend: true
    },
    {
      title: 'Trente secondes avant de mourir',
      author: 'Sébastien Theveny',
      description: 'New York, 2018.' +
        ' Assis dans une salle d’embarquement de l’aéroport de La Guardia, Tom Brady observe les autres passagers,' +
        ' autant d’anonymes ignorant tout de son terrible Thanksgiving 2015. ',
      cover: 'https://images-eu.ssl-images-amazon.com/images/I/51A1gAuEvXL.jpg',
      owner: 'Jean Jacques',
      isLend: true
    }
  ];

  cd: Cd[] = [
    {
      title: '1000HP',
      author: 'Godsmack',
      created_at: '2014',
      cover: 'https://images-na.ssl-images-amazon.com/images/I/5124mQ5rqeL._SY355_.jpg',
      owner: 'Disturbed',
      isLend: true
    },
    {
      title: 'Sickness',
      author: 'Disturbed',
      created_at: '2010',
      cover: 'https://images-na.ssl-images-amazon.com/images/I/81tpw3Tx7-L._SL1426_.jpg',
      owner: 'Cordsmack',
      isLend: true
    }
  ];

  getLend(index: number, cd: boolean = false) {
    if(cd)
      this.cd[index].isLend = !this.cd[index].isLend;
    else
      this.book[index].isLend = !this.book[index].isLend;
  }

}
