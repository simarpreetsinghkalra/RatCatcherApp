import { Device } from './device';
export interface User{
    devices: Device[];
    _id: string;
}