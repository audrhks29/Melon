import { useEffect, useState } from 'react';
import { MelonFormContainer } from '../styled/melonStyle'


const MelonForm = ({ onSearch }) => {
    const [text, setText] = useState('')

    const changeInput = (e) => {
        const { value } = e.target
        setText(value)
        onSearch(value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        onSearch(text)
    }
    useEffect(() => {
        onSearch(text)
    }, [text])

    return (
        <MelonFormContainer className="MelonForm" onSubmit={onSubmit}>
            <input type="text" placeholder="곡명을 검색하세요" value={text} onChange={changeInput} />
        </MelonFormContainer>
    );
};

export default MelonForm;