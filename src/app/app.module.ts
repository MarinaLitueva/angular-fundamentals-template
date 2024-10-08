import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '@shared/shared.module';
import {UserModule} from '@app/user/user.module';
import {AppComponent} from '@app/app.component';
import {CourseInfoComponent} from '@features/course-info/course-info.component';
import {RouterOutlet} from '@angular/router';
import {AppRoutingModule} from '@app/app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthModule} from '@app/auth/auth.module';

import { StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {effects, reducers} from "@app/store";

@NgModule({
    declarations: [AppComponent, CourseInfoComponent],
    imports: [
        BrowserModule,
        SharedModule,
        FontAwesomeModule,
        RouterOutlet,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        UserModule,
        AuthModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot(effects)
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
