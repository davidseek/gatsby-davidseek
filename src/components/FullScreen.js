import React from "react";
import { Swipeable } from 'react-swipeable'
import { animateScroll, scroller } from 'react-scroll';

export default class FullScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sections: [],
            offset: 0,
            currentPage: 0,
            currentSection: ''
        };

        this.sectionContainer = null;
        this.sections = this.props.sections || [];
    }

    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }

    getCurrentSection() {
        return localStorage.getItem('currentSection') || this.state.currentSection || this.sections[0];
    }

    scrollDetected = (e) => {
        let prevSection = this.getCurrentSection();
        let currentSection = prevSection;

        if (e.nativeEvent.wheelDelta > 0) { // UP
            for (var i = 0; i < this.sections.length; i++) {
                if (this.sections[i] == prevSection) {
                    currentSection = this.sections[i - 1 >= 0 ? i - 1 : i];
                    break;
                }
            }
            if (prevSection == currentSection) {
                animateScroll.scrollToTop();
                return;
            }
        } else { // DOWN
            for (var i = 0; i < this.sections.length; i++) {
                if (this.sections[i] == currentSection) {
                    currentSection = this.sections[i + 1 < this.sections.length ? i + 1 : i];
                    break;
                }
            }
            if (prevSection == currentSection) {
                animateScroll.scrollToBottom();
                return;
            }
        }
        this.setState({ currentSection: currentSection })
        localStorage.removeItem('currentSection');
        scroller.scrollTo(currentSection, {
            duration: 500,
            smooth: true,
        });
    }

    onSwipedUp = (e) => {
        let prevSection = this.getCurrentSection();
        let currentSection = prevSection;
        for (var i = 0; i < this.sections.length; i++) {
            if (this.sections[i] == currentSection) {
                currentSection = this.sections[i + 1 < this.sections.length ? i + 1 : i];
                break;
            }
        }
        if (prevSection == currentSection) {
            animateScroll.scrollToBottom();
            return;
        }
        this.setState({ currentSection: currentSection })
        localStorage.removeItem('currentSection');
        scroller.scrollTo(currentSection, {
            duration: 500,
            smooth: true,
        });
    }

    onSwipedDown = (e) => {
        let prevSection = this.getCurrentSection();
        let currentSection = prevSection;

        for (var i = 0; i < this.sections.length; i++) {
            if (this.sections[i] == prevSection) {
                currentSection = this.sections[i - 1 >= 0 ? i - 1 : i];
                break;
            }
        }
        if (prevSection == currentSection) {
            animateScroll.scrollToTop();
            return;
        }

        this.setState({ currentSection: currentSection })
        localStorage.removeItem('currentSection');
        scroller.scrollTo(currentSection, {
            duration: 500,
            smooth: true,
        });
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