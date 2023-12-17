export interface HouseRequest{
    address:string,
    mail:string,
    lat:number,
    long:number,
    zipcode:string,
    city:string,
    status:'approuved'| 'reject' | 'pending',
}