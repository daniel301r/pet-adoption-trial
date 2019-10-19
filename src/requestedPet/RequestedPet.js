

// then image gallery that you can select different photos
// if only one pet put image in middle and then black on the sides

import React, { Component } from 'react'
import SelectBar from './SelectBar';

class RequestedPet extends Component {

    // move to next pet

    // move to previous pet

    render() {
        return (
            <div>
                <SelectBar />
            </div>
        )
    }
}

export default RequestedPet;
