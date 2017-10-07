import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastyModule } from 'ng2-toasty';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SafePipe } from '../shared/common/pipes/safe.pipe';
import { MenuTopComponent } from '../shared/common/menu-top/menu-top.component';
import { TitlePageComponent } from '../shared/common/titlePage/titlePage.component';
import { FooterComponent } from '../shared/common/footer/footer.component';
import { CarouselComponent } from '../shared/common/carousel/carousel.component';
import { MenuNavComponent } from '../shared/common/menu-nav/menu-nav.component';
import { TimeToComponent } from '../shared/common/timeTo/timeTo.component';

@NgModule({
    imports: [
        CommonModule,
        ToastyModule.forRoot(),
        RouterModule,
        FormsModule,
    ],
    declarations: [
        MenuTopComponent,
        TitlePageComponent,
        FooterComponent,
        CarouselComponent,
        MenuNavComponent,
        TimeToComponent,
        SafePipe,
    ],
    providers: [
    ],
    exports: [
        MenuTopComponent,
        TitlePageComponent,
        FooterComponent,
        CarouselComponent,
        MenuNavComponent,
        ToastyModule,
        TimeToComponent,
        SafePipe,
    ]
})
export class SharedModule { }
