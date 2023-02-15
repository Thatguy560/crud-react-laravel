import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from './employeeList/Table'

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <Table />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;