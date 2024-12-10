// Archivo MiJuegoDeDados.ts
import { JuegoDeDados } from './JuegoDeDados';
import { Casino } from './Casino';
import { Usuario } from './Usuario';

// Clase derivada específica para tu juego en particular
export class MiJuegoDeDados extends JuegoDeDados {
  valorGanador: number;
  valorMinApuesta: number;
  ParImpar: string;

  // Constructor que inicializa los valores específicos del juego
  constructor(casino: Casino, usuario: Usuario, valorGanador: number = 7, valorMinApuesta: number, ParImpar: string) {
    super(casino, usuario); // Llamada al constructor de la clase base
    this.valorGanador = valorGanador;
    this.valorMinApuesta = valorMinApuesta;
    this.ParImpar = ParImpar;
  }

  // Método específico para comprobar si la suma de los dados es un número ganador (7 u 11)
  comprobarNumeroGanador(): boolean {
    const suma = this.sumarDados();
    return suma === 7 || suma === 11;
  }

  // Método específico para cambiar el valor del número ganador
  setValorGanador(valorGanador: number): void {
    this.valorGanador = valorGanador;
  }

  // Método específico para jugar una ronda del juego
  jugar(): void {
    this.tirarDados();
    console.log(`Dado1: ${this.dado1}, Dado2: ${this.dado2}`);
    console.log(`Suma de los dados: ${this.sumarDados()}`);

    if (this.comprobarNumeroGanador()) {
      console.log('¡Puede seguir tirando!');
    } else {
      console.log('Ud ha perdido');
    }
  }
}