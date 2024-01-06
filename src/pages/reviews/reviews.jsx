import React from "react";
import styles from "./reviews.module.css";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const ReviewsPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <h1>Reviews</h1>
            <Footer />
        </div>
    );
};

export default ReviewsPage;
