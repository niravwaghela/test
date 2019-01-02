import { Injectable } from "@angular/core";
import {MessageService} from 'primeng/api';


@Injectable()
export class GrowlService {
constructor(private messageService:MessageService){}

addSingle(message:string){
    this.messageService.add({severity:'success',summary:message,detail:''});
}
showError(message:string) {
    this.messageService.add({severity:'error', summary: message, detail:''});
}
clear(){
    this.messageService.clear();
}

 
}
