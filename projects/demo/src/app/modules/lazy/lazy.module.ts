import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {RouterModule, Routes} from '@angular/router';
import {LargeFormComponent} from './large-form/large-form.component';
import {LazyComponent} from './lazy.component';

export const routes: Routes = [
    {
        path: '',
        component: LargeFormComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        MatInputModule,
        ReactiveFormsModule,
        CommonModule,
    ],
    declarations: [LazyComponent, LargeFormComponent],
    exports: [LazyComponent],
})
export class LazyModule {}
