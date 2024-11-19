import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
    products = [
      { id: 1, name: 'Produit 1', category: 'Electronique', description: 'Un produit électronique moderne.', imageUrl: 'https://i0.wp.com/macmule.com/wp-content/uploads/2015/05/imagr_256.png?resize=256%2C256&ssl=1' },
      { id: 2, name: 'Produit 2', category: 'Electronique', description: 'Un produit électronique moderne.', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/5/309544584/OU/RF/SP/284523/canon-imagr-runner-ir-2725-new-series-500x500.PNG' },
      { id: 3, name: 'Produit 3', category: 'Electronique', description: 'Un produit électronique moderne.', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/10/355568640/YC/HR/ON/7304748/canon-ir-1643i-500x500.png' },
      { id: 4, name: 'Produit 4', category: 'Electronique', description: 'Un produit électronique moderne.', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/1/QQ/YD/AO/2443756/canon-ir-2625-photocopier-machine-500x500.jpg' },
    ];
    cart: any[] = [];

    ngOnInit(): void {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        this.cart = JSON.parse(storedCart);
      }
    }
  
    addToCart(product: any): void {
      // Ajouter le produit au panier
      this.cart.push(product);
  
      // Mettre à jour le localStorage
      localStorage.setItem('cart', JSON.stringify(this.cart));
      }
      clearCart(): void {
        this.cart = [];
        localStorage.removeItem('cart');
        
      }
  }
