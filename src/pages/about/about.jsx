import React from "react";
import styles from "./about.module.css";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import StarIcon from "../../icons/star";

import zahidRunning from "../../images/runningZahid.jpg";
import graduationZahid from "../../images/graduationZahid.jpg";
import backgroundTexture2 from "../../images/backgroundTexture2.jpg";

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.bodyContainer}>
                <img
                    src={zahidRunning}
                    alt="A picture of zahid running in college"
                    srcset=""
                    className={styles.zahidRunning}
                />
                <div className={styles.rightSide}>
                    <h1 className={styles.header}>Hello, I'm Zahid</h1>
                    <h2 className={styles.subHeader}>
                        I am a registered dietitian looking to help athletes and
                        former athletes get closer to their fitness goals
                        through nutrition.
                    </h2>
                    <p className={styles.rightSideText}>
                        I've been there. I know what it's like to be a
                        high-level student athlete, and often, nutrition can be
                        the difference between being good and being exceptional.
                        When athletes prioritize their nutrition, they perform
                        better in workouts, recover faster, are less likely to
                        be injured, and most importantly, outperform others on
                        game day. Let's meet and discuss how you, too, can
                        achieve greatness through nutrition.
                    </p>
                    <button className={styles.meetNow}>
                        Set up a meeting!
                    </button>
                </div>
            </div>

            <div className={styles.qualificationsContainer}>
                <img
                    src={backgroundTexture2}
                    alt=""
                    srcset=""
                    className={styles.backgroundTexture}
                />

                <div className={styles.qualificationsContent}>
                    <img
                        src={graduationZahid}
                        alt="An image of Zahid in his cap and gown"
                        srcset=""
                        className={styles.graduationZahid}
                    />

                    <div className={styles.qualificationsRightSide}>
                        <h1 className={styles.qualificationsHeader}>
                            My Qualifications
                        </h1>
                        <div className={styles.qualificationsListItems}>
                            <h2 className={styles.qualificationName}>
                                Registered Dietitian
                            </h2>
                            <h3 className={styles.qualificationLocation}>
                                IDK where this is from
                            </h3>
                            <h2 className={styles.qualificationName}>
                                Bachelors of Science in Dietetics
                            </h2>
                            <h3 className={styles.qualificationLocation}>
                                Wayne State University
                            </h3>
                            <h2 className={styles.qualificationName}>
                                2 Years of Clinical Experience
                            </h2>
                            <h3 className={styles.qualificationLocation}>
                                IDK where
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.reviewsContainer}>
                <h1>Reviews from customers</h1>
                <h2>See what previous clients have to say</h2>

                <div className={styles.reviewCardContainer}>
                    <div className={styles.card}>
                        <h1>Jeremy Cavallo</h1>
                        <h2>D2 XC Runner</h2>
                        <div className={styles.starContainer}>
                            <StarIcon size={15} />
                            <StarIcon size={15} />
                            <StarIcon size={15} />
                            <StarIcon size={15} />
                            <StarIcon size={15} />
                        </div>

                        <p className={styles.reviewContent}>
                            <i>
                                Zahid helped me out a ton with my nutrition!
                                Because of him, I now get take out from Sy Thai
                                at least twice a week and always fold when
                                someone suggests McDonalds. The love handles are
                                sure to be on their way as soon as I stop
                                running!
                            </i>
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h1>Brady Heron</h1>
                        <h2>Gambling Addict</h2>
                        <div className={styles.starContainer}>
                            <StarIcon size={15} />
                            <StarIcon size={15} />
                            <StarIcon size={15} />
                            <StarIcon size={15} />
                            <StarIcon size={15} />
                        </div>

                        <p className={styles.reviewContent}>
                            <i>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Atque tempore eum, maxime in
                                incidunt dicta id ipsum at cupiditate qui
                                expedita, quaerat unde.
                            </i>
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h1>Tony Dynamite</h1>
                        <h2>Jolly Pumpkin Cook</h2>
                        <div className={styles.starContainer}>
                            <StarIcon size={15} />
                            <StarIcon size={15} />
                            <StarIcon size={15} />
                            <StarIcon size={15} />
                            <StarIcon size={15} />
                        </div>

                        <p className={styles.reviewContent}>
                            <i>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Odit explicabo error numquam
                                aliquam natus nam, quibusdam impedit tempore ea
                                deserunt, aliquid a voluptates, possimus neque.
                                Iste commodi accusantium maiores minus!
                            </i>
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h1>Ty Nagy</h1>
                        <h2>Certified Bum</h2>
                        <div className={styles.starContainer}>
                            <StarIcon size={15} />
                            <StarIcon size={15} />
                            <StarIcon size={15} />
                            <StarIcon size={15} />
                            <StarIcon size={15} />
                        </div>

                        <p className={styles.reviewContent}>
                            <i>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quisquam mollitia tenetur et,
                                voluptatum praesentium dolorum odio iusto
                                molestiae, beatae, cumque maiores aliquam
                                corrupti eveniet saepe culpa. Possimus alias
                                voluptatibus eligendi beatae tempore molestias
                                nemo iste.
                            </i>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;
