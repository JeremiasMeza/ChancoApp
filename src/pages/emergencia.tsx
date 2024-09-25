import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './emergencia.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Servicios de Emergencias</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Emergencia</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Pagina emergencia" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
