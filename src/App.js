import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Provider } from 'react-redux';

//Layout
import Searchbar from './component/layout/Searchbar';
import Addbtn from './component/layout/Addbtn';
// Component
import Logs from './component/logs/logs';
import AddLogModal from './component/logs/AddLogModal';
import EditLogModal from './component/logs/EditLogModal';
import AddTechModal from './component/techs/AddTechModal';
import TechListModal from './component/techs/TechListModal';
import store from './store';

const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <Searchbar />
        <div className="container">
          <Addbtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
