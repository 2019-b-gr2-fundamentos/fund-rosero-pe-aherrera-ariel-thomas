import {Duenio} from './duenio.interface'; 

export interface AnimalPerrito { //interface -> Definir la Struct
    nombreCientifico: string;        
    nombre: string;
    clan: string;
    edad?: number; 
    // hijos: null, 
    perritas?: string[]; 
    vacunado?: boolean; 
    duenio?: Duenio;
}
