import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

export default class NewsItem extends Component {
    render() {
        let {key, title,description,imageurl,url} = this.props;
        return (
            <div>
                <div className="card" style={{ width: '19rem' }}>
                    <img src={(imageurl===null||imageurl==="")?"https://s.yimg.com/os/creatr-uploaded-images/2022-04/19e9be10-b684-11ec-bd7f-48730a43e137":imageurl} className="card-img-top" alt="No Image" />
                    <div className="card-body">
                        <h5 className="card-title">{`${title.length>=47}..`?title.slice(0,47):title}</h5>
                        <p className="card-text">{(description===null||description==="")?"Click To View More":(description.length>=58?`${description.slice(0,58)}....`:description)}</p>
                        <a className="btn btn-primary btn1" target={'_blank'} href={url}>Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
