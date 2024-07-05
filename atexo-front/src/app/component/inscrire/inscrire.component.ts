import { Component } from '@angular/core';
import { InscritService } from '../../service/inscrit.service';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent {
  inscrit = {
    nom: '',
    prenom: '',
    dateNaissance: '',
    compteur: 1
  };

  criteres = {
    prenomLongueur: 3,
    prenomSuffixe: '-',
    prenomOrdre: 1,
    nomLongueur: 4,
    nomSuffixe: '_',
    nomOrdre: 2,
    datePrefixe: 'N',
    dateOrdre: 3,
    compteurInitial: 10,
    compteurPrefixe: 'C',
    compteurLongueur: 5,
    compteurOrdre: 4
  };

  constructor(private inscritService: InscritService) { }

  onSubmit() {
    this.inscritService.creerInscrit(this.inscrit, this.criteres).subscribe(numero => {
      console.log('Numéro généré:', numero);
    });
  }
}