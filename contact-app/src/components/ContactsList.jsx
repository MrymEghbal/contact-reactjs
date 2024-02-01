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