import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { FirestoreService } from '../../service/firestore.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent {
  DBStore:any[] = [];
  TODAYis:any;
  PerMonth:any;

  CICLOS_ONE  ?:number; //ciclos
  EJECT_SIX   ?:number; //ejecuciones

  codestatus:FormGroup = this.fb.group({
    DvLOGS:      [Validators.minLength(3)],
    GPUno_MEs:   [Validators.minLength(3)],
    GPTwo_Mes:   [Validators.minLength(3)],
    GPThree_Mes: [Validators.minLength(3)],
    GPFour_Mes:  [Validators.minLength(3)],
    GPFive_Mes:  [Validators.minLength(3)],
  });
  constructor(private fb     :FormBuilder,
              public codestat:FirestoreService) { 
  }          
              
    ngOnInit(){
      this.codestat.getDevStatus().subscribe(CodeData => {
          this.DBStore = [];
          CodeData.forEach(statusDev =>{
              this.DBStore.push({
                  id: statusDev.payload.doc.id,
                  data: statusDev.payload.doc.data()
              });
          });
      });
      
      const FECHA = new Date();
      let adfly = FECHA.toString();
      this.TODAYis = adfly.substring(4,25);
      this.PerMonth = FECHA.getMonth()+1;   
    }
 
  guardar(){
  //*********** METAS GRAPH_UNO Y GRAPH_ONE *************
  //const GESTION_INFO_ANNIO    :number   = 300;
    const CICLOS_PROG_ANNIO     :number   = 2000;  
  //*********** METAS GRAPH_SIX *************
    const EJECT_DEV_MES         :number   = 250;

    if(this.codestatus.dirty || this.codestatus.touched){
      /**   INPUTS   |    VALOR PLANO   **/    
      let DvLOGS      = this.codestatus.controls.DvLOGS.value;
      let GPUno_MEs   = this.codestatus.controls.GPUno_MEs.value;
      let GPTwo_Mes   = this.codestatus.controls.GPTwo_Mes.value;
      let GPThree_Mes = this.codestatus.controls.GPThree_Mes.value;
      let GPFour_Mes  = this.codestatus.controls.GPFour_Mes.value;
      let GPFive_Mes  = this.codestatus.controls.GPFive_Mes.value;
      
      // GET DATA FROM FIREBASE  --->     
      //   Cumplimiento de Gestión de Información - Anual 300  | GraphUno_ANIO   
      if(GPUno_MEs > 0){        
        let valid = GPUno_MEs.toFixed(2);
        let OutGUno = parseFloat(valid);  
      
        OutGUno += this.DBStore[9].data.mensual;  
        let UNO_PORCENT = OutGUno * 100 / 300; 

          this.codestat.graphUno(OutGUno, this.TODAYis, GPUno_MEs, UNO_PORCENT); 
          console.log("_THIS_Graph_Uno_OP >> ",OutGUno);  
      }
      //   Documentos Gestionados al Mes: Mensual 50 - Anual 300 | GraphTwo_ANIO    
      if(GPTwo_Mes > 0){
        let valid = GPTwo_Mes.toFixed(2);
        let OutTwo = parseFloat(valid);

        OutTwo += this.DBStore[8].data.mensual;
        let month_porcent = OutTwo * 100 / 300;
        let anual_porcent = OutTwo * 100 / 50;

          this.codestat.graphTwo(OutTwo, this.TODAYis, GPTwo_Mes,month_porcent,anual_porcent);
          console.log("_THIS_GraphTwo_OP >> ",OutTwo);
      } 
      //   Análisis generales realizados al mes - Mensual 40 / Anual 280 | GraphThree_ANIO    
      if(GPThree_Mes > 0){
        let valid = GPThree_Mes.toFixed(2);
        let OutThree = parseFloat(valid);

        let month_porcent = OutThree * 100 / 40;
        let anual_porcent = OutThree * 100 / 280;

        OutThree += this.DBStore[7].data.mensual;
          this.codestat.graphThree(OutThree, this.TODAYis, GPThree_Mes,month_porcent,anual_porcent);
          console.log("_THIS_GraphThree_OP >> ",OutThree);  
      } 
      //   Análisis de código generales realizados al mes - Mensual 80 / Anual 560 | GraphFour_ANIO    
      if(GPFour_Mes > 0){
        let valid = GPFour_Mes.toFixed(2);
        let OutFour = parseFloat(valid);

        let month_porcent = OutFour * 100 / 80;
        let anual_porcent = OutFour * 100 / 560;

        OutFour += this.DBStore[2].data.mensual;
          this.codestat.graphFour(OutFour, this.TODAYis, GPFour_Mes,month_porcent,anual_porcent);  
          console.log("_THIS_GraphFour_OP >> ",OutFour);     
      }
      //   Diseños de interfaz, estructura o multimedia al mes - Mensual 80 / Anual 560 | GraphFive_ANIO   
      if(GPFive_Mes > 0){
        let valid = GPFive_Mes.toFixed(2);
        let OutFive = parseFloat(valid);

        let month_porcent = OutFive * 100 / 80;
        let anual_porcent = OutFive * 100 / 560;
        
        OutFive += this.DBStore[1].data.mensual;
          this.codestat.graphFive(OutFive, this.TODAYis, GPFive_Mes,month_porcent,anual_porcent);  
          console.log("_THIS_GraphFive_OP >> ",OutFive);
      }
       //   Ciclos de programación realizados - Anual 200 | GraphOne_ANIO   
      if(DvLOGS > 0){
  
      //************************ CICLOS *******************************         
        this.CICLOS_ONE = DvLOGS / CICLOS_PROG_ANNIO;

        let VALID_CICLE = this.CICLOS_ONE.toFixed(2);
        this.CICLOS_ONE  = parseFloat(VALID_CICLE);
        
        // PORCENTAJES
          let Cicle_Porcent_Ann = (this.CICLOS_ONE * 100) / 200 ;
          

            let progress = DvLOGS + this.DBStore[4].data.lastinput; 
            this.codestat.graphOne(this.CICLOS_ONE, this.TODAYis, progress, DvLOGS, Cicle_Porcent_Ann );
      
      //************************ EJECUCIONES ******************************* 
        this.EJECT_SIX = DvLOGS / EJECT_DEV_MES;

        let VALID_EJECT = this.EJECT_SIX .toFixed(2);
        this.EJECT_SIX   = parseFloat(VALID_EJECT);
          
        // PORCENTAJES
          let eject_anual_porcent = (this.EJECT_SIX * 100 ) / 6000;
          let eject_month_porcent = (this.EJECT_SIX * 100 ) / 1000;

            this.codestat.graphSix(this.EJECT_SIX, this.TODAYis, DvLOGS,eject_month_porcent,eject_anual_porcent);   

      //************************ Tests ******************************* 
        let TsT = this.CICLOS_ONE * 5;
        
        let VALID_TST = TsT.toFixed(2);
        const OutSeven = parseFloat(VALID_TST);

        // PORCENTAJES
          let tests_anual_porcent = (OutSeven * 100) / 3000;
          let tests_month_porcent = (OutSeven * 100) / 500;

            this.codestat.graphSeven(OutSeven, this.TODAYis, DvLOGS,tests_month_porcent,tests_anual_porcent); 
      //************************ BUGS ******************************* 
        let BUGSperMth = this.EJECT_SIX * 2;

        let VALID_BUGPM = BUGSperMth.toFixed(2);
        const OutEight   = parseFloat(VALID_BUGPM);
        
          // PORCENTAJES
          let bugs_anual_porcent = (OutEight * 100) / 12000;
          let bugs_month_porcent = (OutEight * 100) / 2000;

            this.codestat.graphEight(OutEight, this.TODAYis, DvLOGS,bugs_month_porcent,bugs_anual_porcent); 
      //************************ IMPLEMENTACIONES ******************************* 
        let IMP = this.EJECT_SIX / 2;

        let VALID_IMP = IMP.toFixed(2);
        const OutNine  = parseFloat(VALID_IMP);

        // PORCENTAJES
          let implem_anual_porcent = (OutEight * 100) / 3000;
          let implem_month_porcent = (OutEight * 100) / 500;
        

            this.codestat.graphNine (OutNine,  this.TODAYis, DvLOGS,implem_month_porcent,implem_anual_porcent);  
      }   

      ///DesempeñoDevs
      this.codestatus.reset();
    }
      console.log(this.TODAYis," / ",this.PerMonth);
  }
}
///////////////////////////////////////////////////////////////////////////////
// - KEY => unica inserción de datos por campo al mes  
// - Clave ruta   TizaDevs64 / bas64
// - Ruta64: VGl6YURldnM2NA

// this.DBStore[4] | Ciclos      |  Graph_ONE
// this.DBStore[9] | Gestión     |  Graph____UNO
// this.DBStore[8] | Documentos  |  Graph____TWO
// this.DBStore[7] | Análisis    |  Graph____THREE
// this.DBStore[2] | código      |  Graph____FOUR
// this.DBStore[1] | Diseños     |  Graph____FIVE
// this.DBStore[6] | Ejecuciones |  Graph_SIX
// this.DBStore[5] | Tests       |  Graph_SEVEN
// this.DBStore[0] | Bugs        |  Graph_EIGHT
// this.DBStore[3] | Implementaciones   |  Graph_NINE

