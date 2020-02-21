import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule,
  MatInputModule, MatTableModule, MatToolbarModule,
  MatMenuModule,MatIconModule, MatProgressSpinnerModule,
  MatTabsModule
} from '@angular/material';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  imports: [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatSortModule
  ],
  exports: [
  CommonModule,
   MatToolbarModule,
   MatButtonModule,
   MatCardModule,
   MatInputModule,
   MatDialogModule,
   MatTableModule,
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatTabsModule,
   MatSortModule
   ],
})
export class CustomMaterialModule { }
