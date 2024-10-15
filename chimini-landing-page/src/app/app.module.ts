import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocationsComponent } from './components/locations/locations.component';
import { CharitiesComponent } from './components/charities/charities.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactDialogComponent } from './components/contact-dialog/contact-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    RecommendationComponent,
    FooterComponent,
    LocationsComponent,
    CharitiesComponent,
    CertificationsComponent,
    ContactComponent,
    ContactDialogComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
