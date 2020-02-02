import * as fs from 'fs';

export function escribirArchivo(
    path: string,
    contenido: string
    ){ 
        
    fs.writeFileSync(
        './ejemplo.txt',  
         contenido,   
        'utf8' 
    );

}

