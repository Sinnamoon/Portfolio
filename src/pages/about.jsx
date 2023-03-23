import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import Balancer from 'react-wrap-balancer'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Joan Glendinning</title>
        <meta
          name="description"
          content="I’m Joan Glendinning. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              A little bit about myself 
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
               <Balancer>
<p>Nous avons tous nos raisons pour poursuivre nos études. Ma motivation principale est la suivante : l&apos;envie d&apos;être au premier plan du changement. Le monde évolue constamment, les technologies qu’on utilise également. Pour suivre ce rythme il n’y a rien de mieux que l’informatique. </p>
Chaque domaine de notre vie (qu’on le souhaite ou pas) est de plus en plus affecté par le numérique. Être dans le domaine dynamique de l’informatique signifie pour moi toujours devoir se renouveler pour réussir, au risque de devenir obsolète. 
L’obtention de mon baccalauréat ES au Laos avec la spécialité maths m&apos;a permis de m’axer plus sur le numérique. Mon intérêt pour le digital a commencé assez tard, en terminale (d&apos;où le choix plutôt inattendu d’un diplôme ES en informatique), les matières scientifiques, auparavant, ne m&apos;avaient pas marquée. Le moment déclencheur à été pendant mon anniversaire en 2019, un ami à mon père m’avait offert un &quot;Raspberry pi&quot;, un nano ordinateur. Plus je bricolais avec, plus ma fascination pour l’objet continuait à croître. J’ai donc commencé à tester diverses choses, je me suis mise à héberger des serveurs web, à installer des vpns, à émuler des jeux ou encore à implémenter une assistante vocale. Choisissant, progressivement, des projets de plus en plus complexes. Tout ce que je pouvais imaginer était faisable, c’était comme si un monde s’était ouvert à moi et la clé était dans cette petite boîte. Cette passion pour les appareils numériques est toujours présente, personnellement l&apos;une des parties les plus intéressantes de mon cursus actuellement est l’étude de l’Arduino (un microcontrolleur) lors de mon cours IOT. Plus précisément, l’interaction de ces appareils avec l’internet, quelque chose que nous ne pouvons ni voir ni toucher, restait pour moi, l’objet d’un mystère à résoudre. Comment communiquent t-ils ? A quoi peuvent-ils servir ? Quelles sont les limites ? Ma curiosité m&apos;amène donc à postuler pour une alternance de développement web, afin de pouvoir mieux comprendre le fonctionnement des réseaux que nous utilisons autant. 
Actuellement, je compte continuer mes études dans le web, je compte également obtenir une alternance dans ce domaine l&apos;année prochaine. Je terminerais mes études avec un master en développement web. Je pense que mon aisance avec les langues me sera utile pour étudier a l’étranger. J’envisage travailler en Chine dans le futur (raison pour laquelle je continue à m&apos;exercer dans la langue), ma facilité de m’adapter en plus de la flexibilité de mon travail me permettra de travailler partout dans le monde (pratique quand on aime bien voyager). Finalement, j’aimerais conclure avec ma perspective sur la technologie en tant que femme… En sachant que l’informatique est un milieu souvent dominé par les hommes, j’ai souvent douté de ma place dans ces études. Cependant, plus j’avance dans mon cursus, plus je me rends compte du biais de la technologie. Les femmes sont souvent oubliées, cela change progressivement, mais il reste un long chemin à parcourir. La technologie ne peut pas etre réservé aux hommes tandis que les femmes sont reléguées au second plan, alors qu’il existe tellement de manières dont la technologie pourrait rendre service à la Femme (par exemple, une conférence à laquelle j&apos;ai assisté sur l’application App-elles, lancé seulement en 2016, la 1ère application française solidaire des femmes victimes de violences). Nous avons donc besoin de plus de femmes en sciences informatique afin de mieux représenter les besoins de la société, et innover de manière équilibrée. 
               </Balancer>
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/* <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink> */}
              <SocialLink href="https://github.com/Sinnamoon" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/joan-glendinning-3a26971b6/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:joan.glendinning@ynov.com"
                icon={MailIcon}
                className="mt-4 border-t border-zinc-100 pt-4 dark:border-zinc-700/40"
              >
                joan.glendinning@ynov.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
