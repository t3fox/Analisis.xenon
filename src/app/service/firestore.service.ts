import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { graficas } from '../interface/graficas.interface';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {

  itemsCollection: AngularFirestoreCollection<graficas>; 
  items: Observable<graficas[]>;

  constructor( public db:AngularFirestore ) {

    this.itemsCollection = this.db.collection<graficas>('devstatus');
    this.items = this.itemsCollection.valueChanges();
  }

  getDevStatus(){
      return this.db.collection('devstatus').snapshotChanges();
  }
  MostrarStat(){
    return this.items;
  }
  DataGraph(){
     return this.db.collection('devstatus').valueChanges();
     
  }

  graphUno(mensual?:number,today?:string,month_porcent?:number,lastinput?:number){
    if(mensual){ 

      this.db.collection('devstatus').doc('graph-uno').update({
        mensual  :    mensual,
        finalup  :    today,
        month_porcent: month_porcent,
        anual_porcent:    lastinput  //valor plano
     });
    } 
  } 

  graphOne( mensual?:number, 
            todayis?:string, 
            anual?:any, 
            last?:any, 
            month_porcent?:number ){
    if(mensual){
      this.db.collection('devstatus').doc('graph-one').update({
        mensual       :mensual, // Operation
        finalup       :todayis, // Date of
        anual_porcent :anual,   // Year progress
        
        lastinput     :last,    // Plane value
        nextmonth     :last,    // month + month
        month_porcent : month_porcent
     });
    } 
  } 

  graphTwo(mensual?:number,today?:string,lastinput?:number,month_porcent?:number,anual_porcent?:number){
    if(mensual){

      this.db.collection('devstatus').doc('graph-two').update({
        mensual :mensual,
        finalup :today,
        lastinput:lastinput,  //valor plano
        
        month_porcent: month_porcent,
        anual_porcent: anual_porcent
     });
    } 
  }

  graphThree(mensual?:number,today?:string,lastinput?:number,month_porcent?:number,anual_porcent?:number){
    if(mensual){

      this.db.collection('devstatus').doc('graph-three').update({
        mensual :mensual,
        finalup :today,
        lastinput:lastinput,  //valor plano
        
        month_porcent: month_porcent,
        anual_porcent: anual_porcent
     });
    } 
  }

  graphFour(mensual?:number,today?:string,lastinput?:number,month_porcent?:number,anual_porcent?:number){
    if(mensual){

      this.db.collection('devstatus').doc('graph-four').update({
        mensual :mensual,
        finalup :today,
        lastinput:lastinput,  //valor plano
        
        month_porcent: month_porcent,
        anual_porcent: anual_porcent
     });
    } 
  }

  graphFive(mensual?:number,today?:string,lastinput?:number,month_porcent?:number,anual_porcent?:number){
    if(mensual){

      this.db.collection('devstatus').doc('graph-five').update({
       mensual :mensual,
       finalup :today,
       lastinput:lastinput,  //valor plano

       month_porcent: month_porcent,
        anual_porcent: anual_porcent
     });
    } 
  }

  graphSix(mensual?:number,today?:string,lastinput?:number,month_porcent?:number,anual_porcent?:number){
    if(mensual){

      this.db.collection('devstatus').doc('graph-six').update({
       finalup  :today,
       mensual  :mensual,
       lastinput:lastinput,  //valor plano

       month_porcent: month_porcent,
        anual_porcent: anual_porcent
     });
    } 
  }

  graphSeven(mensual?:number,today?:string,lastinput?:number,month_porcent?:number,anual_porcent?:number){
    if(mensual){

      this.db.collection('devstatus').doc('graph-seven').update({
       finalup  :today,
       mensual  :mensual,
       lastinput:lastinput,  //valor plano

       month_porcent: month_porcent,
        anual_porcent: anual_porcent
     });

    } 
  }

  graphEight(mensual?:number,today?:string,lastinput?:number,month_porcent?:number,anual_porcent?:number){
    if(mensual){

      this.db.collection('devstatus').doc('graph-eight').update({
       finalup  :today,
       mensual  :mensual,
       lastinput:lastinput,  //valor plano

       month_porcent: month_porcent,
       anual_porcent: anual_porcent
     });
    } 
  }

  graphNine(mensual?:number,today?:string,lastinput?:number,month_porcent?:number,anual_porcent?:number){
    if(mensual){

      this.db.collection('devstatus').doc('graph-nine').update({
       finalup  :today,
       mensual  :mensual,
       lastinput:lastinput,  //valor plano

       month_porcent: month_porcent,
       anual_porcent: anual_porcent
     });
    } 
  }

}
 