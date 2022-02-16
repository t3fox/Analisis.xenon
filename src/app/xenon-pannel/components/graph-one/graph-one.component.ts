import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../service/firestore.service';
import { Population } from '../../../interface/graficas.interface';

@Component({
  selector: 'app-graph-one',
  templateUrl: './graph-one.component.html',
  styleUrls: ['./graph-one.component.css']
})
export class GraphOneComponent implements OnInit   {
  
  DBStore:any[] = [];  
  populationData: Population[];
  
  // Ciclos de programación realizados - Anual 2000
  types: string[] = ["area", "stackedarea", "fullstackedarea"];
  constructor(private storedb: FirestoreService){
    this.populationData =  [{
      fecha: "Julio",
        y1564: 149
      },{ 
        fecha: "Agosto", 
        y1564: 276.01
      },{
        fecha: "Septiembre",
        y1564: 288
      }, {
        fecha: "Octubre",
        y1564: 358 
      }, {
        fecha: "Noviembre", 
        y1564: 215
      }, {
        fecha: "Diciembre",
        y1564:  202
      }];  
      
  }

  
  ngOnInit() {    
    this.storedb.MostrarStat().subscribe(rews => {
      this.DBStore = rews
      rews.forEach(res => {
        
      })
  });
  }

  
  tablettle :string = 'Ciclos de programación realizados - Anual 2000';
  cardtxt   :string = 'Estimado';  

}
