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
    prenomCritere: { longueur: 3, suffixe: '-', ordre: 1, prefixe: null },
    nomCritere: { longueur: 4, suffixe: '_', ordre: 2, prefixe: null },
    dateCritere: { longueur: 0, suffixe: '', ordre: 3, prefixe: 'N' },
    compteurCritere: { longueur: 5, suffixe: '', ordre: 4, prefixe: 'C' }
  };

  constructor(private inscritService: InscritService) { }

  onSubmit() {
    console.log('inscrit:', this.inscrit);
    console.log('criteres:', this.criteres);
    this.inscritService.creerInscrit(this.inscrit, this.criteres).subscribe(numero => {
      console.log('Numéro généré:', numero);
    });
  }
}