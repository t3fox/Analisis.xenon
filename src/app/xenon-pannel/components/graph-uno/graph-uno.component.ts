import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../service/firestore.service';
import { Population } from '../../../interface/graficas.interface';

@Component({
  selector: 'app-graph-uno',
  templateUrl: './graph-uno.component.html',
  styleUrls: ['./graph-uno.component.css']
})

export class GraphUnoComponent implements OnInit {
  
  DBStore:any[] = []; 
  populationData: Population[]; 
  
  // Cumplimiento de Gestión de Información  -  Anual 300
  types: string[] = ["area", "stackedarea", "fullstackedarea"];
  constructor( public storedb:FirestoreService ){ 
    this.populationData =  [{
      fecha: "Julio",
        y1564: 4237
      },{  
        fecha: "Agosto",
        y1564: 4822
      },{  
        fecha: "Septiembre",
        y1564: 4593
      }, {
        fecha: "Octubre",
        y1564: 3613
      }, {
        fecha: "Noviembre",
        y1564: 2903
      }, {
        fecha: "Diciembre",
        y1564: 3726
      }];  
      
    }

  ngOnInit() {    
    this.storedb.MostrarStat().subscribe(rews => {
        this.DBStore = rews
        rews.forEach(res => {
          
        })
    });
     
  }
        

  Mensual   :any = this.DBStore[9];
  tablettle :string = 'Cumplimiento de Gestión de Información  -  Anual 300';
  cardtxt   :string = 'Estimado';

}
 