import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

const Rgpd = () => {
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
        <p className="text-white font-bold text-[16px]">Politique de Confidentialité</p>
      </div>

      {/* Content */}
      <div className="overflow-y-scroll h-[calc(100vh-100px)] p-[20px] text-brand_bleu_inter text-[12px]">
        <h1 className="mb-4">Date de dernière mise à jour : 04/03/2024</h1>

        <p>
          La présente charte sur le respect de la vie privée (la « Charte ») a pour objectif de formaliser notre engagement quant au respect de la vie privée des utilisateurs du site internet <strong>www.acwaba.com</strong> (le « Site ») exploité par la société <strong>Z&W</strong>.
        </p>

        <p className="mt-4">
          La Charte et les Conditions Générales du Site forment un ensemble contractuel. Tous les termes en majuscules non-définis dans la présente Charte sont définis dans les Conditions Générales consultables ici : <strong>[URL des Conditions Générales]</strong>.
        </p>

        <p className="mt-4">
          Dans le cadre de la mise à disposition de notre Site, nous traitons vos données à caractère personnel dans le respect du Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016 (« RGPD ») et dans les conditions exposées ci-après.
        </p>

        <p className="mt-4">
          Une donnée à caractère personnel désigne toute information se rapportant à une personne physique identifiée ou identifiable. Nous collectons et traitons des données à caractère personnel dans le cadre de la fourniture de nos Services ou de la communication à proposer ces Services exclusivement, en stricte conformité avec le RGPD.
        </p>

        <p className="mt-4">
          Nous collectons uniquement des données à caractère personnel adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités pour lesquelles elles sont traitées. Ainsi, il ne vous sera jamais demandé de renseigner des données considérées comme « sensibles », telles que vos origines raciales ou ethniques, vos opinions politiques, philosophiques ou religieuses.
        </p>

        <p className="mt-4">
          En vous enregistrant sur le Site, vous nous autorisez à traiter vos données à caractère personnel conformément à la Charte. Si vous refusez ces termes, veuillez vous abstenir d’utiliser le Site ainsi que les Services.
        </p>

        {/* Section 1 */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          1. Dans quels cas collectons-nous vos données à caractère personnel et quelles données sont collectées ?
        </h2>
        <p className="mt-2">
          Nous sommes susceptibles de recueillir et de conserver vos données à caractère personnel, notamment lorsque vous :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>naviguez sur le Site</li>
          <li>créez un compte sur le Site</li>
          <li>nous contactez</li>
        </ul>
        <p className="mb-4">
          Nous utilisons ces données pour permettre la mise en œuvre et la gestion des Services du Site, répondre à vos demandes spécifiques et améliorer nos Services et notre Site.
        </p>
        <p className="mb-4">
          Si vous avez accepté de recevoir nos courriels lors de la création de votre Compte, vous recevrez des messages portant sur nos produits et promotions. Vous pouvez vous désabonner à tout moment.
        </p>

        <p className="mt-4 font-semibold">1.1 Navigation sur le Site</p>
        <p className="mt-2">
          <strong>Données de connexion :</strong> À chaque connexion, nous recueillons des informations telles que votre adresse IP, l’adresse MAC de votre ordinateur, la date et l'heure de connexion, ainsi que des informations sur le navigateur utilisé.
        </p>
        <p className="mt-2">
          <strong>Données de navigation :</strong> Nous collectons également des informations sur la manière dont vous accédez au Site, les pages consultées et la durée de votre navigation. Dans ce cadre, l'utilisation de Cookies (voir paragraphe 5) peut être mise en œuvre.
        </p>

        <p className="mt-4 font-semibold">1.2 Création d’un Compte</p>
        <p className="mt-2">
          L’accès à certains Services nécessite la création d’un Compte. Conformément aux Conditions Générales, il vous sera demandé de fournir des informations telles que vos noms, prénoms, adresse postale, email et numéro de téléphone.
        </p>

        <p className="mt-4 font-semibold">1.3 Paiement</p>
        <p className="mt-2">
          Certains Services sont payants. Vous acceptez que nous utilisions des prestataires externes qui pourront collecter des données pour le traitement des paiements et, le cas échéant, pour la livraison des produits ou services.
        </p>
        <p className="mt-2">
          Pour régler un achat, vous devez fournir vos coordonnées de facturation et de paiement (numéro de carte, date de validité, code de sécurité et nom du titulaire). Nous conservons ces informations à des fins internes (comptabilité, conformité et obligations légales).
        </p>

        <p className="mt-4 font-semibold">1.4 Adhésion à notre Newsletter</p>
        <p className="mt-2">
          Lors de la création de votre Compte, vous pouvez consentir à recevoir nos lettres d’information sur nos actualités, produits, services et promotions, soit lors de l’enregistrement, soit en renseignant directement votre email sur le Site.
        </p>
        <p className="mt-2">
          Vous pouvez retirer ce consentement à tout moment et sans frais, conformément au paragraphe 6.
        </p>

        <p className="mt-4 font-semibold">1.5 Contacts</p>
        <p className="mt-2">
          Pour répondre à vos demandes auprès de notre Service Client et confirmer vos informations, nous pourrons utiliser votre nom, prénom, adresse email et numéro de téléphone.
        </p>

        {/* Section 2 */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          2. Comment protégeons-nous vos données à caractère personnel ?
        </h2>
        <p className="mt-2">
          Nous avons mis en place des mesures techniques et organisationnelles pour garantir la sécurité, l’intégrité et la confidentialité de vos données, afin d’éviter qu’elles ne soient déformées, endommagées ou accessibles par des tiers non autorisés.
        </p>
        <p className="mt-2">
          Toutefois, aucune mesure de sécurité n’étant infaillible, nous ne pouvons garantir une protection absolue.
        </p>
        <p className="mt-2">
          Il vous incombe également d’assurer la confidentialité de votre mot de passe.
        </p>

        {/* Section 3 */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          3. Dans quels cas partageons-nous vos données à caractère personnel ?
        </h2>
        <p className="mt-2 font-semibold">3.1 Partage avec des sociétés tierces</p>
        <p className="mt-2">
          Lors de votre navigation, vos données peuvent être transmises à des prestataires extérieurs qui assurent, en notre nom, le traitement des paiements ou d’autres Services.
        </p>
        <p className="mt-2">
          Ces prestataires s’engagent à utiliser vos données uniquement pour la mise en œuvre de nos Services. Nous ne partagerons jamais vos données à des fins marketing ou commerciales sans votre consentement préalable.
        </p>

        <p className="mt-2 font-semibold">3.2 Partage avec les autorités</p>
        <p className="mt-2">
          Nous pouvons être amenés à divulguer vos données aux autorités administratives ou judiciaires pour l’identification, l’interpellation ou la poursuite en justice d’un individu portant atteinte à nos droits, à ceux d’un autre utilisateur ou d’un tiers.
        </p>

        {/* Section 4 */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          4. Combien de temps conservons-nous vos données à caractère personnel ?
        </h2>
        <p className="mt-2">
          Vos données sont conservées pendant la durée de votre inscription sur le Site pour permettre votre identification et la fourniture des Services.
        </p>
        <p className="mt-2">
          En cas de désinscription, vos données seront effacées, sauf conservation sous forme d’archive pour la preuve d’un droit ou d’un contrat.
        </p>
        <p className="mt-2">
          En tout état de cause, la conservation ne dépassera pas la durée nécessaire aux finalités du traitement, conformément à la présente Charte et aux lois applicables.
        </p>

        {/* Section 5 */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          5. Cookies : comment les utilisons-nous ?
        </h2>
        <p className="mt-2 font-semibold">5.1 Qu’est-ce qu’un cookie ?</p>
        <p className="mt-2">
          Un cookie est un fichier texte déposé sur votre terminal lors de la consultation d’un service en ligne. Il permet à son émetteur de reconnaître votre terminal lors de futures visites. Les cookies déposés avec votre accord sont détruits 13 mois après leur installation.
        </p>

        <p className="mt-2 font-semibold">5.2 À quoi servent les cookies émis sur notre Site ?</p>
        <p className="mt-2">
          Les cookies nous permettent :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            d'établir des statistiques et des volumes de fréquentation pour améliorer l’ergonomie du Site et de nos Services ;
          </li>
          <li>
            d'adapter la présentation du Site aux préférences de votre terminal (langue, résolution, système d'exploitation, etc.) ;
          </li>
          <li>
            de mémoriser des informations relatives aux formulaires (inscription ou accès à votre compte) ou à vos choix sur le Site (contenu d'un panier, etc.) ;
          </li>
          <li>
            de vous permettre d'accéder à des espaces réservés et personnels grâce à vos identifiants, et de mettre en œuvre des mesures de sécurité.
          </li>
        </ul>
        <p className="mt-2">
          Lors de votre navigation, des cookies issus de réseaux sociaux peuvent être générés via des boutons de partage. Un bandeau informatif apparaîtra lors de votre première visite, et la poursuite de la navigation matérialisera votre acceptation.
        </p>

        <p className="mt-2 font-semibold">5.3 Comment pouvez-vous contrôler les cookies utilisés ?</p>
        <p className="mt-2">
          Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies, ou être averti avant leur enregistrement. Attention : ces paramètres peuvent modifier votre navigation et l’accès à certains services.
        </p>

        <p className="mt-2 font-semibold">5.4 Comment configurer votre navigateur ?</p>
        <p className="mt-2">
          La configuration varie selon le navigateur (Internet Explorer/Edge, Firefox, Safari, Google Chrome). Consultez le menu d'aide de votre navigateur pour modifier vos paramètres. Pour plus d'informations, vous pouvez consulter le site de la CNIL.
        </p>

        {/* Section 6 */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          6. Quels sont vos droits ?
        </h2>
        <p className="mt-2">
          Vous êtes le seul à nous avoir communiqué vos données. Conformément aux articles 15 à 22 du RGPD, et après justification de votre identité, vous avez le droit d'accéder, de rectifier ou d'effacer vos données personnelles.
        </p>
        <p className="mt-2">
          Vous avez également le droit de vous opposer au traitement, de le limiter, de décider du sort post-mortem de vos données, de retirer votre consentement à tout moment et de bénéficier du droit à la portabilité.
        </p>
        <p className="mt-2">
          Pour exercer ces droits, contactez-nous à <a href="mailto:support@acwaba.com" className="text-blue-600 hover:underline">support@acwaba.com</a> ou par courrier à <strong>25 Rue de Ponthieu, 75008 Paris</strong>, en joignant une copie d’un titre d’identité.
        </p>
        <p className="mt-2">
          Vous pouvez également vous désabonner de notre newsletter en cliquant sur le lien de désinscription dans chaque email ou en nous contactant.
        </p>

        {/* Section 7 */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          7. Pouvons-nous modifier la Charte ?
        </h2>
        <p className="mt-2">
          Nous nous réservons le droit de modifier la présente Charte à tout moment. Il est recommandé de la consulter régulièrement. En cas de modification, nous publierons les changements sur cette page et aux endroits appropriés. Votre utilisation du Site après modification implique votre acceptation de ces changements. Si vous n'acceptez pas les modifications substantielles, veuillez cesser d'utiliser le Site.
        </p>

        {/* Section 8 */}
        <h2 className="text-lg font-bold text-[#0F5689] mt-6">
          8. La Commission Nationale de l'Informatique et des Libertés (CNIL)
        </h2>
        <p className="mt-2">
          Vous pouvez contacter la CNIL directement via son site internet ou par courrier à l’adresse suivante : <strong>Commission Nationale de l'Informatique et des Libertés (CNIL), 3 Place de Fontenoy - TSA 80715, 75334 PARIS CEDEX 07</strong>.
        </p>
      </div>
    </div>
  );
};

export default Rgpd;
