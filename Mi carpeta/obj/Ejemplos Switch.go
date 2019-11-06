//Programa para saber que dia de la semana es evaluado desde el 1 al 7
package main
import ( 
	"fmt"
)
func main() {
	fmt.Println("Ingrese un número del 1 al 7, para saber que dia de la semana es")
     sueldo := 500  // Escriba un numero del 1 al 7
     switch sueldo{
     case 1:
	 fmt.Println("Es Lunes")
     case 2:
	 fmt.Println("Es Martes")
     case 3:
	 fmt.Println("Es Miércoles")
     case 4:
	 fmt.Println("Es Jueves")
     case 5:
	 fmt.Println("Es Viernes")
	 case 6:
	 fmt.Println("Es Sábado")
	 case 7:
	 fmt.Println("Es Domingo")
     default:
	 fmt.Println("Ingrese un numero válido, porfavor")
    }
}

// Programa para saber si un caracter ingresado es una Vocal

package main
import ( 
	"fmt"
)
func main() {
 musica :=     // Aquí escribiremos el caracter que queramos. 
 switch musica{
 case "a":
	 fmt.Println("Es una Vocal y es la a")
 case "e":
	 fmt.Println("Es una Vocal y es la e")
 case "i":
	 fmt.Println("Es una vocal y es la i")
 case "o":
	 fmt.Println("Es una vocal y es la o")
 case "u":
	 fmt.Println("Es una vocal y es la u")
 default:
	 fmt.Println("El caracter ingresado no es una vocal, esta es una Consonante")
    }
}

//Programa para saber que mes del año es. En un intervalo de 1 a 12
package main
import ( 
	"fmt"
)
func main() {
	fmt.Println("Ingrese un número del 1 al 12")
     sueldo := 500  // Escriba un numero del 1 al 12
     switch sueldo{
     case 1:
	 fmt.Println("Enero")
     case 2:
	 fmt.Println("Febrero")
     case 3:
	 fmt.Println("Marzo")
     case 4:
	 fmt.Println("Abril")
     case 5:
	 fmt.Println("Mayo")
	 case 6:
	 fmt.Println("Junio")
	 case 7:
	 fmt.Println("Julio")
	 case 8:
	 fmt.Println("Agosto")
	 case 9:
	 fmt.Println("Septiembre")
	 case 10:
	 fmt.Println("Octubre")
	 case 11:
	 fmt.Println("Noviembre")
	 case 12:
	 fmt.Println("Diciembre")
	 default:
	 fmt.Println("Ingrese un numero válido, porfavor")
    }
}