import {AnimalPerrito} from './animal_perrito.interface';

export interface Duenio { 
    nombre: string;        
    apellido: string;
    cedula?: string;
    fechaNacimiento: number;
    mascotasPerro?: AnimalPerrito[];
}

