"use client";
import { useState } from "react";
import styles from "../styles/interfaces.module.css";

const minusArray: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
const mayusArray: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numerosArray: string[] = "0123456789".split("");
const especialArray: string[] = "!@#$%^&*".split("");

const Interface: React.FC = () => {
  const [password, isPassword] = useState<string>("AAAA0000");
  const [range, isRange] = useState<number>(8);
  const [minusculas, isMinusculas] = useState<boolean>(true);
  const [mayusculas, isMayusculas] = useState<boolean>(false);
  const [numeros, isNumeros] = useState<boolean>(false);
  const [especiales, isEspecial] = useState<boolean>(false);

  const rangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    isRange(Number(e.target.value));
  };
  const letrasMinusculas = () => isMinusculas(!minusculas);
  const letrasMayusculas = () => isMayusculas(!mayusculas);
  const letrasNumeros = () => isNumeros(!numeros);
  const letrasEspecial = () => isEspecial(!especiales);

  let collectionWords: string = "";
  const generatePassword = () => {
    let collectionArray: string[] = [];
    if (minusculas) collectionArray = collectionArray.concat(minusArray);
    if (mayusculas) collectionArray = collectionArray.concat(mayusArray);
    if (numeros) collectionArray = collectionArray.concat(numerosArray);
    if (especiales) collectionArray = collectionArray.concat(especialArray);

    if (!minusculas && !mayusculas && !numeros && !especiales) {
      return alert("Debes seleccionar al menos una opción");
    } else {
      collectionWords = "";
      for (let i = 0; i < range; i++) {
        const math = Math.floor(Math.random() * collectionArray.length);
        collectionWords += collectionArray[math];
      }
      isPassword(collectionWords);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Generador de Contraseñas</h1>
        <p>Personaliza y genera contraseñas seguras</p>
      </div>

      <div className={styles.settings}>
        <div className={styles.rangeInput}>
          <label htmlFor="range">Longitud: {range}</label>
          <input
            id="range"
            type="range"
            min={8}
            max={64}
            value={range}
            onChange={rangePassword}
          />
        </div>

        <div className={styles.checkboxes}>
          <label>
            <input
              type="checkbox"
              checked={minusculas}
              onChange={letrasMinusculas}
            />
            Letras minúsculas
          </label>
          <label>
            <input
              type="checkbox"
              checked={mayusculas}
              onChange={letrasMayusculas}
            />
            Letras mayúsculas
          </label>
          <label>
            <input type="checkbox" checked={numeros} onChange={letrasNumeros} />
            Números
          </label>
          <label>
            <input
              type="checkbox"
              checked={especiales}
              onChange={letrasEspecial}
            />
            Caracteres especiales
          </label>
        </div>
      </div>

      <div className={styles.actions}>
        <button onClick={generatePassword}>Generar Contraseña</button>
      </div>

      <div className={styles.result}>
        <div className={styles.conteiner_contra}>
          <h2>Contraseña Generada:</h2>
          <div className={styles.contra}>{password}</div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
