import { useState, useEffect } from 'react';
import Heading from './common/Heading';
import { BACKEND_URL } from "../config"
import { useRecoilValue } from 'recoil';
import { userAtom } from './store/user.atom';

const ContactMessage = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = useRecoilValue(userAtom);

    useEffect(() => {
        const getData = async () => {
            const contacts = await fetch(`${BACKEND_URL}/admin/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: user.email, uid: user.uid }),
            });
            const data = await contacts.json();
            if (contacts.status === 401) {
                console.log('You are not authorized to view this page');
                setLoading(false);
                return;
            }
            setContacts(data);
            setLoading(false);
        }
        { user && getData() }
    }, [user]);

    const deleteData = async (event) => {
        const element = event.target.parentElement.parentElement.firstChild.innerHTML;
        const id = contacts[element - 1]._id;
        const deleteData = await fetch(`${BACKEND_URL}/admin/contact/${id}`, {
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
                <Heading title='Contact messages' />

                {!user && (
                    <div className='flex justify-center items-center min-h-[85vh]'>
                        <p className='text-2xl'>You are not authorized to view this page</p>
                    </div>
                )}

                {user && loading && (
                    <div className='flex justify-center items-center min-h-[85vh]'>
                        <p className='text-2xl'>Loading...</p>
                    </div>
                )}
                {user && !loading && (
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
                )
                }
            </div>
        </section>
    );
}

export default ContactMessage;