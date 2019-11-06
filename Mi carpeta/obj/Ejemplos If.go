//Porgrama para observar si un estudiante aporvo o reprobo los supletorios
package main
import(
	"fmt"
	"strconv"
)
func main(){
	fmt.Println("Ingrese su nota total sobre 20")
	var n2 string
	fmt.Scan(&n2)
	fltStr,_ := strconv.ParseFloat("n2", 128)
	if fltStr >= 0 && fltStr < 9 {
		fmt.Println("Usted no ha aprovado, pierde el semestre")
	}else{
		if fltStr >= 9 && fltStr < 14{
			fmt.Println("Usted tiene que rendir los supletorios para pasar")
		}else{ 
			if fltStr >= 14 && fltStr <= 20{
				fmt.Println("Usted Aprobó, !Felicitaciones¡")
			}else{ 
				if fltStr < 0{
					fmt.Println("Ingrese una nota válida")
				}
			}
		}
	}
}	

// Programas para saber el numero mayor entre 3 numeros
package main

import (
	"fmt"
)
func main() {
	fmt.Println("El mayor entre 3 dumeros")
	var num1, num2 float64
	fmt.Println("Ingrese el primer numero: ")
	fmt.Scanln(&num1)
	fmt.Println("Ingrese el segundo numero: ")
	fmt.Scanln(&num2)
	fmt.Println("Ingrese el tercer numero: ")
	fmt.Scanln(&num3)
	if num1 < num2 && num1 < num3 {
		if num2 < num3 { 
		fmt.Println("El Mayor numero es: ", num1)
		fmt.Println("El numero del medio es: ", num3)
		fmt.Println("El menor numero es: ", num2)
	    } else {
		fmt.Println("El Mayor numero es: ", num1)
		fmt.Println("El numero del medio es: ", num2)
		fmt.Println("El menor numero es: ", num3)
	  	} } else if num2 < num1 && num2 < num3 {
			if num1 < num3{
				fmt.Println("El Mayor numero es: ", num2)
		        fmt.Println("El numero del medio es: ", num3)
				fmt.Println("El menor numero es: ", num1)
			} else { 
				fmt.Println("El Mayor numero es: ", num2)
		        fmt.Println("El numero del medio es: ", num1)
				fmt.Println("El menor numero es: ", num3)
		}} else if num3 < num1 && num3 < num2 {
			if num1 < num2 {
				fmt.Println("El Mayor numero es: ", num3)
		        fmt.Println("El numero del medio es: ", num2)
				fmt.Println("El menor numero es: ", num1)
			} else {
				fmt.Println("El Mayor numero es: ", num2)
		        fmt.Println("El numero del medio es: ", num1)
				fmt.Println("El menor numero es: ", num2)
			} 
		} else {
			fmt.Println("Existen dos numeros que son iguales");
		}
}

// Programa para saber si un numero ingresado es par o no 
package main
import(
	"fmt"
	"strconv"
)
func main(){
	fmt.Println("Por favor, ingrese el numero que desee")
	var n2 string
	fmt.Scan(&n2)
	fltStr,_ := strconv.ParseFloat("n2", 128)
	if fltStr %2 == 0 {
		fmt.Println("El numero es Par")
	} else {
		fmt.Println("El numero es impar")
	} 
}

