import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// import React from 'react';
// import ReactDOM from 'react-dom';

// const title = 'My Minimal React Webpack Babel Setup';

// ReactDOM.render(
//   <div>{title}</div>,
//   document.getElementById('app')
// );