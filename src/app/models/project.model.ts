export interface Project{
    id:string;
    imgId:string[];
    title:string;
    description:string;
    address:string;
    city:string;
    district:string;
    zipcode:string;
    lat:number | null;
    long:number | null;
    visibility:boolean;
}