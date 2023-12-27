import React from "react";
import styles from './reviews.module.css'

import NavBar from "../../components/navbar/navbar";

const ReviewsPage = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <h1>Reviews</h1>
        </div>
    )
}

export default ReviewsPage;