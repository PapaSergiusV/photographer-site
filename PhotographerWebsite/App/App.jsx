import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';
import PopUpWindow from './PopUpWindow.jsx';
import Data from './Data.jsx';

var data = Data.getData();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { page: 'home', PUWIsOpen: false, PUWPicId: 0 };
        this.toPage = this.toPage.bind(this);
        this.closePUW = this.closePUW.bind(this);
        this.openPUW = this.openPUW.bind(this);
    }

    render() {
        return (
            <div className="container-fluid">
                {this.state.PUWIsOpen ? <PopUpWindow close={this.closePUW} pictures={data.pictures.slice(0, this.state.page === 'home' ? 6 : data.pictures.length)} id={this.state.PUWPicId} /> : null}
                <Navbar menu={data.menu} toPage={this.toPage} holder={data.holder} />
                <Content request={this.state.page} data={data} openPUW={this.openPUW} />
                <Footer />
            </div>
        );
    }

    toPage(page) {
        if (page !== this.state.page)
            this.setState({ page: page });
    }

    closePUW() {
        this.setState({ PUWIsOpen: false });
    }

    openPUW(event) {
        try {
            var id = parseInt(event.nativeEvent.toElement.id.toString().match(/(\d+)/i)[0], 10);
            this.setState({ PUWIsOpen: true, PUWPicId: id });
        }
        catch (error) {
            console.log(error);
        }
    }
}

export default App;
