import { NumberValueAccessor } from "@angular/forms";
import { ClientDet } from "./client-det";

export interface HardwareCleaning{
    type:'HardwareCleaning';
    ramCleaning:boolean;
    cpuThermalPastReplacement:boolean;
    generalCleaning:boolean;
}

export interface HardwareRepair{
    type:'HardwareRepair';
    cpu:boolean;
    gpu:boolean;
    ram:boolean;
    disk:boolean;
    mother:boolean;
    powerSupply:boolean;
}

export interface WindowsOptimization{
    type:'WindowsOptimization';
    updateDrivers:boolean;
    virusClean:boolean;
    programOptimization:boolean;
    remoteWork:boolean;
}

export interface WindowsReinstallation{
    type:'WindowsReinstallation';
    backupBeforeReinstallation:boolean;
    remoteWork:boolean;
    customPrograms:string[];
}

export type ServiceDetail = HardwareCleaning | HardwareRepair | WindowsOptimization | WindowsReinstallation;

export interface ServiceOrderDet {
    id:number;
    orderStatus:string;
    serviceDetail:Record<string, ServiceDetail>;
    client:ClientDet;
    price:number;
    date:Date;
}
