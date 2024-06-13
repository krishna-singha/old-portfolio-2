import { useState } from 'react';
import Heading from '../common/Heading';
import styles from '../style';
import { BACKEND_URL } from "../../config"
import { toast } from 'react-toastify';

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
        // console.log(data);
        if (response.status === 401) {
            toast.error('Invalid credentials');
            setLoading(false);
            return;
        }
        setContacts(data);
        setLoading(false);
        setForm(false);
    };

    const deleteData = async (event) => {
        const element = event.target.parentElement.parentElement.firstChild.innerHTML;
        const id = contacts[element - 1]._id;
        const deleteData = await fetch(`${BACKEND_URL}/admin/${id}`, {
            method: 'DELETE',
        });
        if (deleteData.status === 200) {
            const newContacts = contacts.filter((contact) => contact._id !== id);
            setContacts(newContacts);
        }
    }

    return (
        <section className='mx-4 pt-16 pb-8 min-h-screen'>
            <div className='max-w-[1280px] mx-auto'>
                <Heading title='Admin' />
                {form && !loading && (
                    <form onSubmit={fetchContacts} className='bg-boxBg flex flex-col gap-6 max-w-[30rem] mx-auto mt-16 px-6 py-10 rounded-md text-white'>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`${styles.paragraph} px-4 py-2 rounded-md bg-[#ffffff2f] border-[2px] border-transparent focus:border-dimWhite outline-none`}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`${styles.paragraph} px-4 py-2 rounded-md bg-[#ffffff2f] border-[2px] border-transparent focus:border-dimWhite outline-none`}
                            required
                        />
                        <button type='submit'
                            className="bg-secondary text-white py-2 mt-4 rounded-md text-xl w-full"
                        >Fetch Data</button>
                    </form>
                )}
                {loading && (
                    <div className='flex justify-center items-center min-h-[85vh]'>
                        <p>Loading...</p>
                    </div>
                )}
                {!form && !loading && (
                    <div className='w-full mt-10 overflow-scroll pb-8'>
                        <table className='w-[1260px]'>
                            <thead>
                                <tr className='bg-secondary'>
                                    <th className=' text-white font-bold text-xl py-2 px-4'>Sl No</th>
                                    <th className=' text-white font-bold text-xl py-2 px-4'>Date</th>
                                    <th className=' text-white font-bold text-xl py-2 px-4'>Name</th>
                                    <th className=' text-white font-bold text-xl py-2 px-4'>Email</th>
                                    <th className=' text-white font-bold text-xl py-2 px-4'>Message</th>
                                    <th className=' text-white font-bold text-xl py-2 px-4'>Trash</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, index) => (
                                    <tr key={contact._id} className='text-center border-b-[1px] border-border hover:bg-[#ffffff1d]'>
                                        <td className='max-w-[50px] py-2 px-1 text-[1.1rem] cursor-pointer id' >{index + 1}</td>
                                        <td className='max-w-[110px] py-2 px-1 text-[1.1rem] cursor-pointer id' >{contact.createdAt.slice(0, 10)}</td>
                                        <td className='max-w-[240px] py-2 px-1 text-[1.1rem] cursor-pointer'>{contact.name}</td>
                                        <td className='max-w-[330px] py-2 px-1 text-[1.1rem] cursor-pointer'>{contact.email}</td>
                                        <td className='max-w-[500px] py-2 px-1 text-[1.1rem] cursor-pointer'>{contact.message}</td>
                                        <td className='max-w-[50px] py-2 px-1 text-[1.1rem] cursor-pointer'>
                                            <i className="fa-solid fa-trash-can" onClick={deleteData}></i>
                                        </td>
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