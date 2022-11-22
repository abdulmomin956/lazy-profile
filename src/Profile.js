import React, { useEffect, useRef, useState } from 'react';
import { LoadingProfile } from './LoadingProfile';
import clsx from "clsx";
import useLazyLoad from './useLazyLoad';


const NUM_PER_PAGE = 4;
const TOTAL_PAGES = 3;

const Profile = () => {
    const [users, setUsers] = useState([])
    const triggerRef = useRef(null);
    const onGrabData = (currentPage) => {
        // This would be where you'll call your API
        return new Promise((resolve) => {
            setTimeout(() => {
                const data = users.slice(
                    ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
                    NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
                );
                // console.log(data);
                resolve(data);
            }, 1000);
        });
    };
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, [])

    const { data, loading } = useLazyLoad({ triggerRef, onGrabData });
    console.log(users);
    return (
        <div className="grid grid-cols-1 gap-4 content-start">
            {
                data.map((u, i) =>
                    <div className="w-[60rem] rounded overflow-hidden shadow mx-auto" key={i}>
                        <div className="w-full h-30 flex">
                            <img className='w-[10vw] h-[10rem] m-3 rounded-full border' src={`https://avatars.dicebear.com/api/male/${u.username}.svg`} alt="" />
                            <div className='px-6 py-4 flex flex-col justify-center'>
                                <h3 className='text-2xl font-bold'>{u.name}</h3>
                                <p>Phone: {u.phone}</p>
                                <p>Email: {u.email}</p>
                                <p>Address: {u.address?.street}, {u.address?.city}</p>
                            </div>
                        </div>
                    </div>
                )
            }
            <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
                <LoadingProfile />
            </div>
        </div>
    );
};

export default Profile;