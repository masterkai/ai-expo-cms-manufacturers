import { Component } from '@angular/core';
import { MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-terms',
    imports: [MatDialogModule,MatButtonModule],
    templateUrl: './terms.html',
    styleUrl: './terms.scss'
})
export class Terms {

}
