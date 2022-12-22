import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';

const AddNewMovie = ({ handleAdd }) => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const handleRating = (x) => {
        setRating(x);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMovie = {
            id: Math.random(),
            name,

            rating
        };
        handleAdd(newMovie);
        closeModal();
        setName("");
        setRating(0);
    }


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    Modal.setAppElement('#root');
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <button className='btn-primary' onClick={openModal}>Add</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit}>
                    <label>Movie Name</label>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} required />
                    <label>Movie Poster</label>

                    <StarRating rating={rating} handleRating={handleRating} />
                    
                    <div>
                        <button className='btn' type='submit'>Add movie</button>
                        <button className='btn' onClick={closeModal}>Cancel</button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default AddNewMovie