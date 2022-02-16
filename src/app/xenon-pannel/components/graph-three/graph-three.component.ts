import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../service/firestore.service';
import { Population } from '../../../interface/graficas.interface';

@Component({
  selector: 'app-graph-three',
  templateUrl: './graph-three.component.html',
  styleUrls: ['./graph-three.component.css']
})
export class GraphThreeComponent implements OnInit {

  DBStore:any[] = []; 
  populationData: Population[]; 

  // Análisis generales realizados al mes - Anual 280
  types: string[] = ["area", "stackedarea", "fullstackedarea"];
  constructor(private storedb: FirestoreService){
    this.populationData =  [{
        fecha: "Julio",
        y1564: 63 
      },{ 
        fecha: "Agosto",
        y1564: 82 
      },{  
        fecha: "Septiembre",
        y1564: 93
      }, {
        fecha: "Octubre",
        y1564: 157
      }, {
        fecha: "Noviembre",
        y1564: 113
      }, {
        fecha: "Diciembre",
        y1564: 313
      }];  
  } 
  ngOnInit() {    
    this.storedb.MostrarStat().subscribe(rews => {
      this.DBStore = rews
      rews.forEach(res => {
        
      })
    });
  }
  tablettle :string = 'Análisis generales realizados al mes - Anual 280';
  cardtxt   :string = 'Estimado';


}
