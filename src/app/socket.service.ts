
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
const SERVER_URL = 'mqtt://test.mosquitto.org';

@Injectable()
export class SocketService {
  constructor(private socket: Socket) { }

  sendMessage(msg: string) {
    this.socket.emit("message", msg);
  }
  getMessages() {
    return Observable.create((observer) => {
      this.socket.on('LOCK', (message) => {
        observer.next(message);
      });
    });
  }
}