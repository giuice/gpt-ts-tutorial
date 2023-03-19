import React, { useState, useCallback, useMemo, useDeferredValue } from 'react';
import './App.css';
import UserList from './Components/UserList';
import ClickCounter from './Components/ClickCounter';
import withClickCounter from './Components/WithClickCounter';
import MyComponent from './Components/MyComponent';
import ChildComponent from './Components/ChildComponent';
import SuspendedSearchResults from './Components/SearchResults';

const EnhancedClickCounter = withClickCounter(ClickCounter);

const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  const longText = useMemo(() => {
    console.log('Expensive calculation');
    return 'A very long string'.repeat(1000);
  }, []);

  const handleClick = useCallback(() => {
    console.log('Button Clicked');
  }, []);

  return (
    <div className="App">
      <h1>Click Counter</h1>
      <EnhancedClickCounter />
      <div>
        <input value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Procurar..." />
        {deferredQuery && <SuspendedSearchResults query={deferredQuery} />}
      </div>
      <UserList />
      <ChildComponent onClick={handleClick} />
      <MyComponent text={longText} />
    </div>
  );
};

export default App;
