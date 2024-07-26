import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MajoPipe } from './majo.pipe';
import { ASpacePipe } from './Utilities/a-space.pipe';
import { AuthInterceptor } from './auth.interceptor';
import { HomeComponent } from './Home/Home.component';
import { AutosPageComponent } from './AutosPage/AutosPage.component';
import { PagenotfoundComponent } from './Pagenotfound/Pagenotfound.component';
import { AutoPageRegisterComponent } from './AutoPageRegister/AutoPageRegister.component';
import { UserInterceptorService } from './Interceptor/Userinterceptor.service';


@NgModule({
  declarations: [					
    AppComponent,
    MajoPipe,
    ASpacePipe,
      HomeComponent,
      AutosPageComponent,
      PagenotfoundComponent,
      AutoPageRegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

