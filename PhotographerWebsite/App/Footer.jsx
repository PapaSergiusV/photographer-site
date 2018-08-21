import React, { Component } from 'react';

export default class Footer extends Component { 
    render() { 
        return (
            <div className="row footer" onClick={this.testTest.bind(this)}>
                2018. Created by&nbsp; <a href="http://s-ponomarev.ru"> Ponomarev S.</a>
            </div>
        ); 
    }

    shouldComponentUpdate() {
        return false;
    }

    testTest() {
        var xhr = new XMLHttpRequest();
        var body = 'str=' + encodeURIComponent('getData');
        xhr.open("POST", "/HomePage/Test", false);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = (function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var email = JSON.parse(xhr.responseText);
                alert("Letter:" + "\nName: " + email.name + "\nPhone: " + email.phone + "\nText: " + email.text);
                console.log(email);
            }
        });
        xhr.send(body);
    }


} 