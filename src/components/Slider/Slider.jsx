import styles from './style.module.css'
import React, {useRef} from "react";

const Slider = ({children, step = 200}) => {
    const sliderRef = useRef(null)

    const scrollLeft = () => {
        const duration = 120; // Время выполнения в миллисекундах
        const pixelsPerStep = step / (duration / 10); // Сколько пикселей прокручивать за каждый шаг
        const steps = duration / 10; // Количество шагов
        let currentStep = 0;

        const interval = setInterval(() => {
            sliderRef.current.scrollLeft -= pixelsPerStep;
            currentStep++;

            if (currentStep >= steps) {
                clearInterval(interval); // Останавливаем интервал, когда достигли нужного положения
            }
        }, 10); // Каждые 10 миллисекунд обновляем прокрутку
    }

    const scrollRight = () => {
        const duration = 100; // Время выполнения в миллисекундах
        const pixelsPerStep = step / (duration / 10); // Сколько пикселей прокручивать за каждый шаг
        const steps = duration / 10; // Количество шагов
        let currentStep = 0;

        const interval = setInterval(() => {
            sliderRef.current.scrollLeft += pixelsPerStep;
            currentStep++;

            if (currentStep >= steps) {
                clearInterval(interval); // Останавливаем интервал, когда достигли нужного положения
            }
        }, 10); // Каждые 10 миллисекунд обновляем прокрутку
    }

    return (
        <div className={styles.slider}>
            <button onClick={scrollLeft} className={styles.arrow}>{'<'}</button>
            {React.cloneElement(children, {ref: sliderRef})}
            <button onClick={scrollRight} className={styles.arrow}>{'>'}</button>
        </div>
    )
};

export default Slider
