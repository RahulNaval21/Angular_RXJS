import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservablesComponent } from './observables/observables.component';
import { AllComponent } from './observables/all/all.component';
import { FromEventComponent } from './observables/from-event/from-event.component';


const routes: Routes = [
 
  { path: 'header', component: HeaderComponent },
  { path: 'promise', component: PromiseComponent },
  { path: 'observables', component: ObservablesComponent, children:[
    { path: '', component: AllComponent },
    { path: 'from-event', component: FromEventComponent }
  ] },
  { path: '**', redirectTo:'promise'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
