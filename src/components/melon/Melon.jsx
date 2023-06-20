import { useEffect, useState } from 'react';
import { MelonContainer } from '../styled/melonStyle'
import axios from 'axios'
import MelonForm from './MelonForm';
import MelonList from './MelonList';
import MelonModal from './MelonModal';


const Melon = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState(null);
    const [dataList, setDataList] = useState([]);
    const [modalData, setModalData] = useState({});
    useEffect(() => {
        axios.get('https://gist.githubusercontent.com/audrhks29/d8cbcf93d6f01fb1acf988c655158a64/raw/2d6761f66bc3ea2f020f026d2c78070f1808cc23/music.json')
            .then(res => {
                setData(res.data)
                setDataList(res.data)
                setLoading(true)
                setError(null)
            })
            .catch(error => {
                setData([])
                setLoading(false)
                setError("주소를 찾을 수 없습니다.")
            })
    }, [])
    const getDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}년 ${month}월 ${day}일 `;
    }
    const onSearch = (text) => {
        setData(dataList.filter(item => item.title.toLowerCase().indexOf(text.toLowerCase()) !== -1))
    }
    const onLike = (id) => {
        setData(data.map(item => item.id === id ? { ...item, like: !item.done ? item.like + 1 : item.like - 1, done: !item.done } : item))
    }
    const onOpen = (id) => {
        setModalData(data.find(item => item.id === id))
        setIsOpen(true)
    }
    const onClose = (e) => {
        setIsOpen(false)
    }
    return (
        <MelonContainer>
            <h2>Mango {getDate()} 인기차트 </h2>
            <MelonForm onSearch={onSearch} />
            <MelonList data={data} onLike={onLike} onOpen={onOpen} />
            {isOpen && <MelonModal onClose={onClose} modalData={modalData} />}
        </MelonContainer>
    );
};

export default Melon;