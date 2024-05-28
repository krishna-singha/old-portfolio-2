import { useState } from 'react';
import Heading from '../common/Heading';
import styles from '../style';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Admin = () => {
    const [contacts, setContacts] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(true);

    const fetchContacts = async (event) => {
        event.preventDefault();
        setLoading(true);
        const response = await fetch(`${BACKEND_URL}/admin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        setContacts(data);
        setLoading(false);
        setForm(false);
    };

    return (
        <section className='mx-4 py-8 min-h-[100vh]'>
            <div className='max-w-[1280px] mx-auto'>
                <Heading title='Admin' />
                {form && (
                    <form onSubmit={fetchContacts} className='bg-boxBg flex flex-col gap-6 max-w-[30rem] mx-auto mt-16 px-6 py-10 rounded-md text-white'>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`${styles.paragraph} px-4 py-2 rounded-md bg-[#ffffff2f] border-[2px] border-transparent focus:border-dimWhite outline-none`}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`${styles.paragraph} px-4 py-2 rounded-md bg-[#ffffff2f] border-[2px] border-transparent focus:border-dimWhite outline-none`}
                        />
                        <button type='submit'
                            className="bg-secondary text-white py-2 mt-4 rounded-md text-xl w-full"
                        >Fetch Data</button>
                    </form>
                )}
                {loading && (
                    <div>
                        <p>Loading...</p>
                    </div>
                )}
                {!form && (
                    <div className='w-full mt-10 overflow-scroll pb-8'>
                        <table className='w-[1260px]'>
                            <thead>
                                <tr className='bg-secondary'>
                                    <th className='text-white font-bold text-xl py-2 px-4'>Sl No</th>
                                    <th className='text-white font-bold text-xl py-2 px-4'>Name</th>
                                    <th className='text-white font-bold text-xl py-2 px-4'>Email</th>
                                    <th className='text-white font-bold text-xl py-2 px-4'>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, index) => (
                                    <tr key={contact._id} className='text-center border-b-[1px] border-border hover:bg-boxBg'>
                                        <td className='max-w-[10px] py-2 text-[1.1rem] cursor-pointer'>{index + 1}</td>
                                        <td className='max-w-[70px] py-2 text-[1.1rem] cursor-pointer'>{contact.name}</td>
                                        <td className='max-w-[100px] py-2 text-[1.1rem] cursor-pointer'>{contact.email}</td>
                                        <td className='max-w-[300px] py-2 text-[1.1rem] cursor-pointer'>{contact.message}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Admin;