import { ServiceDetail } from "./service-order-det";

export interface ServiceOrderRequest {
    serviceDetail:Record<string, ServiceDetail>;
    clientId:number;
    price:number;
    date:Date;
}

export interface ServiceOrderStatus {
    orderStatus:string;
}