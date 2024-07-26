import {NgModule} from"@angular/core"; 
import { AutoslistComponent } from '../Autos-List/autos-list.component';
import { ASpacePipe } from "../../app/Utilities/a-space.pipe";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from "@angular/router";

@NgModule({


    imports:[
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations:[
        AutoslistComponent,
        ASpacePipe,
    ],
    exports:[
        AutoslistComponent
    ]
        

 })
 export class autosmodule{
 }