import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    messages: string[] = [];

    constructor() {
    }

    add(message: string) {
        this.messages.push(message);
    }

    clear(): void {
        this.messages = [];
    }
}
