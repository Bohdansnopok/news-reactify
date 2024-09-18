import React from 'react';
import styles from './style.module.css';
import { forwardRef } from "react";
const Categories = forwardRef(({ categories, setSelectedCategory, selectedCategory }, ref) => {
    return (React.createElement("div", { ref: ref, className: styles.categories },
        React.createElement("button", { onClick: () => setSelectedCategory(null), className: !selectedCategory ? styles.active : styles.item }, "All"),
        categories.map(category => {
            return (React.createElement("button", { onClick: () => setSelectedCategory(category), className: selectedCategory === category ? styles.active : styles.item, key: category }, category));
        })));
});
Categories.displayName = 'Categories';
export default Categories;
