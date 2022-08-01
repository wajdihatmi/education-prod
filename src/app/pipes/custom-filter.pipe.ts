import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(ObjFilter: any, x:string) {
    if (ObjFilter === undefined) {
      return ObjFilter;
      
    }
   return (ObjFilter.filter(obj=>{
    return (obj.matiere.toLowerCase().includes(x.toLowerCase()) )
    
   }))
    
     
    
    
    
    
     
   }
  }



