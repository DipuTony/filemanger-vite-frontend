import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { MdOutlineClose } from 'react-icons/md'
import axios from 'axios';
import ApiList from '../../Components/ApiLIst';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999, // Set a higher value for z-index
    },
};



// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function AddModuleMaster(props) {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [data, setData] = useState({
        token: '', module: ''
    })
    const { api_addConsumer, header } = ApiList()

    useEffect(() => {
        openModal()
    }, [])

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() { }

    function closeModal() {
        setIsOpen(false);
        props.closeModal(false)
    }

    const handleSubmit = () => {

        const payload = {
            "token": data.token,
            "module": data.token
        }

        axios.post(api_addConsumer, payload, header)
            .then((res) => {
                console.log("MOdule Added Suceess")
                closeModal()
            })

        console.log("submit data", data)
    }

    return (
        <div className='z-50'>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='flex justify-end cursor-pointer rounded-full shadow-gray-300 ' onClick={closeModal}>

                    <MdOutlineClose />
                </div>

                {/* Rate Chart Table Start  */}
                <div className="space-y-2">
                    <div>
                        <p>Token</p>
                        <input onChange={(e) => setData({ ...data, token: e.target.value })} type="text" className='border rounded shadow' />
                    </div>
                    <div>
                        <p>Module</p>
                        <input onChange={(e) => setData({ ...data, module: e.target.value })} type="text" className='border rounded shadow' />
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={() => handleSubmit()} type='button' className='border rounded shadow px-3 py-1'>Submit</button>
                    </div>


                </div>

                {/* Rate Chart Table END */}

            </Modal>
        </div>
    );
}
export default AddModuleMaster