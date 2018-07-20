'use strict'
const colors = require('colors')
const read = require('readline-sync')
const moment = require('moment')

class alumno {
  constructor () {
    this.matricula = 0
    this.curp = ''
    this.nombre = ''
    this.apellidoPaterno = ''
    this.apellidoMaterno = ''
    this.genero = ''
    this.fechaNacimiento = ''
  }

  getEdad () {
    let nacimiento = moment(alumno.fechaNacimiento, 'DD/MM/YYYY').format('YYYY-MM-DD')
    console.log(nacimiento)
    let hoy = moment()
    let anios = hoy.diff(nacimiento, 'years')
    console.log(anios)
  }
  getNombreCompleto () {
    console.log(alumno.nombre, alumno.apellidoPaterno, alumno.apellidoMaterno)
  }
  getDatos () {
    alumno.matricula = read.question('Matricula: ')
    alumno.curp = read.question('CURP: ')
    alumno.nombre = read.question('Nombre: ')
    alumno.apellidoPaterno = read.question('Apellido Paterno: ')
    alumno.apellidoMaterno = read.question('Apellido Materno: ')
    alumno.genero = read.question('Genero: ')
    alumno.fechaNacimiento = read.question('Fecha de Nacimiento: ')
  }

  consultar () {
    console.log(`Accediste al Metodo ${colors.yellow.bold('Consultar')}`)
    console.log(` ${colors.yellow.bold('Consulta de la Matrícula')}  ${alumno.matricula}\n ${colors.bgBlue.bold('Curp')}  ${alumno.curp}\n ${colors.bgBlue.bold('Nombre')}  ${alumno.nombre}\n ${colors.bgBlue.bold('Apellido Paterno')}  ${alumno.apellidoPaterno}\n
    ${colors.bgBlue.bold('Apellido Materno')}  ${alumno.apellidoMaterno}\n ${colors.bgBlue.bold('Genero')}  ${alumno.genero}\n ${colors.bgBlue.bold('Edad')}  ${alumno.fechaNacimiento}\n`)
  }
  modificar () {

  }

  agregar () {
    console.log(`Accediste al Metodo ${colors.yellow.bold('Agregar')}`)
    let yesNot = read.question(`¿ Esta seguro de ${colors.green.bold('Guardar los datos')} capturados [${colors.green.bold('Y')}/${colors.red.bold('N')}]?`)
    if (yesNot.toUpperCase(alumno) === 'Y') {
      // alumno.getDatos()
      // listaAlumnos.push(this)
      console.log(`Los datos se han ${colors.green.bold('Guardado Correctamente !!!')}`)
    } else {
      console.log(`Se ha ${colors.red.bold('Cancelado')} la captura del ${colors.bgBlue.bold('Alumno')}`)
    }
    read.question(`${colors.yellow.bold('Presiona cualquier tecla para regresar al Menu Principal !!!')}`)
  }
}

module.exports = alumno
