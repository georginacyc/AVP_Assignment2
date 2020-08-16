// Group Members: Georgina Chew (180954W), Jonathon Low (192739S)

import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel } from '@ionic/react'; // TODO: fixme 
import './Tab1.css';

const Tab1: React.FC = () => {
  return (  
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><b>Welcome to Dazala</b></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="center">
          {/* TODO: fixme, but you might not need the curly brackets */}
          Welcome to Dazala
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
