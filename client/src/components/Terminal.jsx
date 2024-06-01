import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from './common/Heading';
import styles from './style';
import { StylishBtn } from './common/export';

const Terminal = () => {
    const [history, setHistory] = useState([]);
    const [currentInput, setCurrentInput] = useState("");
    const inputRef = useRef(null);

    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path);
    };


    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            const input = event.target.value.trim();
            processCommand(input);
            setCurrentInput("");
        }
    };

    const processCommand = (input) => {
        let output;
        switch (input.toLowerCase()) {
            case "help":
                output = (
                    <div>
                        <p className='font-mono'>available commands:</p>
                        <div><span className='text-secondary'>rd-projects: &nbsp;</span><span>this will redirect you to projects page.</span></div>
                        <div><span className='text-secondary'>rd-contact: &nbsp;</span><span>this will redirect you to contact me page.</span></div>
                        {/* <div><span className='text-secondary'>my-name: &nbsp;</span><span>tells your name.</span></div>
                        <div><span className='text-secondary'>my-email: &nbsp;</span><span>tells your gmail id.</span></div> */}
                        <div><span className='text-secondary'>get-loc: &nbsp;</span><span>get your current location.</span></div>
                        <div><span className='text-secondary'>get-date: &nbsp;</span><span>get today's date.</span></div>
                        <div><span className='text-secondary'>get-time: &nbsp;</span><span>get current time.</span></div>
                        <div><span className='text-secondary'>clear: &nbsp;</span><span>clears out everything on screen!</span></div>
                    </div>
                );
                break;
            case "rd-projects":
                output = "redirecting to projects page...";
                setTimeout(() => {
                    navigateTo("/projects");
                }, 2000);
                break;
            case "rd-contact":
                output = "redirecting to contact me page...";
                setTimeout(() => {
                    navigateTo("/contact");
                }, 2000);
                break;
            // case "my-name":
            //     output = "fetching your name...";
            //     break;
            // case "my-email":
            //     output = "fetching your email...";
            //     break;
            case "get-loc":
                output = "this feature is not available yet!";
                break;
            case "get-date":
                output = `${new Date().toISOString().slice(0, 10)}`;
                break;
            case "get-time":
                output = `${new Date().toLocaleTimeString()}`;
                break;
            case "clear":
                setHistory([]);
                return;
            default:
                output = "command not found!";
                break;
        }
        setHistory([...history,
        <div key={history.length} className='text-secondary'><span className='text-dimWhite'>krishnasingha@MacBook-Air ~ % &nbsp;</span>{input}</div>,
        <div key={history.length + 1} className='text-secondary'>{output}</div>
        ]);
    };


    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <>
            <Heading title="Terminal" />
            <section className="px-4 mt-4 mb-8">
                <div
                    className="hide-scrollbar relative max-w-[1280px] mx-auto px-6 pb-6 border-[1px] border-border h-[40rem] overflow-y-scroll scroll-smooth scroll-hidden rounded-xl"
                    onClick={handleClick}
                >
                    <div className="flex justify-between items-center sticky top-0 h-[3.5rem] bg-primary">
                        <div className='flex items-center gap-2'>
                            <div className="close bg-[#fc5b57] w-[13px] h-[13px] rounded-full"></div>
                            <div className="close bg-[#e5bf3c] w-[13px] h-[13px] rounded-full"></div>
                            <div className="close bg-[#57c038] w-[13px] h-[13px] rounded-full"></div>
                        </div>
                        <div>
                            <StylishBtn text={"Just for fun"} />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className='mb-4'>
                            <p className={`${styles.paragraph} font-mono`}>Welcome aboard! type `<span className='text-secondary'>help</span>` to see what you can do here.</p>
                        </div>
                        <div className={`${styles.paragraph} flex flex-col gap-2`}>
                            {history.map((line, index) => (
                                <div key={index}>{line}</div>
                            ))}
                            <div className='flex w-full'>
                                <div className='w-fit flex items-center'>
                                    <span className='text-dimWhite text-nowrap'>krishnasingha@MacBook-Air ~ % &nbsp;</span>
                                </div>
                                <div className='w-full'>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent outline-none text-secondary"
                                        value={currentInput}
                                        onChange={(e) => setCurrentInput(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        ref={inputRef}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Terminal;
