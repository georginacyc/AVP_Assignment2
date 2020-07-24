import React from 'react';
import { useState, useEffect } from "react"; 
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLoading, IonList, IonItem, IonLabel } from '@ionic/react';
import './Tab2.css';


interface Product { // TODO:fixme 
  id: string,
  name: string,
  description: string,
  price: number
}



const Tab2: React.FC = () => {

  const [products, setProducts] = useState<Product[]>([]) // TODO:Fixme; 

  const [showLoading, setShowLoading] = useState<boolean>(true);

  const fetchProducts = async () => { 
    // TODO: Fixme 
    fetch("https://localhost:5001/api/product/all")
      .then(res => res.json())
      .then(setProducts)
      .finally(() => setShowLoading(false))
  }

  useEffect(() => { 
    fetchProducts()
  }, [products])

  const makeLink = (product: Product) => { 
    // TODO: Fixme
    return "/tab3/" + product.id
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
            products.map((product, index) => (
              <IonItem key={index} routerLink={makeLink(product)}>
                <IonLabel>
                  <h1>{product.name}</h1>
                  <p>{product.description}</p>
                  <p>{product.price}</p>
                </IonLabel>
              </IonItem>
            ))
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
