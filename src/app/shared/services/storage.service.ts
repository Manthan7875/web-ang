import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage: any;

    constructor() {
        this.setStorage();
        // this.storage = sessionStorage; // localStorage;
    }

    public retrieve(key: string): any {
        let item = this.storage.getItem(key);

        if (item && item !== 'undefined') {
            return JSON.parse(this.storage.getItem(key));
        }

        return;
    }

    public store(key: string, value: any) {
        this.storage.setItem(key, JSON.stringify(value));
    }

    public clear() {
        localStorage.clear();
        sessionStorage.clear();
    }
    public removeItem(key: string) {
        this.storage.removeItem(key);
    }
    public setRememberMe(value: any) {
        localStorage.setItem('rememberMe', value);
        this.setStorage();
    }
    private setStorage() {
        const rememberMe = localStorage.getItem('rememberMe');
        this.storage = (rememberMe && rememberMe == "true") ? localStorage : sessionStorage;
    }
}
