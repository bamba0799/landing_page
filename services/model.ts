export interface User {
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    idpers: string;
    motPass: string;
    nomPers: string;
    pernomPers: string;
    genrePers: string;
    phonePers: string;
    situation: boolean;
    rolePers: string;
    sousComite: string;
    roleMembre: string;
  }
  
  export interface AuthResponse {
    user: User;
    access_token: string;
  }

  interface CategoryStats {
    frère: number ;
    soeur: number ;
    Total: number ;
  }
  
  export interface MembreCo {
    Formation: CategoryStats;
    Administration: CategoryStats;
    Accueil_Hébegement: CategoryStats;
  }

  export interface Seminariste {
    frère: number;         // Nombre de frères
    soeur: number;         // Nombre de sœurs
    Total: number;         // Total des séminaristes
    m: boolean | null;
  }
  
  