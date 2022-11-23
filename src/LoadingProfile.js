// import React from 'react';
export const LoadingCard = () => {
    return (
        <div className="w-[60rem] rounded overflow-hidden shadow mx-auto">
            <div className="w-full h-30 flex">
                <div className="w-[10vw] h-[10rem] m-3 bg-gray-300 rounded-full animate-pulse" />
                <div className="px-6 py-4 flex flex-col justify-center items-center animate-pulse">
                    <div className="font-regular text-xl mb-2 w-20 h-4 bg-gray-300 "></div>
                    <div className="font-regular text-xl mb-2 w-20 h-4 bg-gray-300 "></div>
                    <div className="font-regular text-xl mb-2 w-20 h-4 bg-gray-300 "></div>
                    <div className="font-regular text-xl mb-2 w-20 h-4 bg-gray-300 "></div>
                </div>
            </div>
        </div>
    );
}

export const LoadingProfile = () => {
    const loadPages = [1, 2, 3, 4, 5];
    return (
        <div className="grid grid-cols-1 gap-1 content-start">
            {loadPages.map((num, i) => { return < LoadingCard key={i} /> })}
        </div>
    );
};

