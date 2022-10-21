import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageComponent} from  './page/page.component';
import {UserlistComponent} from  './userlist/userlist.component';
import { HomeComponent } from './components/home/home.component';
import { ThankyouPageComponent } from './thankyou-page/thankyou-page.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';



const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'page',component:PageComponent},
{path:'userlist',component:UserlistComponent},
{path:'thankyou',component:ThankyouPageComponent},
{path:'updateuser/:emailId',component:UpdateuserComponent},
{path:'createstudent',component:CreatestudentComponent},
{path:'viewstudentdetails',component:ViewstudentComponent},
{path:'updatestudent/:sid',component:UpdatestudentComponent},



{path:'',redirectTo:'home',pathMatch:'full'}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
