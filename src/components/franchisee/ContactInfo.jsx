import React from 'react'

function ContactInfo({ contactData }) {
    return (
    <>
     <div className='px-4 pb-10'>
        <div className="mt-4 w-full mx-auto bg-slate-200 text-gray-700 shadow-lg rounded-lg overflow-hidden">
            <div className="p-4 border-b">
                <h3 className="text-xl text-black font-bold">Contact info</h3>
            </div>
            <div className="p-4">
                {contactData.map((item, index) => (
                    <div key={index} className="mb-2">
                        <strong>{item.label} : </strong> {item.value}
                    </div>
                ))}
            </div>
        </div>
        </div>
    </>
    )
}

export default ContactInfo