import { Component } from '@angular/core';

@Component({
  selector: 'promise',
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.scss'
})
export class PromiseComponent {

  myFunction(){
    console.log("it is clicked");
  }

  DellAvail(){
    return false
  }

  HpAvail(){
    return false
  }

  promiseVal:unknown;

  constructor(){

  }

  ngOnInit(): void{
    // let buyLaptop = new Promise(function (resolve,reject) {
    //   resolve('Promise is resolve')
    // })

    let buyLaptop = new Promise((resolve,reject) => {
      //resolve('Promise is resolve')
      //reject('promis is rejected')

      if(this.DellAvail()){
        return setTimeout(()=>{
          resolve('Dell is purchased')
        }, 3000)
      }else if(this.HpAvail()){
        return setTimeout(()=>{
          resolve('Hp is purchased')
        }, 3000)
       }else{
        return setTimeout(()=>{
          reject('No Laptop is available')
        }, 3000)
        
       
      }
    })

    buyLaptop.then(res=>{
      console.log("then code :-",res)
      this.promiseVal = res;
    }).catch(res=>{
      console.log("catch code :-",res)
      this.promiseVal = res;
    })
  }

}
