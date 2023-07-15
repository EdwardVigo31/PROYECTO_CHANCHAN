import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoletoComponent } from './Components/pages/compra/boleto/boleto.component';
import { LoginComponent } from './Components/pages/usuario/login/login.component';
import { NormalGuard } from './Components/guards/normal.guard';
import { AdminGuard } from './Components/guards/admin.guard';
import { SignupComponent } from './Components/pages/usuario/signup/signup.component';
import { InicioComponent } from './Components/pages/home/inicio/inicio.component';
import { DashboardComponent } from './Components/pages/usuario/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './Components/pages/usuario/user/user-dashboard/user-dashboard.component';
import { CrearEventoComponent } from './Components/pages/evento/crear-evento/crear-evento.component';
import { ListaEventoComponent } from './Components/pages/evento/lista-evento/lista-evento.component';
import { ListaNoticiaComponent } from './Components/pages/noticias/lista-noticia/lista-noticia.component';
import { CrearNoticiaComponent } from './Components/pages/noticias/crear-noticia/crear-noticia.component';

const routes: Routes = [

  {
    path : '',
    component : InicioComponent,
    pathMatch : 'full'
  },
  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    pathMatch:'full',
    canActivate:[AdminGuard]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    pathMatch:'full',
    canActivate:[NormalGuard]
  },
  {
    path:'boleto',
    component:BoletoComponent,
    pathMatch:'full'
  },
  {
    path:'crear/evento',
    component:CrearEventoComponent,
    pathMatch:'full'
  },
  {
    path:'lista/evento',
    component:ListaEventoComponent,
    pathMatch:'full'
  },
  {
    path:'lista/noticia',
    component:ListaNoticiaComponent,
    pathMatch:'full'
  },
  {
    path:'crear/noticia',
    component:CrearNoticiaComponent,
    pathMatch:'full'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
