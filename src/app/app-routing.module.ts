
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {path: 'app', redirectTo: 'app', pathMatch: 'full'},
  {path: 'app', loadChildren: ()=>import('./app.module').then(m=>m.AppModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
