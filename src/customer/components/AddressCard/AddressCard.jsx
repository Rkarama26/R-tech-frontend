import React from 'react';

const AddressCard = ({address}) => {
    return (
        <div>
            <div className='space-y-2'>
                <p className='font-semibold'>{address?.firstName + ", "+address?.lastName}</p>
         
         <p>
         {`${address?.streetAddress} ${address?.city} ${address?.state} ${address?.zipCode}`}
         </p>
                <div space-y-1>
                    <p className='font-semibold'>{address?.mobile}</p>
                    <p>{address?.alternativeMobile}</p>
                </div>
            </div>
            
        </div>
        
    );
}

export default AddressCard;
