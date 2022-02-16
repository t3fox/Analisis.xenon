import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../service/firestore.service';
import { Population } from '../../../interface/graficas.interface';

@Component({
  selector: 'app-graph-five',
  templateUrl: './graph-five.component.html',
  styleUrls: ['./graph-five.component.css']
})
export class GraphFiveComponent implements OnInit {

  DBStore:any[] = []; 
  populationData: Population[];  
  
  // Diseños de interfaz, estructura o multimedia al mes - Mensual 80	/ Anual 560
  types: string[] = ["area", "stackedarea", "fullstackedarea"];
  constructor(private storedb: FirestoreService){  
    this.populationData =  [{
      fecha: "Julio",
        y1564: 112
      },{   
        fecha: "Agosto",
        y1564: 102
      },{
        fecha: "Septiembre",
        y1564:  146
      }, {
        fecha: "Octubre",
        y1564:  143
      }, {
        fecha: "Noviembre",
        y1564: 131
      }, {
        fecha: "Diciembre",
        y1564: 104
      }];  
  }
  
  ngOnInit() {    
    this.storedb.MostrarStat().subscribe(rews => {
      this.DBStore = rews
      rews.forEach(res => {
        
      })
    });
  }

  tablettle :string = 'Diseños de interfaz, estructura o multimedia al mes - Mensual 80	/ Anual 560';
  cardtxt   :string = 'Vista Mensual 80	- Anual 560';

}
