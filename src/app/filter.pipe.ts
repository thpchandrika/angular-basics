import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchName: string): any {    
    if(searchName === ""){
      return value;
    }
    const playersArray: any[] =[];
    for(let i = 0; i< value.length; i++){
      let teamName: string = value[i].team;      
      if(teamName.startsWith(searchName)){       
        playersArray.push(value[i]);
      } 
    }   
    return playersArray;    
  }

}
