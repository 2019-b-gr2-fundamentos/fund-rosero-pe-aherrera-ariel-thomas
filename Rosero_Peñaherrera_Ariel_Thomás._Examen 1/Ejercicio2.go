//Marcas de Motos
/*
AJP, Aprilia, Arch Motorcycles, Benelli, Beta, BMW, Brough Superior, Can-Am
Cf Moto, Derbi, Ducati, Fantic, Gilera, Hanway, Harley-Davidso, Husqvarna
Hyosung, Indian, Keeway, KTM, Kymco, Macbor, Malaguti, Mash, MITT, Mondial, 
Montesa, MV Agusta, NIU, Norton, Piaggio, Quadron, Riya, Scomadi, 
Scrambler Ducati, Sherco, Suzuki, SWM, SYM, Vespa, Voge, Zontes

*/
package main

import ( "fmt" )

func Motos() {
	fmt.Println("!Bienvenido¡")
	fmt.Println("Hay que tomar en cuenta que el indice emmpieza desde cero")
	fmt.Println("1. Crear")
	fmt.Println("2. Actualizar")
	fmt.Println("3. Eliminar")
	fmt.Println("4. Salir")
	fmt.Println("Seleccione la opción que desea realizar sobre el registro")

	var opcion string
	fmt.Scanln(&opcion)
	
	var esCrear bool = opcion == "crear" || opcion == "1" || opcion == "1. Crear" || opcion == "1 Crear"
	var esActualizar bool = opcion == "actualizar" || opcion == "2" || opcion == "2. Actualizar" || opcion == "2 Actualizar"
	var esEliminar bool = opcion == "eliminar" || opcion == "3" || opcion == "3. Eliminar" || opcion == "3 Eliminar"
	var esSalir bool = opcion == "salir" || opcion == "4" || opcion == "4. salir" || opcion == "4 salir"
	var esValido bool = esCrear || esActualizar || esEliminar

	if esValido {
		fmt.Println("El registro es: ")
		motos := []string{"BMW","Hanway","Kawasaki","Suzuki"}
		fmt.Printf("%q\n",motos)

		if esCrear {
			fmt.Println("Ingrese una nueva marca de moto: ")
			var nuevaMoto string
			fmt.Scanln(&nuevaMoto)
			motos = append(motos, nuevaMoto)

		}
		if esActualizar {
			fmt.Println("Ingrese el indice del elemento que se desea actualizar")
			var indice int
			fmt.Scanln(&indice)
			fmt.Println("Ingrese la nueva marca de moto")
			var motoActualizada string
			fmt.Scanln(&motoActualizada) 
			motos[indice] = motoActualizada
		}
		if esEliminar {
			fmt.Println("Ingrese el indice del elemento que desee eliminar")
			var indice int
			fmt.Scanln(&indice)
			var continuacionIndice int
			continuacionIndice = indice + 1
			motos = append(motos[:indice],motos[continuacionIndice:]...)
		}
		fmt.Printf("%q\n", motos)
		Motos()
	} else {
		if esSalir {
			fmt.Println("Todos se alejan de mi :,(")
		} else {
			Motos()
		}
	}
}

func main() {
	Motos()
}
