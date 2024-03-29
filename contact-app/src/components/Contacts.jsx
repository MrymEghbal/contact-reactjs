<<<<<<< HEAD
import { useState } from "react";
import ContactsList from "./contactsList";
import inputs from "../constants/inputs";
import { v4 } from "uuid";
import styles from "./Contacts.module.css";

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [alert, setAlert] = useState("");
    const [contact, setContact] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setContact((contact) => ({ ...contact, [name]: value }));
    };

    const addHandler = () => {

        if (!contact.name || !contact.lastName || !contact.email || !contact.phone) {
            setAlert("Please enter valid data!");
            return;
        }
        setAlert("");
        const newContact = { ...contact, id: v4() };
        setContacts((contacts) => [...contacts, newContact]);
        setContact({
            name: "",
            lastName: "",
            email: "",
            phone: "",
        })
    };

    const deleteHandler = (id) => {
        const newContacts = contacts.filter(contact => contact.id !== id);
        setContacts(newContacts);
    };

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                {inputs.map((input, index) => (
                    <input
                        key={index}
                        type={input.type}
                        placeholder={input.placeholder}
                        name={input.name}
                        value={contact[input.name]}
                        onChange={changeHandler}
                    />
                ))}
                <button onClick={addHandler}>Add Contact</button>
            </div>
            <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
            <ContactsList contacts={contacts} deleteHandler={deleteHandler} />

        </div>
    )
}

=======
import { useState } from "react";
import ContactsList from "./contactsList";
import inputs from "../constants/inputs";
import { v4 } from "uuid";
import styles from "./Contacts.module.css";

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [alert, setAlert] = useState("");
    const [contact, setContact] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setContact((contact) => ({ ...contact, [name]: value }));
    };

    const addHandler = () => {

        if (!contact.name || !contact.lastName || !contact.email || !contact.phone) {
            setAlert("Please enter valid data!");
            return;
        }
        setAlert("");
        const newContact={...contact, id:v4()};
        setContacts((contacts) => [...contacts, newContact]);
        setContact({
            name: "",
            lastName: "",
            email: "",
            phone: "",
        })
    };

    const deleteHandler=(id)=>{
        const newContacts=contacts.filter(contact=>contact.id!==id);
        setContacts(newContacts);
    }

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                {inputs.map((input, index) => (
                    <input
                        key={index}
                        type={input.type}
                        placeholder={input.placeholder}
                        name={input.name}
                        value={contact[input.name]}
                        onChange={changeHandler}
                    />
                ))}
                <button onClick={addHandler}>Add Contact</button>
            </div>
            <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
            <ContactsList contacts={contacts} deleteHandler={deleteHandler} />
        </div>
    )
}

>>>>>>> 0a03c12a100c106fb01d2e549bc3d65ebbc297fb
export default Contacts;