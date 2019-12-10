package main 
import ( 
	"fmt"
	"math"
)

func sumar( numUno float64 , numDos float64 ) float64 {
	return numUno + numDos
}

func restar( numUno float64, numDos float64 ) float64 {
	return numUno - numDos
}

func multiplicar( numUno float64, numDos float64 ) float64 {
	return numUno * numDos
}

func dividir( numUno float64, numDos float64 ) float64 {
	return numUno / numDos
}

func teorema( numUno float64, numDos float64 ) float64 {
	return math.Sqrt( math.Pow(numUno, 2) + math.Pow(numDos, 2))

}

func ecuacion( numUno float64, numDos float64, numTres float64, numCuatro float64 ) float64 {
	
	fmt.Println("Con esta ecuación se calculara la posición final de un movimiento parabolico de la forma Yf = Yo + tan(angulo) * X - 1/2 * gravedad * X^2 / Vox^2 ")
	fmt.Println("Recordar: numero1 es Yo, numero2 es el angulo de lanzamiento numero3 es la posicion en el eje X y numero 4 es la velocidad inicial en X")
	
	var argumento1 float64 = numUno + ( ( math.Tanh(numDos) ) * numTres )
	var argumento2 float64 = 0.5 * 9.8 * ( ( math.Pow(numTres,2) ) / ( math.Pow(numCuatro,2) ) ) 

	return argumento1 - argumento2

}

func porcentajes( numUno float64, numDos float64 ) float64 {
	fmt.Println("Numero1 es el valor total y numpero2 es el porcentaje a calcular")
	return (numUno * numDos) / 100
}

func volumenPiramide( numUno float64, numDos float64 ) float64 {
	fmt.Println("Numero1 es la superficie de la base y numero2 es la altura de la piramide")
	return (numUno * numDos) / 3  
}

func ECinetica( numUno float64, numDos float64 ) float64 {
	return 0.5 * numUno * math.Pow( numDos, 2 )
}

func sectorCircular(numUno float64, numDos float64) float64 {
	return (numUno / 360 ) * (3.1416) * math.Pow(numDos, 2)
}


func calculadora() {
	fmt.Println("Bienvenido")
	fmt.Println("1. Suma")
	fmt.Println("2. Resta")
	fmt.Println("3. Multiplicación")
	fmt.Println("4. División")
	fmt.Println("5. Teorema de Pitagoras")
	fmt.Println("6. Ecuación de la Trayectoria para un movimiento parabólico")
	fmt.Println("7. Porcentajes ")
	fmt.Println("8. Volumen de una Piramide ")
	fmt.Println("9. Energia Cinética ")
	fmt.Println("10. Sector Circular ")
	fmt.Println("11. Salir")
	fmt.Println("Ingrese la operación que desee")

	var opcion string
	fmt.Scanln(&opcion)
	var esSuma bool = opcion == "suma" || opcion == "1" || opcion == "1. suma" || opcion == "1 suma "
	var esResta bool = opcion == "resta" || opcion == "2" || opcion == "2. resta" || opcion == "2 resta "
	var esMultiplicacion bool = opcion == "multiplicacion" || opcion == "3" || opcion == "3. multiplicacion" || opcion == "3 multiplicacion"
	var esDivision bool = opcion == "division" || opcion == "4" || opcion == "4. division" || opcion == "4 division"
	var esTeorema bool = opcion == "teorema de pitagoras" || opcion == "5" || opcion == "5. teorema de pitagoras" || opcion == "5 teorema" || opcion == "teorema"
	var esEcuacion bool = opcion == "Ecuacion" || opcion == "6" || opcion == "6. Ecuacion" || opcion == "6 ecuacion"
	var esPorcentaje bool = opcion == "Porcentajes" || opcion == "7" || opcion == "7. Porcentajes" || opcion == "7 porcentajes"
	var esVolumen bool = opcion == "Volumen de Piramide" || opcion == "8" || opcion == "8. Volumen de Piramide" || opcion == "8 Volumen"
	var esEnergia bool = opcion == "Energia Cinetica" || opcion == "9" || opcion == "9. Energia Cinetica" || opcion == "9 Energia"
	var esSector bool = opcion == "Sector Circular" || opcion == "10" || opcion == "10. Sector Circular" || opcion == " 10 Sector Circular" 
	var esSalir bool = opcion == "salir" || opcion == "11" || opcion == "11. salir" || opcion == "11 salir"
	var esValida bool = esSuma || esResta || esMultiplicacion || esDivision || esTeorema || esEcuacion || esPorcentaje || esVolumen || esEnergia || esSector || esSector 
	fmt.Println("Si la opción es la opción 6, debe tener en cuenta que el numero 1 y 2 es la Yo y angulo de lanzamiento, respectivamente")


	if esValida {
		fmt.Println("Ingrese el primer numero: ")
		var numUno float64 = 0
		fmt.Scanln(&numUno)
		fmt.Println("Ingrese el segundo numero: ")
		var numDos float64 = 0
		fmt.Scanln(&numDos)
		var resultado float64 = 0 
		

		if esSuma {
			resultado = sumar(numUno,numDos)
		}
		if esResta {
			resultado = restar(numUno,numDos)
		}
		if esMultiplicacion {
			resultado = multiplicar(numUno,numDos)
		}
		if esDivision {
			resultado = dividir(numUno,numDos)
		}
		if esTeorema {
			resultado = teorema(numUno,numDos)
		}
		if esEcuacion {
			fmt.Println("Ingrese el tercer numero: ")
			var numTres float64 = 0
			fmt.Scanln(&numTres)
			fmt.Println("Ingrese el cuarto numero: ")
			var numCuatro float64 = 0
			fmt.Scanln(&numCuatro)
			
			resultado = ecuacion(numUno,numDos,numTres,numCuatro)
		}
		if esPorcentaje {
			resultado = porcentajes(numUno,numDos)
		}
		if esVolumen {
			resultado = volumenPiramide(numUno,numDos)
		}
		if esEnergia {
			resultado = ECinetica(numUno,numDos)
		}
		if esSector {
			resultado = sectorCircular(numUno,numDos)
		}
		fmt.Println("El resultado es: ", resultado)
		calculadora()
	} else {
		if esSalir {
			fmt.Println("Es porque soy negro, ¿verdad? :,( ")
		} else {
			calculadora()
		}
	}

}

func main() {
	calculadora()
}

