import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './comida.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Comida</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Comida</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Componente ExploreContainer */}
        <ExploreContainer name="Página Comida" />

        {/* Aquí insertamos la tarjeta (IonCard) */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Encuentra un lugar para comer</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="/images/restaurantlasrocas.jpg" />
                </IonThumbnail>
                <IonLabel>Restaurant Las Rocas Loanco</IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </IonThumbnail>
                <IonLabel>Item 2</IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </IonThumbnail>
                <IonLabel>Item 3</IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </IonThumbnail>
                <IonLabel>Item 3</IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </IonThumbnail>
                <IonLabel>Item 3</IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </IonThumbnail>
                <IonLabel>Item 3</IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </IonThumbnail>
                <IonLabel>Item 3</IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </IonThumbnail>
                <IonLabel>Item 3</IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </IonThumbnail>
                <IonLabel>Item 3</IonLabel>
              </IonItem>

              <IonItem lines="none">
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </IonThumbnail>
                <IonLabel>Item 4</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;