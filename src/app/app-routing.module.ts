import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { AutoslistComponent } from '../Autos/Autos-List/autos-list.component';
import { ClientComponent } from './Client/client/client.component';
import { AutosPageComponent } from './AutosPage/AutosPage.component';
import { PagenotfoundComponent } from './Pagenotfound/Pagenotfound.component';
import { AutoPageRegisterComponent } from './AutoPageRegister/AutoPageRegister.component';

const routes: Routes = [
  { path:"home",
     component:HomeComponent
   },
  { path: 'autos-list', component: AutoslistComponent 

  }, 

  { path:"auto",
    component:AutoPageRegisterComponent
  },

  { path:"autos/:code",
    component:AutosPageComponent
  },
  
  { path:"auto",
    component:AutosPageComponent
  },
  { path: 'client', component: ClientComponent }, 

  { path: '', redirectTo: 'autos-list', pathMatch: 'full' },

  { path:"**",
    component:PagenotfoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }