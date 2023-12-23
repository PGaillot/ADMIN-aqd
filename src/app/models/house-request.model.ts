export interface HouseRequest{
    address:string,
    email:string,
    lat:number,
    long:number,
    zipcode:string,
    city:string,
    msg:string,
    status:'approuved'| 'reject' | 'pending',
}