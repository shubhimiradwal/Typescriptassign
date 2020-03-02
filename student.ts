import { Person } from "./person";
export class student implements Person {
    Name: string;
    age: number;
    Class: string;
    Favorite_subject:string;
    constructor(Name:string,age:number,Class: string,Favorite_subject:string) {
        this.Name=Name;
        this.age=age;
        this.Class =Class;
        this.Favorite_subject=Favorite_subject;
        
    }
  
}
