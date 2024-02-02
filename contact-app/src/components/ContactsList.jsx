<<<<<<< HEAD
/* eslint-disable react/prop-types */
import ContactItem from "./ContactItem";

import styles from "./ContactsList.module.css"

function ContactsList({ contacts, deleteHandler }) {
    return (
        <div className={styles.container}>
            <h3>Contacts List</h3>
            {contacts.length ? (<ul className={styles.contacts}>
                {contacts.map(contact => (
                    <ContactItem key={contact.id} data={contact} deleteHandler={deleteHandler} />
                ))}
            </ul>) : <p className={styles.message}>No Contact Yet!</p>}

        </div>
    );
}
export default ContactsList;
=======
import ContactItem from "./ContactItem";

function ContactsList(constants, deleteHandler) {
    return (
        <div>
            <h3>Contacts List</h3>
            {constants.lenght ? (<ul>
                {
                    constants.map((contact) => (
                        <ContactItem key={contact.id}
                            data={contact}
                            deleteHandler={deleteHandler} />
                    ))}
            </ul>
            ) : (
                <p>No Contact Yet!</p>
            )}

        </div>
    );
}

export default ContactsList
>>>>>>> 0a03c12a100c106fb01d2e549bc3d65ebbc297fb
