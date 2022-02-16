import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../service/firestore.service';
import { Population } from '../../../interface/graficas.interface';

@Component({
  selector: 'app-graph-seven',
  templateUrl: './graph-seven.component.html',
  styleUrls: ['./graph-seven.component.css']
})
export class GraphSevenComponent implements OnInit {

  DBStore:any[] = []; 
  populationData: Population[]; 
  
  // Tests realizados al mes - Anual 3000
  types: string[] = ["area", "stackedarea", "fullstackedarea"];
  constructor(private storedb: FirestoreService){
    this.populationData =  [{
      fecha: "Julio",
        y1564: 745  
      },{ 
        fecha: "Agosto", 
        y1564: 1380.04
      },{
        fecha: "Septiembre",
        y1564: 1441
      }, {
        fecha: "Octubre",
        y1564: 559
      }, {
        fecha: "Noviembre",
        y1564: 1053
      }, {
        fecha: "Diciembre",
        y1564: 1011
      }];  
  }

  ngOnInit() {    
    this.storedb.MostrarStat().subscribe(rews => {
      this.DBStore = rews
      rews.forEach(res => {
        
      })
    }); 
  }

  tablettle :string = 'Tests realizados al mes - Anual 3000';
  cardtxt   :string = 'Estimado';
 
}
