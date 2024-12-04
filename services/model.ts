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
    frere: number ;
    soeur: number ;
    Total: number ;
  }
  
  export interface MembreCo {
    Formation: CategoryStats;
    Administration: CategoryStats;
    Accueil_Hebergement: CategoryStats;
  }

  export interface Seminariste {
    frere: number;         // Nombre de frères
    soeur: number;         // Nombre de sœurs
    Total: number;         // Total des séminaristes
    m: boolean | null;
  }

  export interface Commision {
    commission: string;
    total_frères: number;
    total_soeurs: number;
    total_membres: string;
  }

  export interface LoginFormValues {
    phonePers: string;
    motPass: string;
  }

  export interface AddCommissionFormValues {
    nomPers: string;
    pernomPers: string;
    genrePers: "frere" | "soeur" | "";
    phonePers: string;
    situation: string | null; 
    sousComite: string; 
    commission: string;
    motPass: string; 
    rolePers: string;
    roleMembre: string;
  }