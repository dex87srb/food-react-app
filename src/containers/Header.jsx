import React from 'react';


const Header = (props) => {

    return (
        <header >
            <div className="wrapper">
                <a id="logo" href="http://localhost:3000/">iFood</a>
                <section className="recipe-count">
                    <span className="recipe-count-number">{props.count}</span>
                    <span className="recipe-count-label">results</span>
                </section></div>

        </header>
    );
}



export default Header;