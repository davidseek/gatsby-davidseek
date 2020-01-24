import React from "react";
import { Swipeable } from 'react-swipeable'
import { animateScroll, scroller } from 'react-scroll';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Lethargy from "exports-loader?this.Lethargy!lethargy/lethargy";

const bodyScrollLock = require('body-scroll-lock');

export default class FullScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sections: [],
            offset: 0,
            currentPage: 0,
            currentSection: ''
        };

        this.firedEvent = false;
        this.lethargy = new Lethargy(3, 10, 0.05);

        this.sectionContainer = null;
        this.sections = this.props.sections || [];
    }

    componentDidMount() {
        // document.body.style.overflow = 'hidden';
        localStorage.removeItem('currentSection');
        bodyScrollLock.disableBodyScroll(document.getElementsByTagName("html"))

        document.addEventListener(
            'wheel',
            this.scrollDetected,
            { passive: false }
        );
    }

    getCurrentSection() {
        return localStorage.getItem('currentSection') || this.state.currentSection || this.sections[0];
    }

    startCountDown() {
        this.firedEvent = true;
        setTimeout(() => {
            this.firedEvent = false;
        }, 500);
    }

    scrollDetected = e => {
        e.preventDefault()
        // e.stopPropagation();

        const scrollSign = this.lethargy.check(e);

        if (scrollSign !== false) {
            
            if (this.firedEvent) return;
            this.startCountDown();

            console.log('sdf')
            let prevSection = this.getCurrentSection();
            let currentSection = prevSection;
    
            // if (e.nativeEvent.wheelDelta > 0) { // UP
            if (scrollSign > 0) {
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
        return scroller.scrollTo(currentSection, {
            duration: 500,
            delay: 0,
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
        return scroller.scrollTo(currentSection, {
            duration: 500,
            delay: 0,
            smooth: true,
        });
    }

    render() {
        return (
            <div className="FullScreenComponent">

                <Swipeable onSwipedDown={this.onSwipedDown} onSwipedUp={this.onSwipedUp}>
                    {/* <ReactScrollWheelHandler
                    upHandler={this.onSwipedDown}
                    downHandler={this.onSwipedUp}
                    timeout={500}
                    customStyle={{
                        width: '100%',
                        height: '100%',
                        outline: 'none',
                    }}
                    preventScroll={true}> */}
                    <div className="SectionContainer" id="SectionContainer">
                        {this.props.children}
                    </div>
                    {/* </ReactScrollWheelHandler> */}
                </Swipeable>
            </div>
        )
    }
}