import Rect from 'react'
import TextField from 'material-ui/TextField/TextField';
import PropTypes from 'prop-types';

const TextFieldGrup = ({field,value,label,error,type,onChange}) => {
    return (
        <div>
        </div>
    )
}

TextFieldGrup.propTypes = {

    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error : PropTypes.string,
    type : PropTypes.string.isRequired,
    onChange : PropTypes.string.isRequired
}

export default TextFieldGrup;