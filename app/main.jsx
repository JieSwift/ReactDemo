import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import LikeButton from './components/LikeButton/LikeButton'
import MyComponent from './components/MyCompnent/MyComponent';
import NoteList from './components/NoteList/NoteList';
import LoginCtrl from './components/Login/LoginController';
import Warning from './components/ShowWarn/Warning';
import NumberMap from './components/Map/NumberMap';
import NameForm from './components/Form/FormCom';
import EssayForm from './components/Form/EssayForm';
import Calculator from './components/Form/FormCalculator';
import SignUpDialog from './components/Dialog/Diolog';

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement('div'))
);

ReactDOM.render(
  <LikeButton name="Tom" />,
  document.body.appendChild(document.createElement('div'))
);

ReactDOM.render(
  <NoteList />,
  document.body.appendChild(document.createElement('div'))
);

ReactDOM.render(
  <MyComponent />,
  document.body.appendChild(document.createElement('div'))
);

ReactDOM.render(
  <LoginCtrl />,
  document.body.appendChild(document.createElement('div'))
);


ReactDOM.render(
  <Warning />,
  document.getElementById('root')
);

ReactDOM.render(
  <NumberMap />,
  document.body.appendChild(document.createElement('div'))
);

ReactDOM.render(
  <NameForm />,
  document.body.appendChild(document.createElement('div'))
);
ReactDOM.render(
  <EssayForm />,
  document.body.appendChild(document.createElement('div'))
);


ReactDOM.render(
  <Calculator />,
  document.body.appendChild(document.createElement('div'))
);

ReactDOM.render(
  <SignUpDialog />,
  document.body.appendChild(document.createElement('div'))
);
