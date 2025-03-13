import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

const Cgs = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="h-[100px] bg-gradient-to-b from-[#0E5588] to-[#F3F4F6] w-full flex flex-col justify-center items-center">
        <Icon
          onClick={() => navigate(-1)}
          icon="material-symbols:chevron-left-rounded"
          className="text-black w-8 h-8 ml-2 absolute left-0"
        />
        <p className="text-white font-bold text-[16px]">
          Conditions Générales de Services
        </p>
      </div>

      {/* Content */}
      <div className="overflow-y-scroll h-[calc(100vh-100px)] p-[20px] text-brand_bleu_inter text-[12px]">
        <h1 className="mb-4">
          Date de dernière mise à jour : 04/03/2024
        </h1>

        {/* Article 1 – MENTION LÉGALES */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          Article 1 – MENTION LÉGALES
        </h2>
        <p className="mt-2">
          Le présent site, accessible à l’URL{" "}
          <a
            href="https://www.acwaba.com"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.acwaba.com
          </a>{" "}
          (le « Site »), est édité par :
        </p>
        <p className="mt-2">
          La Société SAS Z&W au capital de 1000 euros, immatriculée au RCS de PARIS
          sous le numéro 979604642, dont le siège social est situé au 25 Rue de
          Ponthieu, 75008 Paris
        </p>
        <p className="mt-2">
          Numéro de TVA intracommunautaire : FR88979604642
        </p>
        <p className="mt-2">
          Le site{" "}
          <a
            href="https://www.acwaba.com"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.acwaba.com
          </a>{" "}
          est hébergé en Europe chez Azure de Microsoft.
        </p>
        <p className="mt-2">support@acwaba.com</p>

        {/* Article 2 – CHAMP D’APPLICATION */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          Article 2 – CHAMP D’APPLICATION
        </h2>
        <p className="mt-2">
          Les présentes conditions générales de services (les « Conditions Générales »)
          ont pour objet de définir et de régir les rapports contractuels entre la Société
          et tout professionnel (un « Client ») ayant créé un compte et désirant bénéficier
          des services proposés sur le Site.
        </p>
        <p className="mt-2">
          La fourniture des services proposés aux Clients sur le Site est conditionnée à
          l’acceptation préalable sans restriction ni réserve des présentes Conditions Générales.
        </p>
        <p className="mt-2">
          Les Conditions Générales sont mises à la disposition des Clients sur le Site où
          elles sont directement consultables et peuvent également lui être communiquées sur
          simple demande par tout moyen.
        </p>
        <p className="mt-2">
          Les Conditions Générales sont applicables nonobstant toute stipulation contraire
          figurant dans tous documents émanant du Client, et notamment dans ses conditions
          générales d’achat.
        </p>
        <p className="mt-2">
          Les Conditions Générales sont applicables sous réserve de toute stipulation contraire
          figurant au bon de commande ou à des conditions particulières le cas échéant conclues
          entre la Société et le Client concerné.
        </p>

        {/* Article 3 – DESCRIPTION DES SERVICES */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          Article 3 – DESCRIPTION DES SERVICES
        </h2>
        <p className="mt-2">
          Le Site a pour objet la fourniture aux clients via des formules payantes une
          solution SaaS de :
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>gestion de trésorerie et de recouvrement,</li>
          <li>création et paiement de factures.</li>
        </ul>
        <p className="mt-2">(ci-après désignés les « Services »).</p>
        <p className="mt-2">
          Les Services présentés sur le Site font chacun l'objet d'un descriptif mentionnant
          leurs caractéristiques essentielles. Cette description est susceptible de comporter
          des descriptions, photographies et graphismes qui ne sont communiqués qu’à titre
          illustratif et peuvent être modifiées/mises à jour sur le Site.
        </p>

        {/* Article 4 – CONDITIONS D’INSCRIPTION */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          Article 4 – CONDITIONS D’INSCRIPTION
        </h2>
        <p className="mt-2">
          Tout Client désirant pleinement bénéficier du Site et des Services devra :
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            disposer de la pleine capacité et agir à des fins strictement professionnelles ;
          </li>
          <li>
            créer son espace personnel sur le Site en renseignant les différents champs du
            formulaire de création d’un compte (dénomination, numéro de RCS, nom/prénom du
            référent, adresse électronique, numéro de téléphone, etc.) ;
          </li>
          <li>confirmer son acceptation des Conditions Générales ;</li>
          <li>confirmer son inscription.</li>
        </ul>
        <p className="mt-2">
          L’accès aux Services est possible à partir d’un ordinateur, d’un smartphone ou
          d’une tablette en se connectant au Site.
        </p>
        <p className="mt-2">
          L’utilisation des Services nécessite une connexion à internet haut débit et à
          internet mobile le cas échéant.
        </p>
        <p className="mt-2">
          Les Clients font leur affaire personnelle de la mise en place des moyens
          informatiques et de télécommunication permettant l’accès au Site.
        </p>
        <p className="mt-2">
          Les Services sont accessibles pour un nombre limité d’utilisateurs et dans la
          limite de votre forfait.
        </p>
        <p className="mt-2">
          Lors de la création d’un compte avec courrier électronique, le Client est invité à
          choisir un mot de passe, qui constitue la garantie de la confidentialité des informations
          qui seront contenues dans son compte.
        </p>
        <p className="mt-2">
          Aux fins de validation de l’inscription, la Société adresse au Client un courrier
          électronique de confirmation à l’adresse email renseignée par ce dernier. Le Client
          procède alors à l’activation de son compte en cliquant sur le lien hypertexte prévu à
          cet effet dans le courrier électronique de confirmation.
        </p>
        <p className="mt-2">
          Chaque Client garantit la sincérité et l'exactitude des informations fournies pour
          les besoins de son inscription, s'engage à notifier toute modification ultérieure et
          garantit que lesdites informations ne portent pas atteinte aux droits de tiers.
        </p>
        <p className="mt-2">
          Le Client peut modifier ces informations, identifiants et mot de passe à partir de son
          compte sur le Site.
        </p>
        <p className="mt-2">
          Le Client s’engage à ne pas divulguer ou transférer son compte, ses identifiants et mots de
          passe et est seul responsable de leur utilisation jusqu’à leur désactivation. Il doit
          informer immédiatement la Société de toute perte ou utilisation non autorisée de son compte.
        </p>
        <p className="mt-2">
          La Société se réserve le droit de supprimer le compte de tout Client qui aurait fourni
          des informations erronées.
        </p>

        {/* Article 5 – CONDITIONS TARIFAIRES */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          Article 5 – CONDITIONS TARIFAIRES
        </h2>
        <p className="mt-2">
          Les Services sont fournis au tarif en vigueur (le Prix) figurant sur le Site au jour de
          la commande, exprimé en euros hors taxes et varie en fonction des Services choisis par le
          Client. Le Prix pourra être révisé annuellement en fonction de l'indice Syntec, sauf
          indication contraire écrite de la Société.
        </p>
        <p className="mt-2">En cas de services spécifiques :</p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            Les Services sont facturés et le prix est exigible en totalité et payable comptant au
            jour de la signature du bon de commande.
          </li>
        </ul>
        <p className="mt-2">En cas de services à exécution successive :</p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            Les Services sont facturés et le prix est exigible en totalité et payable comptant au
            jour de la commande pour la période contractuelle à venir.
          </li>
        </ul>
        <p className="mt-2">
          Des éventuelles réductions de prix, ristournes et remises pourront s’appliquer aux
          Services dans des conditions prévues sur le Site ou dans tout autre document qui serait
          communiqué au Client. En cas de tarif promotionnel, la Société s'engage à appliquer ce tarif
          à toute commande passée durant la période de la promotion.
        </p>
        <p className="mt-2">
          En cas de règlement anticipé par le Client, aucun escompte ne sera pratiqué. En aucun cas
          les paiements ne peuvent être suspendus ni faire l'objet d'une quelconque compensation sans
          accord préalable et écrit entre la Société et le Client. Toute suspension, déduction ou
          compensation opérée unilatéralement par le Client sera traitée comme un défaut de paiement et
          entraînera toutes les conséquences d’un retard de paiement.
        </p>
        <p className="mt-2">
          Par ailleurs, il est expressément convenu que le Client est valablement mis en demeure de
          payer par la seule exigibilité de l'obligation, conformément aux dispositions de l'article
          1344 du Code civil. En cas de retard de paiement de l’une quelconque des échéances, la
          Société se réserve notamment le droit, sans qu’aucune indemnité ne soit due au Client, de :
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            exiger le paiement immédiat de l’ensemble des sommes à devoir au titre des Services,
            celles-ci devenant immédiatement exigibles quelle que soit leur échéance initialement
            prévue ;
          </li>
          <li>
            refuser toute nouvelle commande ou exiger pour toute nouvelle commande un paiement
            comptant ou une garantie pour la bonne exécution des engagements ;
          </li>
          <li>
            imputer tout paiement partiel en premier lieu sur la partie non privilégiée de la créance
            puis sur les sommes dont l'exigibilité est la plus ancienne ;
          </li>
          <li>
            réduire, suspendre ou annuler l’accès aux Services, 3 jours après mise en demeure restée
            sans effet, effectuée par la Société auprès du Client ;
          </li>
          <li>
            appliquer, sans mise en demeure préalable, à toutes les sommes dues, dès le premier jour
            de retard et jusqu'à complet paiement, des pénalités de retard calculées au taux visé à
            l’article L.441-6 du Code de Commerce ; et/ou
          </li>
          <li>
            exiger le paiement d’une indemnité forfaitaire de 40 € pour frais de recouvrement, pour
            chaque facture payée en retard, et le paiement d’une indemnité égale à 10% des sommes lui
            restant dues, sans préjudice de la réparation de tout dommage effectivement subi.
          </li>
        </ul>
        <p className="mt-2">
          Toute modification des tarifs résultant d’une augmentation de la taxe sur la valeur
          ajoutée ou la création de toute nouvelle taxe assise sur le prix des Services sera
          immédiatement et automatiquement appliquée.
        </p>

        {/* Article 7 – MODES DE PAIEMENT */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          Article 7 – MODES DE PAIEMENT
        </h2>
        <p className="mt-2">
          Le Client reconnaît expressément que toute commande effectuée sur le Site est une
          commande avec obligation de paiement, qui nécessite le paiement d’un prix contre la
          fourniture du Service commandé.
        </p>
        <p className="mt-2">
          Le Site utilise la solution de paiement en ligne Stripe accessible via :{" "}
          <a
            href="https://stripe.com/fr/ssa"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://stripe.com/fr/ssa
          </a>
        </p>
        <p className="mt-2">
          Les commandes peuvent être payées en ayant recours à l’un des modes de paiement
          suivants :
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            <strong>Paiement par carte bancaire</strong>. Le paiement s'effectue directement sur
            les serveurs bancaires sécurisés de la banque du Prestataire, les coordonnées
            bancaires du Client ne transitent pas sur le Site. Les coordonnées bancaires
            communiquées lors du paiement sont protégées par un procédé de cryptage SSL
            (Secure Socket Layer). Les cartes bancaires émises par des banques domiciliées hors
            de France doivent obligatoirement être des cartes bancaires internationales. Le
            paiement via ces cartes bancaires s'effectue au comptant, sans escompte.
          </li>
          <li>
            <strong>Paiement par virement</strong>. Le Client peut régler sa commande par virement
            bancaire. Lors de la commande, la Société communiquera les coordonnées du compte sur
            lequel effectuer le virement, ainsi que la référence de commande à indiquer dans
            l’ordre de virement.
          </li>
        </ul>
        <p className="mt-2">
          Le cas échéant, la commande validée par le Client ne sera considérée comme confirmée
          que lorsque la Société aura pu s’assurer de la validité du règlement.
        </p>

        {/* Article 8 – OBLIGATIONS DE LA SOCIÉTÉ */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          Article 8 – OBLIGATIONS DE LA SOCIÉTÉ
        </h2>
        <p className="mt-2">
          La Société s’engage à mettre en œuvre toutes les diligences requises pour l’exécution
          des Services et de ses obligations au titre des présentes Conditions Générales et/ou de
          toute autre documentation qui serait conclue avec les Clients, dans le respect des
          dispositions législatives et réglementaires et des droits de tiers.
        </p>
        <p className="mt-2">
          La Société déclare disposer des compétences, de l’expérience et des moyens nécessaires
          pour fournir les Services, et assumera la pleine responsabilité tant de l’exécution des
          Services que de l’organisation du travail de son personnel le cas échéant.
        </p>
        <p className="mt-2">
          La Société édite les Services disponibles sur le Site et les contenus du Site mis en ligne
          par les Clients sont hébergés sur Azure (les Prestataires). La Société agit en tant que
          prestataire technique et n’effectue aucun contrôle sur la licéité, l’exactitude, la qualité
          ou la sincérité des contenus mis en ligne par les Clients sous leur responsabilité.
        </p>
        <p className="mt-2">
          En conséquence, les Clients reconnaissent aux Prestataires la qualité d’hébergeur du Site
          au sens de l’article 6 de la loi n°2004-575 du 21 juin 2004 pour la confiance dans
          l’économie numérique.
        </p>
        <p className="mt-2">
          Toutefois, la Société s’engage à retirer promptement tout contenu manifestement illicite
          qui serait porté à sa connaissance, notamment lorsque l’existence d’un tel contenu lui aura
          été notifiée par un Client dans les conditions prévues par la réglementation applicable.
        </p>
        <p className="mt-2">
          La Société ne peut cependant exclure que l’accès et le fonctionnement du Site soient
          interrompus notamment en cas de force majeure, de dysfonctionnements des équipements ou du
          réseau internet des Clients, de défaillance des opérateurs de télécommunication, d’interruption
          de fourniture d’électricité, d’utilisation anormale, illicite ou frauduleuse du Site par un
          Client ou un tiers, de décision des autorités compétentes, ou pour tout autre motif.
        </p>
        <p className="mt-2">
          La Société se réserve également le droit d'apporter au Site et aux Services toutes les
          modifications et améliorations de son choix liées à l'évolution technique ou au bon
          fonctionnement.
        </p>
        <p className="mt-2">
          Les interruptions générales et temporaires du Site et des Services seront, dans la
          mesure du possible, notifiées via le Site avant qu’elles n’interviennent, sauf lorsque ces
          interruptions ont un caractère d’urgence.
        </p>

        {/* Article 9 – OBLIGATIONS DU CLIENT */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          Article 9 – OBLIGATIONS DU CLIENT
        </h2>
        <p className="mt-2">
          Chaque Client s'engage à accéder et utiliser le Site et les Services de manière loyale
          et conformément aux lois en vigueur et aux présentes Conditions Générales.
        </p>
        <p className="mt-2">
          Les données et informations communiquées ou mises en ligne par les Clients devront être
          exactes, sincères et loyales et seront communiquées sous leur seule responsabilité.
        </p>
        <p className="mt-2">
          Plus généralement, chaque Client s’engage à :
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            s’assurer du respect, en toutes circonstances, des obligations légales, sociales,
            administratives et fiscales applicables à son statut de professionnel ;
          </li>
          <li>
            ne pas modifier, en cours d’exécution des Services, leur nature ou leurs modalités de
            fourniture, sauf accord préalable et écrit avec la Société ;
          </li>
          <li>
            verser le prix des Services dans les conditions prévues aux présentes ;
          </li>
          <li>
            ne pas diffuser de contenu illicite ou ayant pour effet de diminuer, de désorganiser,
            de ralentir ou d’interrompre la circulation normale des données sur le Site ;
          </li>
          <li>
            signaler immédiatement à la Société toute difficulté, réserve ou tout litige survenu
            au cours de l’exécution des Services ou toute utilisation anormale, abusive ou frauduleuse
            du Site dont il aurait connaissance.
          </li>
        </ul>
        <p className="mt-2">
          Dans l'hypothèse où un Client serait responsable d'une infraction à la législation en
          vigueur ou d'une atteinte aux droits des tiers, la Société se réserve le droit de fournir,
          à la demande de toute autorité légitime (juridiction, autorité administrative, services de
          police), tous renseignements permettant ou facilitant l'identification du Client contrevenant.
        </p>

        {/* Article 11 – RESPONSABILITE DU PRESTATAIRE */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          Article 11 - RESPONSABILITE DU PRESTATAIRE
        </h2>
        <p className="mt-2">
          La Société est tenue à une obligation de moyens au titre de la fourniture des Services.
        </p>
        <p className="mt-2">
          Chaque Client déclare être informé des contraintes et des limites des réseaux Internet et
          ne pourra en aucun cas rechercher la responsabilité du Prestataire au titre de dysfonctionnements
          dans l'accès aux Services, des vitesses d'ouverture et de consultation des pages des Services,
          de l'inaccessibilité temporaire ou définitive des Services ou de l'utilisation frauduleuse par
          des Clients ou des tiers du Site.
        </p>
        <p className="mt-2">
          La responsabilité du Prestataire ne saurait davantage être engagée :
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            en cas de manquement à une quelconque obligation résultant d'un cas fortuit ou d’un évènement
            de force majeure au sens de l’article 1218 du Code Civil, y compris, mais sans y être limités,
            des évènements imprévisibles tels que grèves, arrêts de travail, troubles sociaux, fermetures
            d’usines, inondations, incendies, défaut de production ou de transport non-consécutif à son fait
            personnel, rupture d’approvisionnement, guerres, émeutes, insurrections et plus généralement toute
            circonstance ou événement empêchant la Société d’exécuter convenablement ses obligations ;
          </li>
          <li>
            dans le cas où les informations, données, instructions, directives, matériels ou supports communiqués
            par le Client sont erronés ou incomplets, et plus généralement dans le cas où l’inexécution ou
            l’exécution défectueuse des Services résulte en tout ou partie du comportement, d’un manquement
            ou d’une carence du Client ;
          </li>
          <li>
            dans le cas où certains services ou fonctionnalités ne seraient pas accessibles sur le Site en raison
            d’une désactivation par un Client des cookies via l’interface du logiciel de navigation ;
          </li>
          <li>
            dans le cas où les fonctionnalités du Site s'avèreraient incompatibles avec certains équipements et/ou
            fonctionnalités du matériel informatique d’un Client.
          </li>
        </ul>
        <p className="mt-2">
          Chaque Client est par ailleurs responsable des contenus et informations importés, stockés et/ou
          publiés sur le Site et s’engage à n’employer aucune mesure technique de nature à permettre le
          contournement des mesures techniques de protection mises en place par la Société en vue d’éviter
          toute utilisation frauduleuse du Site et des Services.
        </p>
        <p className="mt-2">
          Chaque Client prend également sous sa seule responsabilité l’ensemble des mesures de nature à
          assurer l’intégrité et la sauvegarde de l’ensemble de ses données, fichiers et documents et renonce
          à rechercher la responsabilité du Prestataire en cas de dommages survenus aux données, fichiers ou
          à tout autre document qu’il aurait pu confier au Prestataire dans le cadre de l’utilisation du Site
          et/ou des Services.
        </p>
        <p className="mt-2">
          Plus généralement, chaque Client s’engage par ailleurs à garantir la Société de toute réclamation,
          revendication, ou opposition et plus généralement de toute procédure qui serait formée à son encontre
          à raison de l’utilisation qui aurait été faite par le Client du Site ou des Services.
        </p>
        <p className="mt-2">
          En tout état de cause, la Société n’encourt aucune responsabilité au titre de tous dommages ou
          préjudices indirects ou immatériels tels que préjudice financier, perte de chance, perte de profit,
          perte de contrat, perte de commande, perte de clientèle, perte d’exploitation, préjudice ou trouble
          commercial ou préjudice d’image, qui pourraient résulter de la fourniture défectueuse ou de l’absence
          de fourniture des Services.
        </p>
        <p className="mt-2">
          La responsabilité du Prestataire ne peut excéder un montant égal au prix hors taxes perçu auprès du
          Client au titre de la fourniture des Services au cours des douze (12) derniers mois.
        </p>
        <p className="mt-2">
          Conformément aux dispositions de l’article 2254 du Code Civil, toute action judiciaire d’un Client à
          l’égard du Prestataire est atteinte par la prescription à l’expiration d’une durée d’un (1) an suivant
          la date à laquelle le Client concerné a eu connaissance ou est présumé avoir eu connaissance du fait
          dommageable.
        </p>

        {/* Article 13 – DONNÉES PERSONNELLES */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          Article 13 – DONNÉES PERSONNELLES
        </h2>
        <p className="mt-2">
          Pour davantage d’informations concernant l’utilisation de données à caractère personnel par la Société,
          veuillez lire attentivement la Charte sur le respect de la vie privée (la « Charte »). Vous pouvez à
          tout moment consulter cette Charte sur le Site.
        </p>

        {/* Article 14 – LIENS HYPERTEXTES */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          Article 14 – LIENS HYPERTEXTES
        </h2>
        <p className="mt-2">
          Les liens hypertextes disponibles sur le Site peuvent renvoyer vers des sites tiers ou partenaires.
          Ils sont fournis uniquement pour la convenance du Client, afin de faciliter l’utilisation des ressources
          disponibles sur l’Internet. Si le Client utilise ces liens, il quittera le Site et acceptera alors
          d’utiliser les sites tiers à ses risques et périls ou, le cas échéant, conformément aux conditions qui
          les régissent.
        </p>
        <p className="mt-2">
          En tout état de cause, l’existence d’un lien hypertexte vers le Site en provenance d’un site tiers ou sur le
          Site vers un site tiers ou de partenaire ne saurait engager la responsabilité du Prestataire à quelque
          titre que ce soit et notamment quant à la disponibilité, aux contenus et aux produits et/ou services
          disponibles sur ou à partir de ce site tiers ou partenaire.
        </p>
        <p className="mt-2">
          Le Client n’est pas autorisé à créer sur un site tiers un ou plusieurs liens hypertextes reliant à la page
          d’accueil du Site ou vers sa page profil, sauf autorisation préalable et écrite du Prestataire.
        </p>

        {/* Article 15 – PROPRIÉTÉ INTELLECTUELLE */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          Article 15 – PROPRIÉTÉ INTELLECTUELLE
        </h2>
        <p className="mt-2">
          La Société est seul titulaire de tous les contenus présents sur le Site, notamment et sans limitation,
          tous textes, fichiers, images animées ou non, photographies, vidéos, logos, dessins, modèles, logiciels,
          marques, identité visuelle, base de données, structure du Site et tous autres éléments de propriété
          intellectuelle et autres données ou informations qui sont protégés par les lois et règlements français et
          internationaux relatifs notamment à la propriété intellectuelle.
        </p>
        <p className="mt-2">
          En conséquence, aucun des contenus du Site ne pourra en tout ou partie être modifié, reproduit, copié,
          dupliqué, vendu, revendu, transmis, publié, communiqué, distribué, diffusé, représenté, stocké, utilisé,
          loué ou exploité de toute autre manière, à titre gratuit ou onéreux, par un Client ou par un tiers,
          quel que soient les moyens et/ou les supports utilisés, qu’ils soient connus ou inconnus à ce jour, sans
          l’autorisation préalable et écrite du Prestataire, et le Client est seul responsable de toute utilisation
          et/ou exploitation non autorisée.
        </p>
        <p className="mt-2">
          En outre, toute extraction, intégration, compilation, ou utilisation à des fins commerciales d’informations
          contenues dans les bases de données accessibles sur le Site, ainsi que toute utilisation de logiciels, robots,
          systèmes d’exploration de données et autres outils de collecte de données est strictement interdite aux Clients.
        </p>
        <p className="mt-2">
          La Société concède toutefois aux Clients, sous réserve du respect par ces derniers des présentes Conditions
          Générales, un droit non exclusif et non cessible d’accéder aux contenus présents sur le Site dont il détient
          la pleine propriété, de les télécharger et de les imprimer dans le cadre d’une utilisation personnelle et non
          commerciale.
        </p>

        {/* Article 16 – DURÉE – SUSPENSION - RÉSILIATION */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          Article 16 – DURÉE – SUSPENSION - RÉSILIATION
        </h2>
        <p className="mt-2">
          En cas de souscription ponctuelle ou en application de conditions particulières, les présentes Conditions
          Générales sont conclues pour la durée de fourniture des Services, telle que mentionnée le cas échéant dans
          des conditions particulières ou dans le bon de commande.
        </p>
        <p className="mt-2">
          La durée d'accès aux Services est déterminée par la période d'abonnement choisie par le Client. L'abonnement
          est reconduit automatiquement pour une nouvelle période d'une durée identique ou, en cas d'accord contraire,
          pour une période de 30 jours afin d'éviter toute interruption d'utilisation des Services.
        </p>
        <p className="mt-2">
          La Société se réserve le droit de suspendre l’accès d’un Client au Site et aux Services de façon
          permanente ou de façon temporaire, en cas de manquement par ledit Client à ses obligations résultant des
          présentes Conditions Générales.
        </p>
        <p className="mt-2">
          Par ailleurs, Le Client peut résilier son abonnement de manière anticipée à tout moment depuis son espace
          client ou par l’envoi d’un mail à l’adresse{" "}
          <a
            href="mailto:support@acwaba.com"
            className="text-blue-600 hover:underline"
          >
            support@acwaba.com
          </a>
        </p>

        {/* Article 17 – CONFIDENTIALITÉ */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          Article 17 - CONFIDENTIALITÉ
        </h2>
        <p className="mt-2">
          Pendant la durée des présentes, chaque partie pourra prendre connaissance ou recevoir des informations,
          documents et/ou données confidentiels à propos de l’autre partie. De ce fait, chaque partie s’engage, tant
          en son nom qu’au nom de ses préposés pour lesquels elle se porte fort, à préserver la stricte confidentialité
          de toutes les informations, documents et/ou données confidentiels de toute nature en rapport avec les résultats,
          l’activité ou la clientèle de l’autre partie ou toute information reçue ou obtenue d’une partie dans le cadre
          des relations contractuelles établies.
        </p>
        <p className="mt-2">
          Le présent engagement de confidentialité des parties est valable, tant pour la durée des présentes que pendant
          une durée de deux (2) ans suivant leur expiration ou résiliation.
        </p>

        {/* Article 18 – NOTIFICATIONS */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          Article 18 - NOTIFICATIONS
        </h2>
        <p className="mt-2">
          Toute notification ou convocation écrite requise ou permise en vertu des stipulations des présentes sera
          valablement effectuée si elle est adressée par lettre remise en main propre ou par porteur contre reçu de
          livraison, par courrier recommandé avec avis de réception, ou par courrier électronique (sauf en cas de
          résiliation des présentes), adressé aux coordonnées de la partie concernée, chaque partie élisant domicile
          en son siège social.
        </p>
        <p className="mt-2">
          Tout changement de coordonnées d’une partie pour les besoins des présentes devra être notifié à l’autre
          partie selon les modalités prévues ci-dessus.
        </p>
        <p className="mt-2">
          Les notifications adressées en mains propres ou par porteur seront présumées avoir été faites à leur date de
          remise au destinataire, telle qu'attestée par le reçu de livraison. Les notifications faites par courrier
          recommandé avec avis de réception seront présumées avoir été faites à la date de leur première présentation à
          l'adresse du destinataire. Les notifications faites par courrier électronique seront présumées avoir été faites
          à la date d'envoi du courrier électronique.
        </p>

        {/* Article 19 – AUTONOMIE ET ABSENCE DE RENONCIATION */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          Article 19 - AUTONOMIE ET ABSENCE DE RENONCIATION
        </h2>
        <p className="mt-2">
          Si l'une quelconque des stipulations des présentes Conditions générales était déclarée nulle ou inapplicable
          pour quelque cause que ce soit en application d'une loi, d'un règlement ou à la suite d'une décision de
          justice devenue définitive, elle serait réputée non écrite et les autres stipulations resteraient en vigueur.
        </p>
        <p className="mt-2">
          Le fait pour la Société de ne pas se prévaloir à titre temporaire ou permanent d’une ou de plusieurs stipulations
          des Conditions Générales n’emportera en aucun cas renonciation.
        </p>

        {/* Article 20 – MODIFICATION */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          Article 20 – MODIFICATION
        </h2>
        <p className="mt-2">
          La Société se réserve le droit de modifier à tout moment et sans préavis le contenu ou la localisation du
          Site, les Services et les présentes Conditions Générales.
        </p>
        <p className="mt-2">
          Toute utilisation du Site ou des Services consécutive à une modification apportée aux Conditions Générales
          emportera acceptation par chaque Client desdites modifications. La version la plus récente et en vigueur
          des Conditions Générales sera toujours disponible à l’adresse suivante :{" "}
          <strong>[URL des CGS]</strong>.
        </p>
        <p className="mt-2">
          Lorsque les modifications apportées aux Conditions Générales seront considérées comme substantielles,
          celles-ci seront portées à la connaissance des Clients par courrier électronique et devront faire l’objet
          d’une acceptation par ces derniers lors de leur prochaine connexion sur le Site.
        </p>

        {/* Article 21 – LITIGES */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          Article 21 - LITIGES
        </h2>
        <p className="mt-2">
          Les litiges qui pourront survenir dans le cadre des relations contractuelles établies entre le Client
          et la Société devront être résolus, dans la mesure du possible, de manière amiable.
        </p>
        <p className="mt-2">
          A défaut de règlement amiable dans un délai d’un mois à compter de la saisine de l’une des parties,
          tous les litiges auxquels les Conditions Générales pourraient donner lieu, concernant tant leur validité,
          interprétation, exécution, résiliation, leurs conséquences et leurs suites, seront soumis au tribunal de Paris.
        </p>

        {/* Article 22 – DROIT APPLICABLE & LANGUE DU CONTRAT */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          Article 22 - DROIT APPLICABLE & LANGUE DU CONTRAT
        </h2>
        <p className="mt-2">
          Les présentes Conditions Générales et les opérations qui en découlent sont régies et soumises au droit
          français. Elles sont rédigées en langue française. En cas de traduction en une ou plusieurs langues
          étrangères, seul le texte français fera foi en cas de litige.
        </p>
      </div>
    </div>
  );
};

export default Cgs;
