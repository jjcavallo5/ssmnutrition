import React, { useState } from "react";
import styles from "./contact.module.css";

import SocialsLinks from "../../components/socials/socials";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

const ContactPage = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
        activity: "select",
        occupation: "",
        notes: "",
    });

    const sendForm = () => {
        console.log("Hullo");
    };

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.header}>
                <h1>Connect With Me</h1>
                <p>Have a question about your nutritional goals?</p>
                <h2>Contact me by filling out the form!</h2>
            </div>
            <form className={styles.form}>
                <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    value={formValues.name}
                    onChange={(e) =>
                        setFormValues({ ...formValues, name: e.target.value })
                    }
                />
                <input
                    name="phone"
                    type="text"
                    placeholder="Phone"
                    value={formValues.phone}
                    onChange={(e) =>
                        setFormValues({ ...formValues, phone: e.target.value })
                    }
                />
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={formValues.email}
                    onChange={(e) =>
                        setFormValues({ ...formValues, email: e.target.value })
                    }
                />
                <input
                    name="occupation"
                    type="text"
                    placeholder="Occupation"
                    value={formValues.occupation}
                    onChange={(e) =>
                        setFormValues({
                            ...formValues,
                            occupation: e.target.value,
                        })
                    }
                />
                <select
                    name="activity"
                    value={formValues.activity}
                    onChange={(e) =>
                        setFormValues({
                            ...formValues,
                            activity: e.target.value,
                        })
                    }
                >
                    <option value="select">--Select Activity Level--</option>
                    <option value="inactive">Inactive</option>
                    <option value="moderate">Moderate</option>
                    <option value="active">Active</option>
                </select>

                <textarea
                    name="nutritonal-goals"
                    placeholder="Nutrutional Goals"
                    value={formValues.notes}
                    onChange={(e) =>
                        setFormValues({ ...formValues, notes: e.target.value })
                    }
                />

                <input
                    name="submit"
                    value="Submit"
                    className={styles.submit}
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        sendForm();
                    }}
                />
            </form>

            <SocialsLinks />
            <Footer />
        </div>
    );
};

export default ContactPage;
