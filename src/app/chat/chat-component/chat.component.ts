import { Component } from '@angular/core';
import { ChatInterfaceComponent } from '../chat-interface/chat-interface.component';
import { RelevantContextComponent } from '../relevant-context/relevant-context.component';
import { DocumentViewerComponent } from '../document-viewer/document-viewer.component';

@Component({
  selector: 'app-chat-component',
  standalone: true,
  imports: [
    ChatInterfaceComponent,
    RelevantContextComponent,
    DocumentViewerComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

}
