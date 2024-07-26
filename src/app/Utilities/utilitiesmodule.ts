import {NgModule} from"@angular/core"; 
import {ASpacePipe} from '../Utilities/a-space.pipe';

@NgModule({


    imports:[
    
    ],
    declarations:[
        ASpacePipe
    ],
    exports:[
       ASpacePipe
    ]
        

 })
 export class UtilitiesModule{
 }