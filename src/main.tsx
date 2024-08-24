import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./style.css";
import "./right_section.css";
import "./left_section.css";
import "./transitions.css";

const RightSection = ({ page }: { page: number }) => {
    switch (page) {
        case 0:
            return (
                <h2>Hi, my name is Léo GREGORI</h2>
            );
        case 1:
            return <h2>Section 1</h2>;
        case 2:
            return <h2>Section 2</h2>;
        default:
            return <h2>Default Section</h2>;
    }
};

export default function Main() {
    const [page, setPage] = useState<number>(0);

    return (
        <div className="container">
            <div className="left-section">
                <div className="left-section-block1">
                    <a className="title-link" href="#" onClick={() => setPage(0)}>portfolio</a>
                    <div className="head-link">
                        <a href="https://github.com/xmarano">GitHub</a>
                        <a href="http://linkedin.com/in/leogregori">LinkedIn</a>
                        <a href="mailto:leo.gregori@epitech.eu">Email</a>
                        <a href="assets/cv_leo-gregori.pdf" download>CV</a>
                    </div>
                </div>
                <div className="left-section-block2">
                    <p>PROJECTS</p>
                    <a href="#" onClick={() => setPage(1)}>Deliveries</a>
                    <a href="#" onClick={() => setPage(2)}>Portfolio</a>
                    <a href="#" onClick={() => setPage(3)}>You&Me</a>
                </div>
                <div className="left-section-block2">
                    <p>EPITECH</p>
                    <a href="#" onClick={() => setPage(4)}>My Rpg</a>
                    <a href="#" onClick={() => setPage(5)}>My Hunter</a>
                    <a href="#" onClick={() => setPage(6)}>Corewar</a>
                    <a href="#" onClick={() => setPage(7)}>42sh</a>
                </div>
            </div>
            <div className="right-section">
                <TransitionGroup>
                    <CSSTransition key={page} timeout={300} classNames="fade">
                        <RightSection page={page} />
                    </CSSTransition>
                </TransitionGroup>
            </div>
            <div className="date">May '24</div>
        </div>
    );
}
