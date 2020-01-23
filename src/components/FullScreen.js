import React from "react";
import { Swipeable } from 'react-swipeable'
import { animateScroll } from 'react-scroll';

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
        // const gapSectionContailer = this.sectionContainer.getBoundingClientRect().top;
        let tempSections = []
        this.sectionContainer.childNodes.forEach(childNode => {
            tempSections.push(childNode.getBoundingClientRect().top)
        });
        this.setState({
            sections: tempSections
        });
    }

    scrollDetected = (e) => {
        const maxPages = this.state.sections.length;
        let prevCurrentPage = this.state.currentPage;
        let currentPage = prevCurrentPage;

        if (e.nativeEvent.wheelDelta > 0) { // UP
            currentPage = this.state.currentPage - 1 >= 0 ? this.state.currentPage - 1 : currentPage;
            if (prevCurrentPage == currentPage) {
                animateScroll.scrollToTop();
                return;
            }
        } else { // DOWN
            currentPage = this.state.currentPage + 1 < maxPages ? this.state.currentPage + 1 : currentPage;
            if (prevCurrentPage == currentPage) {
                animateScroll.scrollToBottom();
                return;
            }
        }
        this.setState({ currentPage: currentPage })
        animateScroll.scrollTo(this.state.sections[currentPage]);
    }

    onSwipedUp = (e) => {
        const maxPages = this.state.sections.length;
        let prevCurrentPage = this.state.currentPage;
        let currentPage = prevCurrentPage;
        currentPage = this.state.currentPage + 1 < maxPages ? this.state.currentPage + 1 : currentPage;
        if (prevCurrentPage == currentPage) {
            animateScroll.scrollToBottom();
            return;
        }
        this.setState({ currentPage: currentPage })
        animateScroll.scrollTo(this.state.sections[currentPage]);
    }

    onSwipedDown = (e) => {
        let prevCurrentPage = this.state.currentPage;
        let currentPage = prevCurrentPage;
        currentPage = this.state.currentPage - 1 >= 0 ? this.state.currentPage - 1 : currentPage;
        if (prevCurrentPage == currentPage) {
            animateScroll.scrollToTop();
            return;
        }
        this.setState({ currentPage: currentPage })
        animateScroll.scrollTo(this.state.sections[currentPage]);
    }

    render() {
        return (
            <div className="FullScreenComponent">
                <Swipeable onSwipedDown={this.onSwipedDown} onSwipedUp={this.onSwipedUp}>
                    <div className="SectionContainer" id="SectionContainer"
                        onWheel={this.scrollDetected}>
                        {this.props.children}
                    </div>
                </Swipeable>
            </div>
        )
    }
}