import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ClipboardModule],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() salonId: string = '';
  messages: any[] = [];
  newMessage: any = { contenu: '' };

  constructor(private messageService: MessageService, private location: Location, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.salonId = this.route.snapshot.paramMap.get('id_salon') || '';
    this.fetchMessages();
  }

  fetchMessages(): void {
    if (this.salonId) {
      this.messageService.getMessagesBySalon(this.salonId)
        .subscribe(messages => this.messages = messages);
    }
  }

  onSubmit(): void {
    if (this.salonId && this.newMessage.contenu.trim()) {
      const messageData = { salon: this.salonId, contenu: this.newMessage.contenu.trim() };
      this.messageService.createMessage(messageData)
        .subscribe(() => {
          this.newMessage.contenu = '';
          this.fetchMessages();
        });
    }
  }

  goBack() {
    this.location.back();
}
}