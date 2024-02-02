<<<<<<< HEAD
/* eslint-disable react/prop-types */

import styles from "./ContactItem.module.css";

function ContactItem({
    data: { id, name, lastName, email, phone },
    deleteHandler,
}) {

    return (
        <li className={styles.item}>
            <p>{name} {lastName}</p>
            <p>
                <span>📬</span> {email}
            </p>
            <p>
                <span>📞</span> {phone}
            </p>
            <button onClick={() => deleteHandler(id)}>🗑️</button>
        </li>

    );
}
=======

function ContactItem({
    data: { id, name, lastName, email, phone },
    deleteHandler,
}) {

    return (
        <li key={id}>
            <p>{name} {lastName}</p>
            <p>
                <span>📬</span> {email}
            </p>
            <p>
                <span>📞</span> {phone}
            </p>
            <button onClick={() => deleteHandler(id)}>🗑️</button>
        </li>
    );
}

>>>>>>> 0a03c12a100c106fb01d2e549bc3d65ebbc297fb
export default ContactItem;