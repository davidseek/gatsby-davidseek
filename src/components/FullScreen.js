import React from "react";
import { Swipeable } from 'react-swipeable'

export default class FullScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sections: [],
            offset: 0,
            currentPage: 0,
        };

        this.sectionContainer = null;
    }

    componentDidMount() {
        document.body.style.overflow = 'hidden';
        this.sectionContainer = document.getElementById('SectionContainer');
        const gapSectionContailer = this.sectionContainer.getBoundingClientRect().top;
        let tempSections = []
        this.sectionContainer.childNodes.forEach(childNode => {
            tempSections.push(childNode.getBoundingClientRect().top - gapSectionContailer)
        });
        this.setState({
            sections: tempSections
        });
    }

    scrollDetected = (e) => {
        const maxPages = this.state.sections.length;
        let currentPage = this.state.currentPage;

        if (e.nativeEvent.wheelDelta > 0) { // UP
            currentPage = this.state.currentPage - 1 >= 0 ? this.state.currentPage - 1 : currentPage;
        } else { // DOWN
            currentPage = this.state.currentPage + 1 < maxPages ? this.state.currentPage + 1 : currentPage;
        }
        this.setState({ currentPage: currentPage, offset: -this.state.sections[currentPage] })
    }

    onSwipedUp = (e) => {
        const maxPages = this.state.sections.length;
        let currentPage = this.state.currentPage;
        currentPage = this.state.currentPage + 1 < maxPages ? this.state.currentPage + 1 : currentPage;
        this.setState({ currentPage: currentPage, offset: -this.state.sections[currentPage] })
        
    }

    onSwipedDown = (e) => {
        let currentPage = this.state.currentPage;
        currentPage = this.state.currentPage - 1 >= 0 ? this.state.currentPage - 1 : currentPage;
        this.setState({ currentPage: currentPage, offset: -this.state.sections[currentPage] })
    }

    render() {
        const cssContainer = { transform: `translate3d(0,${this.state.offset}px,0)` };

        return (
            <div className="FullScreenComponent">
                <Swipeable onSwipedDown={this.onSwipedDown} onSwipedUp={this.onSwipedUp}>
                    <div className="SectionContainer" id="SectionContainer" style={cssContainer}
                        onWheel={this.scrollDetected}>
                        {this.props.children}
                    </div>
                </Swipeable>
            </div>
        )
    }
}