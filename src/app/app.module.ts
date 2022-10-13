import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { EtudiantComponent } from './members/etudiant/etudiant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MemberformComponent } from './memberform/memberform.component';
import { FlexLayoutModule } from '@angular/flex-layout/';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { ConfirmeDialogComponent } from './confirme-dialog/confirme-dialog.component';

import { LayoutComponent } from './layout/layout.component';
import { ArticlesComponent } from './article/article.component';
import { ArticleAffectComponent } from './article-affect/article-affect.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    EtudiantComponent,
    MemberformComponent,
    ConfirmeDialogComponent,
    LayoutComponent,
    ArticlesComponent,
    ArticleAffectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatOptionModule,
    MatSelectModule,
MatListModule,
MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
