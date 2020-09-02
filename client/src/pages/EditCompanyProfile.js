import React, { Component } from 'react'
import UpdateCompanyProfile from "../components/EditCompanyProfile";


export default class EditCompanyProfile extends Component {

    render() {
        return (
            <>
                <UpdateCompanyProfile auth={this.props.auth}
                    history={this.props.history}></UpdateCompanyProfile>
            </>
        )
    }
}
