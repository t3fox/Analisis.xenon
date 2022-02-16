import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../service/firestore.service';
import { Population } from '../../../interface/graficas.interface';

@Component({
  selector: 'app-graph-eight',
  templateUrl: './graph-eight.component.html',
  styleUrls: ['./graph-eight.component.css']
})
export class GraphEightComponent implements OnInit {

  DBStore:any[] = []; 
  populationData: Population[]; 
  
  // Correcciones de Bugs al mes - Anual 12,000
  types: string[] = ["area", "stackedarea", "fullstackedarea"];
  constructor(private storedb: FirestoreService){
    this.populationData =  [{
      fecha: "Julio", 
        y1564: 2386
      },{ 
        fecha: "Agosto", 
        y1564: 4416.11
      },{
        fecha: "Septiembre",
        y1564: 4610 
      }, {
        fecha: "Octubre",
        y1564: 	1787
      }, {
        fecha: "Noviembre",
        y1564: 	3369
      }, {
        fecha: "Diciembre",
        y1564: 3234
      }];  
  } 

  ngOnInit() {    
    this.storedb.MostrarStat().subscribe(rews => {
      this.DBStore = rews
      rews.forEach(res => {
        
      })
    });
  } 

  tablettle :string = 'Correcciones de Bugs al mes - Anual 12,000';
  cardtxt   :string = 'Estimado';
 
}
