import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
@Component({
    selector: 'app-text-input',
    templateUrl: './text-input.component.html',
    styleUrls: ['./text-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent {
    @Input() viewMode = false;

    constructor() {}
}
