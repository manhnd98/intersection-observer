import {NgModule} from '@angular/core';
import {MatInput} from '@angular/material/input';
import {TextInputComponent} from './text-input.component';

@NgModule({
    imports: [MatInput],
    exports: [TextInputComponent],
    declarations: [TextInputComponent],
    providers: [],
})
export class TextInputModule {}
