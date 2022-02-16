import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../service/firestore.service';
import { Population } from '../../../interface/graficas.interface';

@Component({
  selector: 'app-graph-two',
  templateUrl: './graph-two.component.html',
  styleUrls: ['./graph-two.component.css']
})
export class GraphTwoComponent implements OnInit { 

  DBStore:any[] = []; 
  populationData: Population[]; 

  // Documentos Gestionados al Mes - Anual 300
  types: string[] = ["area", "stackedarea", "fullstackedarea"];
  constructor(private storedb: FirestoreService){
    this.populationData =  [{
      fecha: "Julio",
      y1564: 1484
    },{ 
      fecha: "Agosto", 
      y1564: 2326
    },{
      fecha: "Septiembre",
      y1564: 1813
    }, {
      fecha: "Octubre",
      y1564: 2013
    }, {
      fecha: "Noviembre",
      y1564: 1694
    }, {
      fecha: "Diciembre",
      y1564: 1657
    }];
    
  }  

  ngOnInit() {    
    this.storedb.MostrarStat().subscribe(rews => {
      this.DBStore = rews
      rews.forEach(res => {
        
      })
    });
  } 

  tablettle :string = 'Documentos Gestionados al Mes - Anual 300';
  cardtxt   :string = 'Estimado';

}
