import React, { Component } from 'react';

export default class Footer extends Component { 
    render() { 
        return (
            <div className="row footer" onClick={this.testT.bind(this)}>
                2018. Created by&nbsp; <a href="http://s-ponomarev.ru"> Ponomarev S.</a>
            </div>
        ); 
    }

    shouldComponentUpdate() {
        return false;
    }

    testT() {
        var xhr = new XMLHttpRequest();
        //var body = 'str=' + encodeURIComponent('getData');
        xhr.open("POST", "/HomePage/Test", true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //var data = null;
        xhr.onreadystatechange = (function () {
            if (xhr.readyState == 4 && xhr.status == 200)
                console.log(xhr.responseText);
        });
        xhr.send(null);
        //return data;
    }
} 