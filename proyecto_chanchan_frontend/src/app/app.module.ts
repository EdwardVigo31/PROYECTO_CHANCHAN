import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoletoComponent } from './Components/pages/compra/boleto/boleto.component';
import { CartComponent } from './Components/pages/compra/cart/cart.component';
import { CartItemComponent } from './Components/pages/compra/cart-item/cart-item.component';
import { ProductItemComponent } from './Components/pages/compra/product-item/product-item.component';
import { ProductLisComponent } from './Components/pages/compra/product-lis/product-lis.component';
import { NavbarComponent } from './Components/Layout/navbar/navbar.component';
import { FooterComponent } from './Components/Layout/footer/footer.component';

import { NgxPayPalModule } from 'ngx-paypal';
import { LoginComponent } from './Components/pages/usuario/login/login.component';
import { SignupComponent } from './Components/pages/usuario/signup/signup.component';

import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';



import { DashboardComponent } from './Components/pages/usuario/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './Components/pages/usuario/user/user-dashboard/user-dashboard.component';
import { CrearEventoComponent } from './Components/pages/evento/crear-evento/crear-evento.component';
import { ListaEventoComponent } from './Components/pages/evento/lista-evento/lista-evento.component';
import { ListaNoticiaComponent } from './Components/pages/noticias/lista-noticia/lista-noticia.component';
import { CrearNoticiaComponent } from './Components/pages/noticias/crear-noticia/crear-noticia.component';
import { authInterceptorProviders } from './Components/models/auth.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    BoletoComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    ProductLisComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    UserDashboardComponent,
    CrearEventoComponent,
    ListaEventoComponent,
    ListaNoticiaComponent,
    CrearNoticiaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPayPalModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [authInterceptorProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }
