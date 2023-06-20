import { AiOutlineClose } from 'react-icons/ai';
import { MelonModalBox } from '../styled/melonStyle'

const MelonModal = ({ onClose, modalData }) => {
    const { title, singer, key } = modalData;
    return (
        <MelonModalBox className="Modal">
            <div className="bg" onClick={onClose}></div>
            <div className="popup">
                <h2>{title} </h2>
                <div>
                    <iframe src={`https://www.youtube.com/embed/${key}`} frameborder="0"></iframe>
                </div>
                <p>{singer} </p>
                <span>
                    <i onClick={onClose}> <AiOutlineClose /> </i>
                </span>
            </div>
        </MelonModalBox>
    );
};

export default MelonModal;