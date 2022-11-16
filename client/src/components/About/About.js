import React from 'react';
import styled from "styled-components";
import { keyframes } from "styled-components";
// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import styles from './About.module.css';

const shine = keyframes`
to {
    background-position: 400% center;
  }
`;

const AnimatedGradientText = styled.h1`
  animation: ${shine} 20s infinite linear;
  background: linear-gradient(45deg, #01ed64 0%, #047ae0 25%, #f9d123 50%, #047ae0 75%, #01ed64 100%);
  background-size: 300%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin:0;
`;

export const About = () => {  
    return (
        <div className={`${styles.aboutContainer}`}>
            <div className={`${styles.aboutDataContainer}`}>
                <h1 className={`${styles.aboutTitle}`}><AnimatedGradientText>About</AnimatedGradientText></h1>
                <div>
                    <p className={`${styles.aboutContent}`}>
                        LNMIIT has had an exponential growth in its technological advancements and also in becoming a hub for technology pioneering and academic excellence and "Plinth" is one such forum where the institute's capabilities are widely exhibited.<br />
                        PLINTH is the annual inter-tier Techno-Management Festival of the LNMIIT, Jaipur. This three-day festival is the amalgamation of science and fiesta witnessing the forte of acclaimed personalities.<br />
                        Plinth hosts more than 6000 students from accross the colleges in the country, catering to a vast number of diverse technical events, including art and culture. This event will revolve around Web-3 and aims to flicker a conversation on how web-3 opens doors for young developers and creators of design, and develop a better understanding of today's cloud driven economies.<br />
                        The institute has an impeccable track record of excedding the expectations of the youth attendees as well as the sponsors through the annual fests thus, earning the reputation of hosting unparalleled events in northern India after IITs and BITS.<br />
                        With an amazingly motivated and optimistic student chapter and a greatly favouring management, every year PLINTH proves to a better rendition of itself.
                    </p>
                </div>
            </div>
        </div>
    )
}
