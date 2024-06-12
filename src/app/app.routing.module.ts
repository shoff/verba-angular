import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat-component/chat.component';
import { SettingsComponent } from './settings/settings/settings.component';
import { RagComponent } from './rag/rag/rag.component';
import { AddDocumentsComponent } from './add-documents/add-documents/add-documents.component';
import { OverviewComponent } from './overview/overview/overview.component';
import { DocumentsComponent } from './documents/documents/documents.component';

const _routes: Routes = [
  { path: 'chat', component: ChatComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'add-documents', component: AddDocumentsComponent },
  { path: 'rag', component: RagComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/chat', pathMatch: 'full' }
];

export const routes = _routes;

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
