import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/service/firestore.service';

@Component({
  selector: 'app-contadores',
  templateUrl: './contadores.component.html',
  styleUrls: ['./contadores.component.css']
})
export class ContadoresComponent implements OnInit {

  constructor(private storedb: FirestoreService){}

  DBStore:any[] = []; 
  
  // populationData: Population[];
  // types: string[] = ["area", "stackedarea", "fullstackedarea"];
  ngOnInit() {    
    this.storedb.MostrarStat().subscribe(rews => {
      this.DBStore = rews
      rews.forEach(res => {
        
      })
  });
  }

  
 

}
