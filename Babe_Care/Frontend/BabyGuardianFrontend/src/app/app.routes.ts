import { Routes } from '@angular/router';
import { HowItWorksComponent } from './features/how-it-works/how-it-works.component';
import { FeaturesComponent } from './features/features/features.component';
import { AuthModalComponent } from './features/auth-modal/auth-modal.component';
import { HomeComponent } from './features/home/home.component';


import { UserHomeComponent } from './features/user-area/user-home/user-home.component';
import { UserProfilComponent } from './features/user-area/user-profil/user-profil.component';
import { RecipesComponent } from './features/user-area/recipes/recipes.component';
import { SmartFridgeComponent } from './features/user-area/smart-fridge/smart-fridge.component';
import { ScanProductComponent } from './features/user-area/scan-product/scan-product.component';
import { InventoryComponent } from './features/user-area/inventory/inventory.component';
import { ShareFoodComponent } from './features/user-area/share-food/share-food.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'authModal', component: AuthModalComponent },


  { path: 'user-home', component: UserHomeComponent },
  { path: 'user-profil', component: UserProfilComponent},
  { path: 'recipes', component: RecipesComponent},
  { path: 'smart-fridge', component: SmartFridgeComponent},
  { path: 'scan-product', component: ScanProductComponent},
  { path: 'inventory', component: InventoryComponent},
  { path: 'share-food', component: ShareFoodComponent},

];
