import React from "react";

function Navigation (props) {
    const {
        tabs = [],
        currentTab,
        setCurrentTab
    } = props;

    return (
        <header className="flex-row px-2">
            <h1 className="flex-row">
                <a>
                    Eric Furukawa
                </a>
            </h1>

            <nav>
                <ul className="flex-row">
                    {tabs.map(tab => (
                        <li className={`${tab.name === currentTab.name && 'navActive'}`} key={tab.name}>
                            <span onClick={() => {
                            setCurrentTab(tab)
                            }}
                            >
                            {tab.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;