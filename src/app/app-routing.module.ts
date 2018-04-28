import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'/*, canLoad: [AuthGuard]*/ },
  { path: 'cinema', loadChildren: './cinema/cinema.module#CinemaModule' },
  { path: 'account', loadChildren: './account/account.module#AccountModule' },
  { path: '', redirectTo: 'cinema/movies', pathMatch: 'full' },
  { path: '**', redirectTo: 'oops/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
