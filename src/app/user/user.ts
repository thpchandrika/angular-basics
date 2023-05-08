export class User{
    id: number;
    name: string;
    email: string;
    mobile: number;

    constructor(id: number, name: string, email: string, mobile: number){
        this.id = id;
        this.name= name;
        this.email= email;
        this.mobile= mobile;
    }

}