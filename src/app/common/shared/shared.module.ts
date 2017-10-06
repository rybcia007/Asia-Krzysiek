import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastyModule } from 'ng2-toasty';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MenuTopComponent } from '../shared/common/menu-top/menu-top.component';
import { TitlePageComponent } from '../shared/common/title-page/title-page.component';
import { FooterComponent } from '../shared/common/footer/footer.component';
import { CarouselComponent } from '../shared/common/carousel/carousel.component';
import { MenuNavComponent } from '../shared/common/menu-nav/menu-nav.component';

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
    ]
})
export class SharedModule { }
