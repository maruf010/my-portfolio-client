import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div>
                <ScaleLoader
                    height={40}
                    width={4}
                    margin={2}
                    radius={2}
                    color="#581299"
                    loading={true}
                />
            </div>
        </div>
    );
};

export default Loading;