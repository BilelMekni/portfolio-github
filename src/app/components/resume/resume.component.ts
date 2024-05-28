import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  cvs : any =[
    {title1:"Développement Full Stack JS" , year:"2022/2023" , title2:"Académie Crocco Coder ,Tunisie" },
    {title1:"Mastère Professionnel en Multimédiaet Web" , year:" 2014/2017" , title2:"nstitut Supérieur d’informatique Kef Tunisie"},
    {title1:"Licence Appliquée en Multimédia et Web" , year:"2010/2013" , title2:"nstitut Supérieur d’informatique Kef Tunisie"},
    {title1:"Baccalauréat En Science Informatique" , year:" 2009/2010" , title2:"Lycée Secondaire Ali Belhouane, Béja "}
    

  ]

  towcv : any=[
    {title3:"Technicien Informatique" , year1:"sep 2018/présent" , title4:"ouvelle Clinique Les Secours Tunis" , description:"nregistrement, Facturations des malades et Maintenance des équipements.Technologie : Application CliniSYS(WordPress , C#)"},
    {title3:"Téléopérateur spécialisé à l’émission des appels" , year1:" sep 2017/sep 2018" , title4:"Center d’appel : IHM Tunis " , description:"Communication entre les clients étrangère"},
    {title3:"Ingénieur développement informatique" , year1:" jan 2016/aout 2016" , title4:"Boite de développement informatique PRO DEV" , description:"Installation des logiciels : Android, éclipse , etc. Création des sites web et des applications : Technologies (HTML ,CSS,BOOTSTRAP , PHP)"},
    {title3:"Attache Commerciale en GSM ", year1:"sep 2013/sep 2015" , title4:"Orange BBCOM" , description:"Vente matériels électronique : Mobile , Tablettes , Accessoires informatique.Traitement d’information : activation des puces , clé 3G , FLYBOX , ADSL."},
    {title3:"Réparation et maintenance informatique" , year1:"jan 2013/avr 2013" , title2:"Lycée Secondaire Mongie SLIM" , description:"Technologies : Pascal , Word , PowerPoint ."},
    {title3:"Service d’ingénierie informatique" , yea1:"aout 2013" , title4:"Tunisie Telecom Beja" , description:"Promotion des nouveaux services de télécommunications et branchement desréseaux domestique."},
  ]

  constructor() { }

  ngOnInit() {
  }

}
