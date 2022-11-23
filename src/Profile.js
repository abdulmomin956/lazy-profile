import React, { useRef, useState } from 'react';
import { LoadingProfile } from './LoadingProfile';
import clsx from "clsx";
import useLazyLoad from './useLazyLoad';


const NUM_PER_PAGE = 5;
const TOTAL_PAGES = 2;

const Profile = () => {
    const [page, setPage] = useState(1)
    const triggerRef = useRef(null);
    const onGrabData = (currentPage) => {
        // console.log(currentPage);
        // This would be where you'll call your API
        return new Promise((resolve) => {
            setTimeout(() => {
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    .then(json => {
                        resolve(json.slice(
                            ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
                            NUM_PER_PAGE * currentPage
                        ))
                        setPage(currentPage)
                    }
                    )

            }, 0);
        });
    };

    const { data, loading } = useLazyLoad({ triggerRef, onGrabData, options: { totalPages: TOTAL_PAGES } });
    return (
        <div className="grid grid-cols-1 gap-1 content-start">
            {
                data.map((u, i) =>
                    <div className="w-[60rem] rounded overflow-hidden shadow mx-auto" key={i}>
                        <div className="w-full h-30 flex">
                            <img className='w-[10vw] h-[10rem] m-3 rounded-full border' src={`https://avatars.dicebear.com/api/male/${u.username}.svg`} alt="" />
                            <div className='px-6 py-4 flex flex-col justify-center'>
                                <h3 className='text-2xl font-bold'>{u.name}{u.id}</h3>
                                <p>Phone: {u.phone}</p>
                                <p>Email: {u.email}</p>
                                <p>Address: {u.address?.street}, {u.address?.city}</p>
                            </div>
                        </div>
                    </div>
                )
            }

            <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
                {
                    page < TOTAL_PAGES && <LoadingProfile />
                }
            </div>

        </div>
    );
};

export default Profile;