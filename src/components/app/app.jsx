import React from 'react';

import { Route, Switch } from "react-router-dom";

// import '@gpn-design/uikit/dist/style.css';
// import { Button } from '@gpn-design/uikit';

const App = ({gpApiService}) => {
  return (
    <div className="app">
      <Switch>
        <Route path='/' exact render={() => <div>TODO: app structure</div>}/>
      </Switch>
      
      {
      /* <body
        className="theme theme_breakpoint_default theme_color_gpn-default theme_control_gpn-default theme_font_small theme_gap_small theme_size_gpn-default theme_space_default"
      >
        <Button 
          type="button" 
          view="primary" 
          wpSize="l" 
          from="default" 
          width="auto">Кнопка</Button>
      </body> */}
    </div>
  );
}

export default App;
