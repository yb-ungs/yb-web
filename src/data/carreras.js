export const CARRERAS_DISPONIBLES = [
  { id: 'lic-sistemas', nombre: 'Licenciatura en Sistemas' }
]

export const PLANES = {
  'lic-sistemas': {
    nombre: 'Licenciatura en Sistemas',
    cuatrimestres: [
      {
        numero: 1, label: '1° Cuatrimestre',
        materias: [
          { id: 'IPC', nombre: 'Introducción al Pensamiento Científico', creditos: 4, requisitos: [] },
          { id: 'AP1', nombre: 'Algoritmos y Programación I', creditos: 8, requisitos: [] },
          { id: 'MAT1', nombre: 'Matemática I', creditos: 8, requisitos: [] },
        ]
      },
      {
        numero: 2, label: '2° Cuatrimestre',
        materias: [
          { id: 'EAA', nombre: 'Escritura y Argumentación Académica', creditos: 4, requisitos: [] },
          { id: 'AP2', nombre: 'Algoritmos y Programación II', creditos: 8, requisitos: ['AP1'] },
          { id: 'MAT2', nombre: 'Matemática II', creditos: 8, requisitos: ['MAT1'] },
        ]
      },
      {
        numero: 3, label: '3° Cuatrimestre',
        materias: [
          { id: 'AP3', nombre: 'Algoritmos y Programación III', creditos: 8, requisitos: ['AP2'] },
          { id: 'MAT3', nombre: 'Matemática III', creditos: 8, requisitos: ['MAT2'] },
          { id: 'OC', nombre: 'Organización del Computador', creditos: 6, requisitos: ['AP1'] },
        ]
      },
      {
        numero: 4, label: '4° Cuatrimestre',
        materias: [
          { id: 'AP4', nombre: 'Algoritmos y Programación IV', creditos: 8, requisitos: ['AP3'] },
          { id: 'BD1', nombre: 'Bases de Datos I', creditos: 6, requisitos: ['AP2'] },
          { id: 'SO', nombre: 'Sistemas Operativos', creditos: 6, requisitos: ['OC'] },
        ]
      },
      {
        numero: 5, label: '5° Cuatrimestre',
        materias: [
          { id: 'IS1', nombre: 'Ingeniería de Software I', creditos: 6, requisitos: ['AP3'] },
          { id: 'BD2', nombre: 'Bases de Datos II', creditos: 6, requisitos: ['BD1'] },
          { id: 'REDES', nombre: 'Redes de Computadoras', creditos: 6, requisitos: ['SO'] },
          { id: 'PROB', nombre: 'Probabilidad y Estadística', creditos: 6, requisitos: ['MAT2'] },
        ]
      },
      {
        numero: 6, label: '6° Cuatrimestre',
        materias: [
          { id: 'IS2', nombre: 'Ingeniería de Software II', creditos: 6, requisitos: ['IS1'] },
          { id: 'LC', nombre: 'Lenguajes y Compiladores', creditos: 6, requisitos: ['AP4'] },
          { id: 'SEC', nombre: 'Seguridad Informática', creditos: 6, requisitos: ['REDES'] },
          { id: 'IO', nombre: 'Investigación Operativa', creditos: 6, requisitos: ['PROB', 'MAT3'] },
        ]
      },
      {
        numero: 7, label: '7° Cuatrimestre',
        materias: [
          { id: 'AS', nombre: 'Arquitectura de Software', creditos: 6, requisitos: ['IS2'] },
          { id: 'PI1', nombre: 'Proyecto Integrador I', creditos: 6, requisitos: ['IS2'] },
          { id: 'OPT1', nombre: 'Optativa I', creditos: 6, requisitos: [] },
        ]
      },
      {
        numero: 8, label: '8° Cuatrimestre',
        materias: [
          { id: 'PI2', nombre: 'Proyecto Integrador II', creditos: 6, requisitos: ['PI1'] },
          { id: 'OPT2', nombre: 'Optativa II', creditos: 6, requisitos: [] },
          { id: 'TF', nombre: 'Trabajo Final', creditos: 16, requisitos: ['PI2', 'AS'] },
        ]
      },
    ]
  }
}
