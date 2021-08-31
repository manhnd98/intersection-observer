import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
@Component({
    selector: 'app-wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperComponent {
    @Input() label = '';

    @Input() viewMode = false;

    constructor() {}
}
