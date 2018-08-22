import Loading from './Loading.jsx';

export default class Data {

    static getData() {
        Loading.addLoading();
        var xhr = new XMLHttpRequest();
        var body = 'str=' + encodeURIComponent('getData');
        xhr.open("POST", "/HomePage/GetData", false);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        var data = null;
        xhr.onreadystatechange = (function () {
            if (xhr.readyState == 4 && xhr.status == 200) 
                data = JSON.parse(xhr.responseText);
        });
        xhr.send(body);
        Loading.removeLoading();
        return data;
    }
}