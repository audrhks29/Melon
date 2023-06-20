import { AiFillHeart, AiOutlineHeart, AiFillVideoCamera } from "react-icons/ai";
import { FcUp, FcMinus, FcDown } from "react-icons/fc"
import Numeral from "numeral"
const MelonItem = ({ item, onLike, onOpen }) => {
    const { album, done, id, key, like, poster, rank, singer, state, title } = item
    return (
        <tr >
            <td>{rank}</td>
            <td className="img">
                <img src={poster} alt={title} width="60" />
                <p className="img">
                    <span>{title}</span>
                    {singer}
                </p>
            </td>
            <td>
                {album}
            </td>
            <td className="like">
                <i onClick={() => onLike(id)}>
                    {done ? <AiFillHeart /> : <AiOutlineHeart />}
                </i>
                {Numeral(like).format('0,0')}
            </td>
            <td>
                <i onClick={() => onOpen(id)}>
                    < AiFillVideoCamera />
                </i>
            </td>
            <td>
                {state === '상승' && <FcUp />}
                {state === '유지' && <FcMinus />}
                {state === '하강' && <FcDown />}
                <span style={{ marginLeft: 10 }}>
                    {state}
                </span>
            </td>
        </tr >
    )
}
export default MelonItem;