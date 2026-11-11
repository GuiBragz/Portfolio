/* Guilherme Braga — content, localization and accessible interactions.
   Pure vanilla JS. No tracking, no dependencies, no decorative animations. */
'use strict';
const email = 'contatoguilhermebraga16@gmail.com';
const i18n = {
  pt: {
    skip:'Pular para conteúdo',navProjects:'Projetos',navAbout:'Sobre',navExperience:'Experiência',navContact:'Contato',navLetsTalk:'Vamos conversar',
    heroLabel:'GUILHERME BRAGA · PORTFÓLIO',heroFirst:'Ideias ganham',heroSecond:'forma aqui.',heroDescription:'Sou analista de sistemas e desenvolvedor. Transformo necessidades reais em produtos digitais simples, funcionais e bem construídos.',seeProjects:'Explorar projetos',moreAbout:'Mais sobre mim',heroFoot:'Desenvolvimento web, sistemas e tecnologia aplicada ao dia a dia.',photoLabel:'RECIFE · BRASIL',
    stripIntro:'O que conecta meu trabalho',stripOne:'Sistemas',stripTwo:'Desenvolvimento web',stripThree:'Experiência do usuário',stripFour:'Suporte técnico',
    projectsLabel:'PROJETOS SELECIONADOS',projectsTitle:'Do conceito à prática.',projectsIntro:'Algumas das soluções que venho criando, estudando e colocando no mundo — cada uma com um problema diferente para resolver.',projectFeatureLabel:'PROJETO EM DESTAQUE',developing:'Em desenvolvimento',viewCase:'Conhecer o projeto',
    vayallenArea:'Turismo · Plataforma digital',vayallenSummary:'Uma experiência mais simples para descobrir hospedagens, passeios e viver novas histórias.',nexcanArea:'Ferramenta web · Produtividade',nexcanSummary:'Leitor de QR Codes que libera a câmera automaticamente após a leitura.',nivroArea:'Mobile · Gestão financeira',nivroSummary:'Aplicativo de finanças pessoais com atenção aos detalhes e à experiência mobile.',tirouArea:'Aplicação web · Tempo real',tirouSummary:'Uma forma prática e divertida de organizar amigos secretos e sorteios em grupo.',zentryArea:'Web · Foco e produtividade',zentrySummary:'Espaço digital para estudar, organizar tarefas e manter o foco com Pomodoro.',controlArea:'Sistema web · Projeto de graduação',controlSummary:'Sistema de controle financeiro desenvolvido como TCC e aprovado com nota máxima.',hexArea:'Ferramenta · Design e desenvolvimento',hexSummary:'Uma ferramenta para descobrir, organizar e combinar cores em projetos digitais.',artNote:'As ilustrações acima são representações conceituais dos projetos, não capturas de tela dos sistemas.',
    aboutLabel:'SOBRE MIM',aboutLineOne:'Curiosidade para',aboutLineTwo:'entender.',aboutLineThree:'Código para resolver.',aboutLead:'Gosto de entender a necessidade antes de escolher a tecnologia. Meu trabalho começa com perguntas e ganha forma em soluções úteis.',aboutBodyOne:'Sou graduado em Análise e Desenvolvimento de Sistemas pela UNIBRA e curso pós-graduação em Engenharia de Software. Minha trajetória conecta desenvolvimento web, análise de requisitos, projetos próprios e vivência com tecnologia em ambientes operacionais.',aboutBodyTwo:'Também tenho experiência com atendimento, organização de processos, abertura e acompanhamento de chamados e suporte técnico inicial. Essa combinação me ajuda a enxergar o sistema e as pessoas que vão utilizá-lo.',downloadResume:'Visualizar currículo',
    experienceLabel:'TRAJETÓRIA',experienceTitle:'Experiência que soma.',experienceIntro:'Entre operação, pessoas e tecnologia, venho construindo uma visão prática de como resolver problemas.',dateCurrent:'2026 — ATUAL',experienceRoleOne:'Assistente Administrativo de TI',experienceDescOne:'Suporte inicial a equipamentos e sistemas, triagem e acompanhamento de chamados, identificação de problemas e interface com equipes técnicas.',experienceRoleTwo:'Assistente Administrativo',experienceDescTwo:'Atendimento, organização de rotinas, gestão documental e acompanhamento de solicitações internas e tecnológicas.',experienceRoleThree:'Assistente Administrativo',experienceDescThree:'Controles administrativos e financeiros, organização de documentos, conferência de registros e apoio à equipe.',
    skillsLabel:'FERRAMENTAS & CONHECIMENTO',skillsTitle:'O que uso para criar.',skillsIntro:'Ferramentas são meios, não fins. Escolho o que faz sentido para cada desafio.',skillWeb:'Desenvolvimento',skillSystems:'Sistemas e dados',skillTools:'Infraestrutura e ferramentas',skillProcess:'Processos e suporte',
    educationLabel:'FORMAÇÃO & APRENDIZADO',educationTitle:'Sempre em construção.',educationOne:'Análise e Desenvolvimento de Sistemas',degreeDone:'Graduação concluída',postgradPeriod:'PÓS-GRADUAÇÃO · EM ANDAMENTO',educationTwo:'Engenharia de Software',postgradStatus:'Especialização em andamento',educationThree:'Gestão de Projetos de Software com PMBOK',educationCourse:'Curso de aperfeiçoamento · 40 horas',languageStatus:'SENAC · EM ANDAMENTO',educationFour:'Inglês',languageLearning:'Formação continuada',
    contactLabel:'PRÓXIMO PROJETO',contactOne:'Vamos construir',contactTwo:'algo novo?',contactDesc:'Estou aberto a oportunidades em tecnologia, colaborações e conversas sobre boas ideias.',copyEmail:'Copiar e-mail ↗',copied:'E-mail copiado ✓',rights:'Feito com atenção aos detalhes.',backTop:'Voltar ao topo ↑',modalLabel:'SOBRE O PROJETO',modalContext:'A ideia',modalTech:'Tecnologias',projectLive:'Acessar projeto ↗',projectRepo:'Ver repositório ↗',projectWebsite:'Ver site de apresentação ↗',closeModal:'Fechar detalhes',mobileMenu:'Abrir menu',mobileClose:'Fechar menu'
  },
  en: {
    skip:'Skip to content',navProjects:'Projects',navAbout:'About',navExperience:'Experience',navContact:'Contact',navLetsTalk:"Let's talk",
    heroLabel:'GUILHERME BRAGA · PORTFOLIO',heroFirst:'Ideas take',heroSecond:'shape here.',heroDescription:'I am a systems analyst and developer. I turn real needs into simple, useful and thoughtfully built digital products.',seeProjects:'Explore projects',moreAbout:'About me',heroFoot:'Web development, systems and technology for everyday challenges.',photoLabel:'RECIFE · BRAZIL',
    stripIntro:'What connects my work',stripOne:'Systems',stripTwo:'Web development',stripThree:'User experience',stripFour:'IT support',
    projectsLabel:'SELECTED PROJECTS',projectsTitle:'From concept to reality.',projectsIntro:'A selection of things I have been building, learning and sharing — each one solving a different problem.',projectFeatureLabel:'FEATURED PROJECT',developing:'In development',viewCase:'Explore project',
    vayallenArea:'Travel · Digital platform',vayallenSummary:'A simpler way to discover stays, experiences and new stories.',nexcanArea:'Web tool · Productivity',nexcanSummary:'A QR code reader that automatically releases the camera after scanning.',nivroArea:'Mobile · Personal finance',nivroSummary:'A personal finance app with a careful focus on the mobile experience.',tirouArea:'Web app · Real-time',tirouSummary:'A practical, fun way to organize Secret Santa groups and draws.',zentryArea:'Web · Focus and productivity',zentrySummary:'A digital space for studying, managing tasks and staying focused with Pomodoro.',controlArea:'Web system · College capstone',controlSummary:'A financial management system built as a capstone project and awarded the highest grade.',hexArea:'Tool · Design and development',hexSummary:'A tool to discover, organize and combine colors for digital projects.',artNote:'Project illustrations are conceptual, not actual application screenshots.',
    aboutLabel:'ABOUT ME',aboutLineOne:'Curiosity to',aboutLineTwo:'understand.',aboutLineThree:'Code to solve.',aboutLead:'I like to understand the need before choosing the technology. My work starts with questions and takes shape as useful solutions.',aboutBodyOne:'I hold a degree in Systems Analysis and Development from UNIBRA and am pursuing postgraduate studies in Software Engineering. My path connects web development, requirements analysis, independent projects and experience with technology in operational settings.',aboutBodyTwo:'I also have experience in customer service, process organization, tracking support requests and first-line IT support. This combination helps me see both the system and the people who will use it.',downloadResume:'View résumé',
    experienceLabel:'JOURNEY',experienceTitle:'Experience that adds value.',experienceIntro:'Working across operations, people and technology has helped me build a hands-on approach to problem solving.',dateCurrent:'2026 — PRESENT',experienceRoleOne:'IT Administrative Assistant',experienceDescOne:'First-line support for equipment and systems, incident triage and tracking, issue identification and collaboration with technical teams.',experienceRoleTwo:'Administrative Assistant',experienceDescTwo:'Customer service, operational coordination, documentation and tracking internal and technology-related requests.',experienceRoleThree:'Administrative Assistant',experienceDescThree:'Administrative and financial controls, document organization, record checking and team support.',
    skillsLabel:'TOOLS & EXPERTISE',skillsTitle:'What I build with.',skillsIntro:'Tools are means, not ends. I choose what fits each challenge.',skillWeb:'Development',skillSystems:'Systems and data',skillTools:'Infrastructure and tools',skillProcess:'Processes and support',
    educationLabel:'EDUCATION & LEARNING',educationTitle:'Always learning.',educationOne:'Systems Analysis and Development',degreeDone:'Completed degree',postgradPeriod:'POSTGRADUATE · IN PROGRESS',educationTwo:'Software Engineering',postgradStatus:'Postgraduate program in progress',educationThree:'Software Project Management with PMBOK',educationCourse:'Professional course · 40 hours',languageStatus:'SENAC · IN PROGRESS',educationFour:'English',languageLearning:'Continuing education',
    contactLabel:'THE NEXT PROJECT',contactOne:"Let's build",contactTwo:'something new.',contactDesc:'I am open to technology opportunities, collaborations and conversations about great ideas.',copyEmail:'Copy email ↗',copied:'Email copied ✓',rights:'Made with attention to detail.',backTop:'Back to top ↑',modalLabel:'PROJECT DETAILS',modalContext:'The idea',modalTech:'Technology',projectLive:'Open project ↗',projectRepo:'View repository ↗',projectWebsite:'Visit presentation site ↗',closeModal:'Close details',mobileMenu:'Open menu',mobileClose:'Close menu'
  }
};
const projects = {
  vayallen:{title:'Vayallen',area:'vayallenArea',summary:'vayallenSummary',context:{pt:'Plataforma de turismo e hospedagens pensada para conectar viajantes e operadores em uma experiência mais simples. O produto está em desenvolvimento, com jornadas de descoberta, reservas e comunicação entre participantes.',en:'A travel and stays platform designed to connect guests and operators through a simpler experience. The product is in development, with discovery, booking and communication journeys.'},stack:['Web','AdonisJS','TypeScript','Docker','SQLite'],links:[{type:'website',url:'https://vayallen.com.br/'}]},
  nexcan:{title:'Nexcan',area:'nexcanArea',summary:'nexcanSummary',context:{pt:'Criado a partir de um problema real no ambiente de trabalho: leitores de QR Code que continuavam ocupando a câmera após a leitura. O Nexcan encerra a captura após reconhecer o código, liberando a câmera para outros sistemas.',en:'Built after encountering a real workflow problem: QR readers that kept using the camera after scanning. Nexcan stops capture after detecting the code, releasing the camera for other applications.'},stack:['React','TypeScript','Web APIs','Vercel'],links:[{type:'live',url:'https://nexcan.vercel.app/'},{type:'repo',url:'https://github.com/GuiBragz/Nexcan'}]},
  nivro:{title:'Nivro',area:'nivroArea',summary:'nivroSummary',context:{pt:'Aplicativo de gestão financeira pessoal, inspirado na experiência adquirida com o Control Cash. Reúne acompanhamento de receitas, despesas e contas, com interface mobile e recursos de organização financeira. Em desenvolvimento.',en:'A personal finance app growing from lessons learned building Control Cash. It brings income, expenses and account tracking together in a mobile interface. In development.'},stack:['React Native','Expo','NestJS','TypeScript'],links:[]},
  tirouquem:{title:'Tirou Quem',area:'tirouArea',summary:'tirouSummary',context:{pt:'Projeto de amigo secreto para criar salas, reunir participantes e conduzir sorteios com uma experiência direta e leve. Explora comunicação em tempo real e estrutura de aplicação web.',en:'A Secret Santa web project for creating rooms, gathering participants and running draws in a straightforward experience. It explores real-time communication and web architecture.'},stack:['Node.js','Express','Socket.IO','Docker'],links:[]},
  zentry:{title:'Zentry',area:'zentryArea',summary:'zentrySummary',context:{pt:'Aplicação web de foco baseada em ciclos Pomodoro, com ferramentas de produtividade e organização de tarefas. Desenvolvida para ser simples de usar durante estudos e sessões de trabalho.',en:'A focus and productivity web app based on Pomodoro cycles, with task organization. Built to be straightforward during studying and work sessions.'},stack:['Web','JavaScript','Pomodoro','Vercel'],links:[{type:'live',url:'https://zentry-foco-e-produtividade.vercel.app/'}]},
  controlcash:{title:'Control Cash',area:'controlArea',summary:'controlSummary',context:{pt:'Projeto de conclusão do curso de ADS com foco em gestão financeira pessoal e empresarial. Envolveu organização de requisitos, coordenação do trabalho em equipe e desenvolvimento de uma solução digital. Foi aprovado com nota 10.',en:'Systems Analysis and Development capstone project focused on personal and business financial management. It involved requirements, teamwork and developing a digital solution. Awarded the highest grade.'},stack:['JavaScript','HTML','CSS','Firebase','Gestão de projetos'],links:[]},
  hexcolor:{title:'HexColor',area:'hexArea',summary:'hexSummary',context:{pt:'Ferramenta para apoiar a exploração de códigos hexadecimais, organização de paletas e comparação de combinações de cores durante o processo de design e desenvolvimento.',en:'A tool for exploring hex colors, organizing palettes and comparing combinations during design and development.'},stack:['React','JavaScript','CSS','UI Design'],links:[]}
};
const $ = (sel,root=document)=>root.querySelector(sel);
const $$ = (sel,root=document)=>[...root.querySelectorAll(sel)];
let lang='pt';
try{const saved=localStorage.getItem('gui-braga-language'); if(saved==='en')lang='en'}catch{}
let activeProject=null;
const modal=$('#projectModal');
const menu=$('#mobileMenu');
const menuToggle=$('#menuToggle');
let focusBeforeModal=null;
function applyLanguage(next){
  lang=next==='en'?'en':'pt';
  document.documentElement.lang=lang==='pt'?'pt-BR':'en';
  $$('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(i18n[lang][key])el.textContent=i18n[lang][key]});
  $('#langToggle').textContent=lang==='pt'?'EN':'PT';
  $('#langToggle').setAttribute('aria-label',lang==='pt'?'Switch language to English':'Mudar idioma para português');
  $('#modalClose').setAttribute('aria-label',i18n[lang].closeModal);
  menuToggle.setAttribute('aria-label',i18n[lang][menu.hidden?'mobileMenu':'mobileClose']);
  if(activeProject)fillModal(activeProject);
  try{localStorage.setItem('gui-braga-language',lang)}catch{}
}
$('#langToggle').addEventListener('click',()=>applyLanguage(lang==='pt'?'en':'pt'));
function toggleMenu(open){
  menu.hidden=!open;
  menuToggle.setAttribute('aria-expanded',String(open));
  menuToggle.setAttribute('aria-label',i18n[lang][open?'mobileClose':'mobileMenu']);
  menuToggle.classList.toggle('is-open',open);
}
menuToggle.addEventListener('click',()=>toggleMenu(menu.hidden));
$$('#mobileMenu a').forEach(a=>a.addEventListener('click',()=>toggleMenu(false)));
window.addEventListener('resize',()=>{if(window.innerWidth>870)toggleMenu(false)});
function fillModal(key){
  const p=projects[key]; if(!p)return;
  $('#modalArea').textContent=i18n[lang][p.area];
  $('#modalTitle').textContent=p.title;
  $('#modalSummary').textContent=i18n[lang][p.summary];
  $('#modalContextText').textContent=p.context[lang];
  $('#modalTechList').replaceChildren(...p.stack.map(s=>{const el=document.createElement('span');el.textContent=s;return el}));
  const actions=$('#modalActions');actions.replaceChildren();
  p.links.forEach((link,index)=>{const a=document.createElement('a');a.href=link.url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=i18n[lang][link.type==='repo'?'projectRepo':link.type==='website'?'projectWebsite':'projectLive'];if(index>0)a.classList.add('secondary');actions.append(a)});
}
function openProject(key){
  if(!projects[key])return;
  focusBeforeModal=document.activeElement;activeProject=key;fillModal(key);
  modal.hidden=false;modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');$('#modalClose').focus();
}
function closeProject(){
  if(modal.hidden)return;
  modal.hidden=true;modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');activeProject=null;
  if(focusBeforeModal && document.contains(focusBeforeModal))focusBeforeModal.focus();
}
$$('button[data-project]').forEach(button=>button.addEventListener('click',()=>openProject(button.dataset.project)));
$('#modalClose').addEventListener('click',closeProject);
modal.addEventListener('click',e=>{if(e.target===modal)closeProject()});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeProject();toggleMenu(false);return}
  if(e.key==='Tab'&&!modal.hidden){
    const els=$$('button:not([disabled]),a[href]',modal).filter(el=>el.getClientRects().length);
    if(!els.length)return;
    if(e.shiftKey && document.activeElement===els[0]){e.preventDefault();els.at(-1).focus()}
    else if(!e.shiftKey && document.activeElement===els.at(-1)){e.preventDefault();els[0].focus()}
  }
});
$('#copyEmail').addEventListener('click',async()=>{
  try{
    await navigator.clipboard.writeText(email);
    const el=$('#copyEmail');el.textContent=i18n[lang].copied;
    window.setTimeout(()=>{el.textContent=i18n[lang].copyEmail},1800);
  }catch{window.location.href=`mailto:${email}`}
});
$('#year').textContent=new Date().getFullYear();
applyLanguage(lang);
