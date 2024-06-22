import Heading from '../common/Heading';
import { useNavigate } from 'react-router-dom';

const Admin = () => {

    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path);
    }

    return (
        <section className='mx-4 pt-16 pb-8 min-h-screen'>
            <div className='max-w-[1280px] mx-auto'>
                <Heading title='Admin' />
                <div className='flex gap-8 justify-center mt-20'>
                    <div onClick={() => navigateTo('/admin/contact-message')} className='group border border-dimWhite px-6 py-10 cursor-pointer max-w-[15rem] rounded-md flex justify-center items-center hover:bg-boxBg'>
                        <h2 className='text-2xl text-center group-hover:text-secondary'>Contact Messages</h2>
                    </div>
                    <div onClick={() => navigateTo('/admin/build-message')} className='group border border-dimWhite px-6 py-10 cursor-pointer max-w-[15rem] rounded-md flex justify-center items-center hover:bg-boxBg'>
                        <h2 className='text-2xl text-center group-hover:text-secondary'>Freelance Project Messages</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Admin;
