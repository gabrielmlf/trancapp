import { Component, OnInit } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  aberto: boolean = false;

  constructor(
    public socket: SocketService
  ) {

  }
  ngOnInit() {
    this.socket
      .getMessages()
      .subscribe((message: string) => {
        this.aberto = !this.aberto;
      });
  }
  publicar() {
    this.socket.sendMessage('teste');
    console.log("teste");
  }

}

