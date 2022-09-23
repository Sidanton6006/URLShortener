import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { MyUrlTableComponent } from './pages/my-url-table/my-url-table.component';
import { RedirectComponent } from './pages/redirect/redirect.component';
import { UrlTableComponent } from './pages/url-table/url-table.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'global_urls', component: UrlTableComponent},
  {path: 'my_urls', component: MyUrlTableComponent},
  {path: 'about', component: AboutComponent},
  {path: ':shortUrl', component: RedirectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
