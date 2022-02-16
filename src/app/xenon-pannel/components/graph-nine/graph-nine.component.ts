import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../service/firestore.service';
import { Population } from '../../../interface/graficas.interface';

@Component({
  selector: 'app-graph-nine',
  templateUrl: './graph-nine.component.html',
  styleUrls: ['./graph-nine.component.css']
})
export class GraphNineComponent implements OnInit {

  DBStore:any[] = []; 
  populationData: Population[]; 
  
  // Implementaciones realizadas al mes -  Anual 3,000
  types: string[] = ["area", "stackedarea", "fullstackedarea"];
  constructor(private storedb: FirestoreService){
    this.populationData =  [{
      fecha: "Julio", 
        y1564: 596 
      },{ 
        fecha: "Agosto",
        y1564: 1104.03
      },{
        fecha: "Septiembre",
        y1564: 	1153 
      }, {
        fecha: "Octubre",
        y1564: 447
      }, {
        fecha: "Noviembre",
        y1564: 842
      }, {
        fecha: "Diciembre",
        y1564: 809
      }];  
  }

  ngOnInit() {     
    this.storedb.MostrarStat().subscribe(rews => {
      this.DBStore = rews
      rews.forEach(res => {
        
      })
    });
  } 

  tablettle :string = 'Implementaciones realizadas al mes -  Anual 3,000';
  cardtxt   :string = 'Estimado';

}
