import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event-component',
  standalone: false,
  styleUrl: './binding-event-component.css',
  templateUrl: './binding-event-component.html',
})
export class BindingEventComponent {
  public hesa:number=5;
  public hesb:number=8;
  giaiPT(hesa:string,hesb:string,view:HTMLElement){
    
    let a=parseFloat(hesa)
    let b=parseFloat(hesb)

    if(a==0 && b==0){
      view.innerHTML="Vo so nghiem"
    }
    else if(a==0 && b!=0){
      view.innerHTML="<font color='red'>Vo nghiem</font>"
    }
    else{
      view.innerHTML="x="+(-b/a)
    }
    let tdketqua2=document.getElementById("ketqua2")
    tdketqua2!.innerHTML="x="+(-b/a)
  }
}
