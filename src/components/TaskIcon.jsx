import { SlPencil as EditIcon } from "react-icons/sl";
import { RiCheckLine as CheckIcon } from "react-icons/ri";
import { RiCloseLine as DeleteIcon} from "react-icons/ri";

const iconsTypes = {
    "check":(color) => <CheckIcon className="icon-svg" fill={color} />,
    "edit":(color) => <EditIcon className="icon-svg" fill={color} />,
    "delete":(color) => <DeleteIcon className="icon-svg" fill={color} />,
}

function TaskIcon({ type, color, onClick }) {
    return (
        <span
        className={`icon icon-${type}`}
        onClick={onClick}
        >
            {iconsTypes[type](color)}
        </span>
    );
}

export { TaskIcon };