import styles from './style.module.css';
import React, { useRef } from "react";
const Slider = ({ children, step = 200 }) => {
    const sliderRef = useRef(null);
    const scrollLeft = () => {
        const duration = 120; // Время выполнения в миллисекундах
        const pixelsPerStep = step / (duration / 10); // Сколько пикселей прокручивать за каждый шаг
        const steps = duration / 10; // Количество шагов
        let currentStep = 0;
        const interval = setInterval(() => {
            if (!sliderRef.current)
                return;
            sliderRef.current.scrollLeft -= pixelsPerStep;
            currentStep++;
            if (currentStep >= steps) {
                clearInterval(interval); // Останавливаем интервал, когда достигли нужного положения
            }
        }, 10); // Каждые 10 миллисекунд обновляем прокрутку
    };
    const scrollRight = () => {
        const duration = 100; // Время выполнения в миллисекундах
        const pixelsPerStep = step / (duration / 10); // Сколько пикселей прокручивать за каждый шаг
        const steps = duration / 10; // Количество шагов
        let currentStep = 0;
        const interval = setInterval(() => {
            if (!sliderRef.current)
                return;
            sliderRef.current.scrollLeft += pixelsPerStep;
            currentStep++;
            if (currentStep >= steps) {
                clearInterval(interval); // Останавливаем интервал, когда достигли нужного положения
            }
        }, 10); // Каждые 10 миллисекунд обновляем прокрутку
    };
    return (React.createElement("div", { className: styles.slider },
        React.createElement("button", { onClick: scrollLeft, className: styles.arrow }, '<'),
        React.cloneElement(children, { ref: sliderRef }),
        React.createElement("button", { onClick: scrollRight, className: styles.arrow }, '>')));
};
export default Slider;
