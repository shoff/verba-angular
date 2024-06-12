import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'chat-interface',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  templateUrl: './chat-interface.component.html',
  styleUrl: './chat-interface.component.scss'
})
export class ChatInterfaceComponent {
  userInput: string = '';
  messages: { role: string, content: string }[] = [];

  constructor(private http: HttpClient) {}

  sendMessage(): void {
    if (this.userInput.trim()) {
      this.messages.push({ role: 'user', content: this.userInput });

      this.http.post<any>('http://localhost:8000/chat', { message: this.userInput })
        .subscribe(response => {
          this.messages.push({ role: 'bot', content: response.answer });
        });

      this.userInput = '';
    }
  }
}
