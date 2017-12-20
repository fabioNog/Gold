import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import IF from '../template/if'

export default props => {
    if (props.hide) {

        return null

    }
    else {

        return (
            <IF test={!props.hide}>
            <RaisedButton
                label="primary"
                type="button"
                className={props.className}
                onClick={props.onClick}>
            </RaisedButton>
            </IF>
        )
    }
}