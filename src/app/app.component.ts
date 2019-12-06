import { Component, OnDestroy } from '@angular/core';
import { MqttService, IMqttMessage } from 'ngx-mqtt';
import { Subscription, Observable } from 'rxjs';
import { SocketService } from './socket.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private subscription: Subscription;
  public message: string;

  constructor(
    private _mqttService: MqttService,
    public socket: SocketService) {
    this._mqttService.onConnect.subscribe(() => {
      
    })
    this.subscription = this._mqttService.observe('FAINOR/esp8266-01/lock').subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
    });
  }

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, { qos: 1, retain: true });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

