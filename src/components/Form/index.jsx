import { useState } from "react";

import styles from './Form.module.css';

const Form = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    
    const calculaIMC = () => {
        let imc = peso / (altura ** 2);
            return imc.toFixed(1);
    }

    return (
        <div className="container">
            <form className={styles.form}>
                <div className={styles.peso}>
                    <label className={styles.formLabel}>Peso: </label>
                    <input className={styles.formInput} type="number" placeholder="80.50" onChange={evento => setPeso(parseFloat(evento.target.value))}  />
                </div>
                <div className={styles.altura}>
                    <label className={styles.formLabel}>Altura: </label>
                    <input className={styles.formInput} type="number" placeholder="1.85" onChange={evento => setAltura(parseFloat(evento.target.value))} />
                </div>
            </form>
            <div className={styles.tabela}>
                <table>
                    <thead>
                        <div>
                            <tr>
                                <th>IMC (kg/m²)</th>
                                <th>Classificação</th>
                            </tr>
                        </div>
                    </thead>
                    <tbody>
                        <div className={calculaIMC() > 0 && calculaIMC() < 18.5 ? styles.ativo : styles.inativo}>
                            <tr>
                                <td>Menor que 18,5</td>
                                <td>Abaixo do peso</td>
                            </tr>
                        </div>
                        <div className={calculaIMC() >= 18.5 && calculaIMC() <= 24.9  ? styles.ativo : styles.inativo}>
                            <tr>
                                <td>18,5 – 24,9</td>
                                <td>Peso normal</td>
                            </tr>
                        </div>
                        <div className={calculaIMC() >= 25 && calculaIMC() <= 29.9  ? styles.ativo : styles.inativo}>
                            <tr>
                                <td>25 – 29,9</td>
                                <td>Sobrepeso</td>
                            </tr>
                        </div>
                        <div className={calculaIMC() >= 30 && calculaIMC() <= 34.9  ? styles.ativo : styles.inativo}>
                            <tr>
                                <td>30 – 34,9</td>
                                <td>Obesidade grau 1</td>
                            </tr>
                        </div>
                        <div className={calculaIMC() >= 35 && calculaIMC() <= 39.9  ? styles.ativo : styles.inativo}>
                            <tr>
                                <td>35 – 39,9</td>
                                <td>Obesidade grau 2</td>
                            </tr>
                        </div>
                        <div className={calculaIMC() >= 40  ? styles.ativo : styles.inativo}>
                            <tr>
                                <td>40 ou mais</td>
                                <td>Obesidade grau 3</td>
                            </tr>
                        </div>
                    </tbody>
                </table>
            </div>
            <footer>
                {peso > 0 && altura > 0 && (
                    <p>Seu IMC é: <span>{calculaIMC()}</span></p>
                )}
            </footer>
        </div>
    )
}

export default Form;