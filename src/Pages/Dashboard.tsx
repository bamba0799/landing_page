import React, { useRef } from 'react';
import PrimaryLayout from '../layouts/PrimaryLayout';
import Input from '../ components/Input/Input';
import MyInput from '../ components/Input/Input';

const Dashboard = () => {
    const ref:any = useRef(null);

    function handleClick() {
      ref.current.focus();
    }
  
    return (
        <PrimaryLayout title={"Tableau de bord"}>
            <div>
                Dashboard
                <Input id={"nom_prenom"} label='Nom et Prénoms' placeholder='Entrez votre nom' required={true} onChange={(e) => console.log(e.target.value)} />
            </div>
        </PrimaryLayout>
    );
}

export default Dashboard;
