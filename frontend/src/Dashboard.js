import React, { Component } from 'react';
import './App.css';
class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="row" className="mb-2 pageheading">
                    <div class="col-sm-12 btn btn-primary">
                        Dashboard 
                    </div>
                </div>
                <div class="row" className="mb-2 pageheading">
                    <div class="col-sm-12 btn btn-primary">
                        Your Profile Info 
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Dashboard;