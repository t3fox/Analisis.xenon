import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/*  Graficas */
import { DxChartModule, DxSelectBoxModule } from 'devextreme-angular';
import { DxCircularGaugeModule } from 'devextreme-angular'

/*  PAGES */
import { DevstatusComponent } from './xenon-pannel/pages/devstatus/devstatus.component';
import { FormsComponent } from './reactive/forms/forms.component';

/* GLOBALES */
import { SidebarComponent } from './xenon-pannel/components/sidebar/sidebar.component';
import { TopmenuComponent } from './shared/topmenu/topmenu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { GraphUnoComponent } from './xenon-pannel/components/graph-uno/graph-uno.component';

/* GRAFICAS */
import { GraphOneComponent } from './xenon-pannel/components/graph-one/graph-one.component';
import { GraphTwoComponent } from './xenon-pannel/components/graph-two/graph-two.component';
import { GraphThreeComponent } from './xenon-pannel/components/graph-three/graph-three.component';
import { GraphFourComponent } from './xenon-pannel/components/graph-four/graph-four.component';
import { GraphFiveComponent } from './xenon-pannel/components/graph-five/graph-five.component';
import { GraphSixComponent } from './xenon-pannel/components/graph-six/graph-six.component';
import { GraphSevenComponent } from './xenon-pannel/components/graph-seven/graph-seven.component';
import { GraphEightComponent } from './xenon-pannel/components/graph-eight/graph-eight.component';
import { GraphNineComponent } from './xenon-pannel/components/graph-nine/graph-nine.component';

import { ContadoresComponent } from './xenon-pannel/components/contadores/contadores.component';
import { CountUpModule } from 'ngx-countup';
/* FORMS */
import { ReactiveModule } from './reactive/reactive.module';



const routes: Routes = [
  {
    path: '',
    component:DevstatusComponent
  },
  {
    path:'status',
    component: FormsComponent
  },
  {
    path:'***',
    redirectTo:'status'
  },

]
@NgModule({
  declarations: [
    SidebarComponent,
    TopmenuComponent, 
    FooterComponent,
    GraphUnoComponent,

    GraphOneComponent,
    GraphTwoComponent,
    GraphThreeComponent,
    GraphFourComponent,
    GraphFiveComponent,
    GraphSixComponent,
    GraphSevenComponent,
    GraphEightComponent,
    GraphNineComponent,
    
    ContadoresComponent,
    DevstatusComponent,
  ],
  imports: [
    CommonModule,
    ReactiveModule,
    DxCircularGaugeModule,
    
    DxChartModule, 
    DxSelectBoxModule,
    CountUpModule,

    RouterModule.forRoot(routes)
  ],
  exports: [
    //Cabeceras
    SidebarComponent,
    TopmenuComponent,
    FooterComponent,

    //Indicadores
    GraphUnoComponent,
    GraphOneComponent,
    GraphTwoComponent,
    GraphThreeComponent,
    GraphFourComponent,
    GraphFiveComponent,
    GraphSixComponent,
    GraphSevenComponent,
    GraphEightComponent,
    GraphNineComponent,

    //Graficos
    DxCircularGaugeModule,
    DxChartModule, 
    DxSelectBoxModule,
    CountUpModule,

    //Rutas principales
    FormsComponent,
    DevstatusComponent,
    RouterModule
  ],
  providers:[ ]
})
export class AppRoutingModule { }
