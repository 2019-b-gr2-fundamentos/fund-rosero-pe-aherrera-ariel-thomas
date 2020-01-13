import {AnimalPerrito} from './animal_perrito.interface';

export interface Duenio { //interface -> Definir la Struct
    nombre: string;        
    apellido: string;
    cedula?: string;
    fechaNacimiento: number;
    mascotasPerro?: AnimalPerrito[];
}

