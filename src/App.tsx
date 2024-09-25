import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/comida';
import Tab2 from './pages/lugares';
import Tab3 from './pages/emergencia';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/comida">
            <Tab1 />
          </Route>
          <Route exact path="/lugares">
            <Tab2 />
          </Route>
          <Route path="/emergencia">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/comida" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="comida" href="/comida">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Comida</IonLabel>
          </IonTabButton>
          <IonTabButton tab="lugares" href="/lugares">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Lugares</IonLabel>
          </IonTabButton>
          <IonTabButton tab="emergencia" href="/emergencia">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Emergencia</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
