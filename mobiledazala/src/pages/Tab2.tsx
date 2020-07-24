import React from 'react';
import { useState, useEffect } from "react"; 
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLoading, IonList, IonItem, IonLabel } from '@ionic/react';
import './Tab2.css';


interface Product { // TODO:fixme 
}



const Tab2: React.FC = () => {

  const [products, setProducts] = [null,null] // TODO:Fixme; 

  const [showLoading, setShowLoading] = useState<boolean>(true);

  const fetchProducts = async () => { 
    // TODO: Fixme 
  }

  useEffect(() => { 
    fetchProducts()
  }, [products])

  const makeLink = (product: Product) => { 
    // TODO: Fixme
  } 

  return ( 
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Loading...'}
        />
        <IonList>
          {
            // TODO:fixme
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
