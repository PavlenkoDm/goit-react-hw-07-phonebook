
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { ContactForm } from 'components/index';
import { Filter } from 'components/index';
import { ContactList } from 'components/index';
import { getContacts } from 'store/contacts/operations';


export function Phonebook() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContacts())
    }, [dispatch]);

    return (
        <div>
            <h1>Phonebook</h1>

            <ContactForm />

            <h2>Contacts</h2>

            <Filter />

            <ContactList />
        </div>
    );
}
