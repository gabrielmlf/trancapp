
import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs';

const SERVER_URL = 'mqtt://test.mosquitto.org';

@Injectable()
export class SocketService {
  public socket;

  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }

  public send(message: string): void {
    this.socket.emit('message', message);
  }

  // public onMessage(): Observable<Message> {
  //     return new Observable<Message>(observer => {
  //         this.socket.on('message', (data: Message) => observer.next(data));
  //     });
  // }

  // public onEvent(event: Event): Observable<any> {
  //     return new Observable<Event>(observer => {
  //         this.socket.on(event, () => observer.next());
  //     });
  // }
}