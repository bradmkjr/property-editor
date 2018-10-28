import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';

import { RouterModule } from '@angular/router';
import { LOGIN_ROUTES } from './_routes/login.routes';

import { SharedModule } from './../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(LOGIN_ROUTES),
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
