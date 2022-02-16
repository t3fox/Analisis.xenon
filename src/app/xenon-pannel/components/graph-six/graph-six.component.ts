import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../service/firestore.service';
import { Population } from '../../../interface/graficas.interface';

@Component({
  selector: 'app-graph-six',
  templateUrl: './graph-six.component.html',
  styleUrls: ['./graph-six.component.css']
})
export class GraphSixComponent implements OnInit {

  DBStore:any[] = []; 
  populationData: Population[]; 
  
  // Ejecuciones de desarrollo realizadas al mes - Anual 6000
  types: string[] = ["area", "stackedarea", "fullstackedarea"];
  constructor(private storedb: FirestoreService){
    this.populationData =  [{
      fecha: "Julio",
        y1564: 1193
      },{ 
        fecha: "Agosto",
        y1564: 2208.06
      },{ 
        fecha: "Septiembre", 
        y1564: 2305
      }, {
        fecha: "Octubre",
        y1564: 	894
      }, { 
        fecha: "Noviembre",
        y1564: 1684
      }, {
        fecha: "Diciembre",
        y1564: 1617  
      }];   
  }

  ngOnInit() {    
    this.storedb.MostrarStat().subscribe(rews => {
      this.DBStore = rews
      rews.forEach(res => {
        
      })
    });
  } 

  tablettle :string = 'Ejecuciones de desarrollo realizadas al mes - Anual 6000';
  cardtxt   :string = 'Estimado';

}
