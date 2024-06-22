import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from './common/Heading';
import { BACKEND_URL } from "../config";
import { useRecoilValue } from 'recoil';
import { userAtom } from './store/user.atom';

const BuildMessage = () => {
    const navigate = useNavigate();
    const [build, setBuild] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = useRecoilValue(userAtom);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const getData = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/admin/build`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: user.email, uid: user.uid }),
                    signal
                });
                
                if (response.status === 401) {
                    console.log('You are not authorized to view this page');
                    setBuild([]);
                    setLoading(false);
                } else {
                    const data = await response.json();
                    setBuild(data);
                    setLoading(false);
                }
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Fetch error: ', error);
                    setLoading(false);
                }
            }
        };

        if (user) {
            getData();
        }

        return () => controller.abort();
    }, [user, navigate]);

    const deleteData = async (event) => {
        const elementIndex = event.target.closest('tr').firstChild.innerHTML;
        const id = build[elementIndex - 1]._id;

        try {
            const response = await fetch(`${BACKEND_URL}/admin/build/${id}`, {
                method: 'DELETE',
            });

            if (response.status === 200) {
                const newBuild = build.filter((contact) => contact._id !== id);
                setBuild(newBuild);
            }
        } catch (error) {
            console.error('Delete error: ', error);
        }
    };

    return (
        <section className='mx-4 pt-16 pb-8 min-h-screen'>
            <div className='max-w-[1280px] mx-auto'>
                <Heading title='Build messages' />

                {!user && (
                    <div className='flex justify-center items-center min-h-[85vh]'>
                        <p className='text-2xl'>You are not logged in to view this page</p>
                    </div>
                )}

                {loading && (
                    <div className='flex justify-center items-center min-h-[85vh]'>
                        <p className='text-2xl'>Loading...</p>
                    </div>
                )}

                {user && !loading && build.length === 0 && (
                    <div className='flex justify-center items-center min-h-[85vh]'>
                        <p className='text-2xl'>You are not authorized to view this page</p>
                    </div>
                )}

                {user && !loading && build.length > 0 && (
                    <div className='w-full mt-10 overflow-scroll pb-8'>
                        <table className='w-[1360px]'>
                            <thead>
                                <tr className='bg-secondary'>
                                    <th className='text-white font-bold text-xl py-2 px-4'>Sl No</th>
                                    <th className='text-white font-bold text-xl py-2 px-4'>Date</th>
                                    <th className='text-white font-bold text-xl py-2 px-4'>Name</th>
                                    <th className='text-white font-bold text-xl py-2 px-4'>Email</th>
                                    <th className='text-white font-bold text-xl py-2 px-4'>Details</th>
                                    <th className='text-white font-bold text-xl py-2 px-4'>Budget</th>
                                    <th className='text-white font-bold text-xl py-2 px-4'>Trash</th>
                                </tr>
                            </thead>
                            <tbody>
                                {build.map((contact, index) => (
                                    <tr key={contact._id} className='text-center border-b-[1px] border-border hover:bg-[#ffffff1d]'>
                                        <td className='max-w-[50px] py-2 px-1 text-[1.1rem] cursor-pointer id'>{index + 1}</td>
                                        <td className='max-w-[110px] py-2 px-1 text-[1.1rem] cursor-pointer'>{contact.createdAt.slice(0, 10)}</td>
                                        <td className='max-w-[240px] py-2 px-1 text-[1.1rem] cursor-pointer'>{contact.name}</td>
                                        <td className='max-w-[330px] py-2 px-1 text-[1.1rem] cursor-pointer'>{contact.email}</td>
                                        <td className='max-w-[500px] py-2 px-1 text-[1.1rem] cursor-pointer break-words'>{contact.projectDetails}</td>
                                        <td className='max-w-[100px] py-2 px-1 text-[1.1rem] cursor-pointer'>{contact.budget}</td>
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
};

export default BuildMessage;
