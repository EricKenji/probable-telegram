import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import 

function App() {
  const [tabs] = useState([
    { name: 'AboutMe' },
    { name: 'Portfolio' },
    { name: 'Contact' },
    { name: 'Resume' },
  ]);

  const [currentTab, setCurrentTab = useState(pages[0])];

  return (
    <div>
      <Navigation
        tabs={tabs}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      />
      <main>
          {currentTab.name === 'AboutMe' && <About />}
          {currentTab.name === 'Portfolio' && <Portfolio />}
          {currentTab.name === 'Contact' && <Contact />}
          {currentTab.name === 'Resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
