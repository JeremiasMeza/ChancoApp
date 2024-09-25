import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './lugares.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lugares Turisticos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">lugares</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Pagina Lugares" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
