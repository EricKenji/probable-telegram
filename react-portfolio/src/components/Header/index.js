import React from "react";

function Header (props) {
    const { currentTab, setCurrentTab } = props;

    return (
        <header>
            <div className="full-name">
                <h1>Eric Furukawa</h1>
            </div>
            <div>
                <Navigation
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                ></Navigation>
            </div>
        </header>
    );
}

export default Header;