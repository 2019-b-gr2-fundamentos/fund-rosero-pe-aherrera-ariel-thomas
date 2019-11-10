/*
1   Analisis socieconómico y político del Ecuador
2   Algebra Lineal 
3   Compiladores
5   Fundamentos de Programación
7   Calculo
11  Fisica
13  Ingles
*/

// Programa para saber cuantos deberes hiceron del 1 al 1000

package main
import (
	"fmt"
)

func main() {

	var analisis = 0
	var algebra = 0
	var compiladores = 0
	var fundamentos = 0
	var calculo = 0
	var fisica = 0
	var ingles = 0

	for deberes := 0; deberes < 1000; deberes++ {
		if deberes % 13 == 0 {
			ingles = ingles + 1 
		} else if deberes % 11 == 0 {
			fisica = fisica + 1
		} else if deberes % 7 == 0 {
			calculo = calculo + 1 
		} else if deberes % 5 == 0 {
			fundamentos = fundamentos + 1
		} else if deberes % 3 == 0 {
			compiladores = compiladores + 1 
		} else if deberes % 2 == 0 {
			algebra = algebra + 1
		} else if deberes % 2 != 0 {
			analisis = analisis + 1 
		}
	}

	fmt.Println("El numero de deberes de Análisis es: ", analisis)
	fmt.Println("El numero de deberes de Algebra Lineal es: ", algebra)
	fmt.Println("El numero de deberes de Calculo en una variable es: ", calculo)
	fmt.Println("El numero de deberes de Compiladores es: ", compiladores)
	fmt.Println("El numero de deberes de Fisica 1 es: ", fisica)
	fmt.Println("El numero de deberes de Fundamentos de la Programación es: ", fundamentos)
	fmt.Println("El numero de deberes de Ingles es: ", ingles)














}