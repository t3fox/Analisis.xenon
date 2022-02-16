import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../service/firestore.service';
import { Population } from '../../../interface/graficas.interface';

@Component({
  selector: 'app-graph-four',
  templateUrl: './graph-four.component.html',
  styleUrls: ['./graph-four.component.css']
}) 
export class GraphFourComponent implements OnInit {
  
  DBStore:any[] = []; 
  populationData: Population[]; 
  
  // Análisis de código generales realizados al mes - Anual 560
  types: string[] = ["area", "stackedarea", "fullstackedarea"];
  constructor(private storedb: FirestoreService){
    this.populationData =  [{
      fecha: "Julio",
        y1564: 156
      },{   
        fecha: "Agosto",
        y1564: 192
      },{
        fecha: "Septiembre",
        y1564: 231
      }, {  
        fecha: "Octubre", 
        y1564: 286
      }, {
        fecha: "Noviembre",
        y1564: 295
      }, {
        fecha: "Diciembre",
        y1564: 372
      }];  
  }


  ngOnInit() {    
    this.storedb.MostrarStat().subscribe(rews => {
      this.DBStore = rews
      rews.forEach(res => {
        
      })
    });
  } 

  tablettle :string = 'Análisis de código generales realizados al mes - Anual 560';
  cardtxt   :string = 'Estimado';

}
