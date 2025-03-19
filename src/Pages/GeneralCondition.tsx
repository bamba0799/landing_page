import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

const GeneralCondition = () => {
    const navigate = useNavigate();

    return (
        <div className='flex-1'>
            <div className='h-[100px] bg-gradient-to-b from-[#0E5588] to-[#F3F4F6] w-full  flex flex-col justify-center items-center'>
                <Icon onClick={() => navigate(-1)} icon="material-symbols:chevron-left-rounded" className="text-black w-8 h-8 ml-2 absolute left-0" />
                <p className=" text-white font-bold text-[16px]">Condition générale d'utilisation</p>
                {/* <p className=" text-white font-bold text-[16px]"> </p> */}
            </div>
            <div className=" overflow-y-scroll h-[calc(100vh-100px)] p-[20px] text-brand_bleu_inter text-[12px]">
                {/* <p className=" text-brand_bleu_inter text-[12px]">

                </p> */}
                <div className="flex flex-row  space-x-[20px] items-center mt-4">
                    <a href="/rgpd">RGPD</a>
                    <a href="/cgs">CGS</a>
                </div>
                <h1 className=" mb-4">En vigueur au 04/03/2024</h1>

                <p className="">
                    Les présentes conditions générales d’utilisation (dites « CGU ») ont pour objet
                    l’encadrement juridique des modalités de mise à disposition du site et des services par
                    <strong> Z&W</strong> et de définir les conditions d’accès et d’utilisation des services par « l’Utilisateur ».
                </p>

                <p className="mt-4 ">
                    Les CGU présentes sont accessibles sur le site à la rubrique <strong>« CGU »</strong>.
                </p>

                <p className="mt-4 ">
                    Toute inscription ou utilisation du site implique l’acceptation sans aucune réserve ni restriction des CGU
                    présentes par l’utilisateur. Lors de l’inscription sur le site via le formulaire d’inscription, chaque
                    utilisateur accepte spécifiquement les présentes CGU en cochant la case devant le texte suivant :
                </p>

                <blockquote className="bg-blue-50 text-blue-800 p-3 mt-3 rounded-md border-l-4 border-[#0E5588]">
                    « Je reconnais avoir lu et compris les CGU et je les accepte ».
                </blockquote>

                <p className="mt-4 ">
                    En cas de non-acceptation des CGU stipulées dans le présent contrat, l’Utilisateur se doit de renoncer à
                    l’accès aux services proposés par le site.
                </p>
                {/* ss */}

                <p className="mt-4  font-semibold">
                    <a href="https://www.acwaba.com" className="text-blue-600 hover:underline">
                        https://www.acwaba.com
                    </a>{" "}
                    se réserve le droit de modifier unilatéralement et à tout moment le contenu des présentes CGU.
                </p>

                <h2 className="text-lg font-bold text-[#0F5689] mt-6">Article 1 : Les mentions légales</h2>

                <p className="mt-2 ">
                    L’édition du site{" "}
                    <a href="https://www.acwaba.com" className="text-blue-600 hover:underline">
                        https://www.acwaba.com
                    </a>{" "}
                    est assurée par la Société <strong>SAS Z&W</strong> au capital de <strong>1000 euros</strong>, immatriculée au
                    RCS de PARIS sous le numéro <strong>979604642</strong>, dont le siège social est situé au{" "}
                    <strong>25 Rue de Ponthieu, 75008 Paris</strong>.
                </p>

                <p className="mt-2 ">
                    Numéro de TVA intracommunautaire : <strong>FR88979604642</strong>
                </p>

                <p className="mt-2 ">
                    Le site{" "}
                    <a href="https://www.acwaba.com" className="text-blue-600 hover:underline">
                        https://www.acwaba.com
                    </a>{" "}
                    est hébergé en Europe chez <strong>Azure de Microsoft</strong>.
                </p>

                <p className="mt-2  mb-4">
                    Contact :{" "}
                    <a href="mailto:support@acwaba.com" className="text-blue-600 hover:underline">
                        support@acwaba.com
                    </a>
                </p>
                {/* article 2 */}
                <h2 className="text-lg font-bold mb-4">Article 2 : Accès au site</h2>
                <p className="mb-4">
                    Le site{" "}
                    <a
                        href="https://www.acwaba.com"
                        className="text-blue-600 hover:underline"
                    >
                        https://www.acwaba.com
                    </a>{" "}
                    et son contenu sont accessibles gratuitement et sans inscription au
                    préalable. Le site est accessible gratuitement en tout lieu à tout
                    Utilisateur ayant un accès à Internet.
                </p>
                <p className="mb-4">
                    Tous les frais supportés par l’Utilisateur pour accéder au service
                    (matériel informatique, logiciels, connexion Internet, etc.) sont à sa
                    charge.
                </p>
                <p className="mb-4">
                    L’accès aux services proposés par le site nécessite de créer un compte
                    utilisateur conformément aux conditions générales d’utilisation et de
                    services, acceptées au moment de l’inscription. L’Utilisateur
                    non-membre n’a pas accès aux services réservés. Pour cela, il doit
                    s’inscrire en remplissant le formulaire. En acceptant de s’inscrire aux
                    services réservés, l’Utilisateur membre s’engage à fournir des
                    informations sincères et exactes concernant son entreprise, l’identité
                    du représentant légal, et une adresse email professionnelle.
                </p>
                <p className="mb-4">
                    Pour accéder aux services, l’Utilisateur doit ensuite s’identifier à
                    l’aide de son identifiant et de son mot de passe qui lui seront
                    communiqués après son inscription.
                </p>
                <p className="mb-4">
                    Tout Utilisateur membre régulièrement inscrit pourra également
                    solliciter sa désinscription en se rendant à la page dédiée sur son
                    espace personnel. Celle-ci sera effective dans un délai raisonnable.
                    Tout événement dû à un cas de force majeure ayant pour conséquence un
                    dysfonctionnement du site ou serveur et sous réserve de toute
                    interruption ou modification en cas de maintenance, n’engage pas la
                    responsabilité de{" "}
                    <a
                        href="https://www.acwaba.com"
                        className="text-blue-600 hover:underline"
                    >
                        https://www.acwaba.com
                    </a>
                    . Dans ces cas, l’Utilisateur accepte ainsi de ne pas tenir rigueur à
                    l’éditeur de toute interruption ou suspension de service, même sans
                    préavis. L’Utilisateur a la possibilité de contacter le site par
                    messagerie électronique à l’adresse électronique de l’éditeur
                    communiquée à l’ARTICLE 1.
                </p>
                {/* article 3 */}

                <h2 className="text-lg font-bold mb-4">Article 3 : Collecte des données</h2>
                <p className="mb-4">
                    Le site assure à l’Utilisateur une collecte et un traitement d’informations personnelles
                    dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative
                    à l’informatique, aux fichiers et aux libertés, dans sa version actuelle ainsi qu’au
                    Règlement Général sur la Protection des Données (« RGPD »).
                </p>
                <p className="mb-4">
                    En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l’Utilisateur dispose
                    d’un droit d’accès, de rectification, de suppression et d’opposition de ses données personnelles.
                    L’Utilisateur exerce ce droit :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>via un formulaire de contact ;</li>
                    <li>via son espace personnel ;</li>
                </ul>
                <p className="mb-4">
                    Z&W est également qualifié de « responsable conjoint », au sens de l’article 26 du RGPD avec
                    Bridge, concernant les traitements de données confidentielles dans le cadre du compte service
                    d’agrégation des bancaires. L’utilisation du service Bridge n’est ainsi possible qu’une fois
                    que le Client a consenti à la politique de confidentialité accessible à l’adresse :{" "}
                    <a
                        href="https://bankin.com/fr/politiqueconfidentialite.html"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://bankin.com/fr/politiqueconfidentialite.html
                    </a>
                    .
                </p>
                {/* article 4 */}

                <h2 className="text-lg font-bold mb-4">Article 4 : Propriété intellectuelle</h2>
                <p className="mb-4">
                    La marque Acwaba, les logos, et tous les signes contenus du site (textes, images, son)
                    font l’objet d’une protection par le Code de la propriété intellectuelle et plus
                    particulièrement par le droit d’auteur.
                </p>
                <p className="mb-4">
                    La marque Acwaba est une marque déposée par Z&W. Toute représentation et/ou
                    reproduction et/ou exploitation partielle ou totale de cette marque, de quelque
                    nature que ce soit, est totalement interdite.
                </p>
                <p className="mb-4">
                    L’Utilisateur doit solliciter l’autorisation préalable du site pour toute reproduction,
                    publication, copie des différents contenus. Il s’engage à une utilisation des contenus
                    du site dans un cadre strictement privé, toute utilisation à des fins commerciales et
                    publicitaires est strictement interdite.
                </p>
                {/* article 5 */}

                <h2 className="text-lg font-bold mb-4">Article 5 : Responsabilité</h2>

                <p className="mb-4">
                    Les sources des informations diffusées sur le site{" "}
                    <a
                        href="https://www.acwaba.com"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.acwaba.com
                    </a>{" "}
                    sont réputées fiables mais le site ne garantit pas qu’il soit exempt de défauts,
                    d’erreurs ou d’omissions.
                </p>

                <p className="mb-4">
                    Les informations communiquées sont présentées à titre indicatif et général
                    sans valeur contractuelle. Malgré des mises à jour régulières, le site{" "}
                    <a
                        href="https://www.acwaba.com"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.acwaba.com
                    </a>{" "}
                    ne peut être tenu responsable de la modification des dispositions administratives
                    et juridiques survenant après la publication. De même, le site ne peut être tenu
                    responsable de l’utilisation et de l’interprétation de l’information contenue dans ce site.
                </p>

                <p className="mb-4">
                    L’Utilisateur s’assure de garder son mot de passe secret. Toute divulgation du mot
                    de passe, quelle que soit sa forme, est interdite. Il assume les risques liés à
                    l’utilisation de son identifiant et de son mot de passe. Le site décline toute responsabilité.
                    Le site{" "}
                    <a
                        href="https://www.acwaba.com"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.acwaba.com
                    </a>{" "}
                    ne peut être tenu responsable d’éventuels virus qui pourraient infecter l’ordinateur
                    ou tout matériel informatique de l’Internaute, suite à une utilisation, à l’accès,
                    ou au téléchargement provenant de ce site.
                </p>

                <p className="mb-4">
                    La responsabilité du site ne peut être engagée en cas de force majeure ou du fait
                    imprévisible et insurmontable d’un tiers.
                </p>
                {/* article 6 */}
                <h2 className="text-lg font-bold mb-4">Article 6 : Liens hypertextes</h2>
                <p className="mb-4">
                    Des liens hypertextes peuvent être présents sur le site. L'Utilisateur est informé
                    qu'en cliquant sur ces liens, il sortira du site{" "}
                    <a
                        href="https://www.acwaba.com"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.acwaba.com
                    </a>
                    . Ce dernier n'a pas de contrôle sur les pages web sur lesquelles portent ces liens
                    et ne saurait, en aucun cas, être responsable de leur contenu.
                </p>
                {/* article 7 */}
                <h2 className="text-lg font-bold mb-4">Article 7 : Cookies</h2>

                <p className="mb-4">
                    L'Utilisateur est informé que lors de ses visites sur le site, un cookie peut s'installer
                    automatiquement sur son logiciel de navigation.
                </p>

                <p className="mb-4">
                    Les cookies sont de petits fichiers stockés temporairement sur le disque dur de
                    l'ordinateur de l'Utilisateur par son navigateur et qui sont nécessaires à l'utilisation
                    du site{" "}
                    <a
                        href="https://www.acwaba.com"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.acwaba.com
                    </a>
                    . Les cookies ne contiennent pas d'informations personnelles et ne peuvent pas être
                    utilisés pour identifier quelqu'un. Un cookie contient un identifiant unique, généré
                    aléatoirement et donc anonyme. Certains cookies expirent à la fin de la visite de
                    l'Utilisateur, d'autres restent.
                </p>

                <p className="mb-4">
                    L'information contenue dans les cookies est utilisée pour améliorer le site{" "}
                    <a
                        href="https://www.acwaba.com"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.acwaba.com
                    </a>
                    .
                </p>

                <p className="mb-4">
                    En naviguant sur le site, l'Utilisateur les accepte. L'Utilisateur doit cependant donner
                    son consentement quant à l'utilisation de certains cookies. Par défaut d'acceptation,
                    l'Utilisateur est informé que certaines fonctionnalités ou pages risquent de lui être
                    refusées. L'Utilisateur pourra désactiver ces cookies par l'intermédiaire des paramètres
                    figurant au sein de son logiciel de navigation.
                </p>
                {/* article 8 */}
                <h2 className="text-lg font-bold mb-4">
                    Article 8 : Droit applicable et juridiction compétente
                </h2>

                <p className="mb-4">
                    La législation française s'applique au présent contrat. En cas d'absence de
                    résolution amiable d'un litige né entre les parties, les tribunaux français
                    seront seuls compétents pour en connaître.
                </p>

                <p className="mb-4">
                    Pour toute question relative à l'application des CGU actuelles, vous pouvez
                    joindre l'éditeur aux coordonnées inscrites à l'ARTICLE 1.
                </p>

            </div>
        </div>
    );
}

export default GeneralCondition;
