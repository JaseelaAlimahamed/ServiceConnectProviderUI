import React from 'react'
import ButtonComponent from '../reUsableComponents/ButtonComponent'
import ModalComponent from '../../components/reUsableComponents/ModalComponent'

const ComplaintInput = ({isOpen, onClose, getApiCall}) => {
  return (
    <div>
      <div className="flex flex-col space-y-2 mt-4">
        <form onSubmit={getApiCall}></form>
            <input
              type="text"
              placeholder="Title"

              className="h-14 px-4 py-2 shadow-boxshadow-1 rounded-xl border border-gray-600 outline-none"

            />

            <textarea
              placeholder="Description"

              className="min-h-40 px-4 py-2 shadow-boxshadow-1 rounded-xl border border-gray-600 outline-none"
            />

            <div className="relative bg-primary h-14 px-4 py-2 shadow-boxshadow-1 rounded-xl">

              <input
                type="file"
                className="opacity-0 absolute right-4 w-6 h-6 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
              />

              <img
                src="/uploadimg-icon.svg"
                alt="upload data"
                className=" absolute right-4 w-6 h-6 top-1/2 transform -translate-y-1/2 z-0"
              />
            </div>
          </div>

          <div className="mt-4" onClick={onClose}>
            <ButtonComponent

              label="Conform Complaint"
              btnColor="bg-[#670200]"
              btnWidth="w-full"
              btnHeight="h-[52px]"
              variant='complaint'
            />


           
            <ModalComponent
              isOpen={isOpen}
              onClose={onClose}
              width="300px"

              height="170px"
              children={
                <div className="flex items-center justify-center h-full">
                  <div>
                    <p className='text-center mb-4'>Are you sure you want to submit complaint?</p>
                    <ButtonComponent
                      type="submit"
                      label="Conform Complaint"
                      btnWidth="w-full"
                      btnHeight="min-h-[46px]"
                      variant="complaint"
                      onClick={()=>{getApiCall("Conform Complaint"), onClose()}}

                    />
                  </div>
                </div>
              }
            />
          </div>
    </div>
  )
}

export default ComplaintInput

