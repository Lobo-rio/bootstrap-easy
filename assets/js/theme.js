/* Setando o ponto de partida */
const elApp = document.querySelector('div#app')

/* Setando os elementos do header */
const elHeader = document.createElement('header')
const elHeaderH1 = document.createElement('h1')
const elHeaderP = document.createElement('p')

const elNav = document.createElement('nav')
const elNavDiv = document.createElement('div')
const elNavUl = document.createElement('ul')
const elNavA = document.createElement('a')
const elNavImg = document.createElement('img')
const elNavButton = document.createElement('button')
const elNavSpan = document.createElement('span')

const elSection = document.createElement('section')
const elArticle = document.createElement('article')
const elAside = document.createElement('aside')


elApp.appendChild(elHeader);


/* Setando o menu NavBar */
class menuNavBar {
    constructor() {
        elHeader.appendChild(elNav)
        elNav.appendChild(elNavA)
        elNavA.appendChild(elNavImg)
        elNav.appendChild(elNavButton)
        elNavButton.appendChild(elNavSpan)
        elNav.appendChild(elNavDiv)
        elNavDiv.appendChild(elNavUl)
    }

    startMenu(textNavClass, textNavImgLogo, textNavUlClass,
        textNavAMenuHref, textNavAMenu) {
        this.navClass(textNavClass)
        this.navALogo(textNavImgLogo)
        this.navButtonAttribut()
        this.navSpanAttribut()
        this.navDivClass()
        this.navUlClass(textNavUlClass)
        this.navAMenuText(textNavAMenu, textNavAMenuHref)
    }

    navClass(textNavClass) {
        textNavClass.map(function (elem) {
            return elNav.classList.add(elem);
        });
    }

    navALogo(textNavImgLogo) {
        elNavA.setAttribute('class', 'navbar-brand');
        elNavA.setAttribute("href", `${textNavImgLogo[1]}`)
        elNavImg.setAttribute('alt', 'Image Logo')
        elNavImg.setAttribute('src', textNavImgLogo[0])
    }


    navButtonAttribut() {
        elNavButton.setAttribute('class', 'navbar-toggler')
        elNavButton.setAttribute('type', 'button')
        elNavButton.setAttribute('data-toggle', 'collapse')
        elNavButton.setAttribute('data-target', '#mainMenu')
        elNavButton.setAttribute('aria-controls', 'mainMenu')
        elNavButton.setAttribute('aria-expanded', 'false')
        elNavButton.setAttribute('aria-label', 'Alterna navegação')

        const elButtonToggler = document.querySelector("nav button")

        elButtonToggler.addEventListener("click", () => {
            
        })

    }

    navSpanAttribut() {
        elNavSpan.setAttribute('class', 'navbar-toggler-icon')
    }

    navDivClass() {
        elNavDiv.setAttribute('id', 'mainMenu')
        elNavDiv.setAttribute('class', 'collapse navbar-collapse')
    }

    navUlClass(textNavUlClass) {
        textNavUlClass.map(function (elem) {
            return elNavUl.classList.add(elem);
        });
    }

    navAMenuText(textNavAMenu, textNavAMenuHref) {
        for (var i = 0; i < textNavAMenu.length; i++) {
            var elNavLi = document.createElement('li')
            var elNavAMenu = document.createElement('a')

            var textNav = document.createTextNode(textNavAMenu[i])
            if (i == 0) {
                elNavLi.setAttribute('class', 'nav-item active');
            } else {
                elNavLi.setAttribute('class', 'nav-item');
            }
            elNavAMenu.appendChild(textNav)
            elNavAMenu.setAttribute('class', 'nav-link')
            elNavAMenu.setAttribute('href', textNavAMenuHref[i])
            elNavLi.appendChild(elNavAMenu)
            elNavUl.appendChild(elNavLi)
        }
    }

}

const elemNavBar = ['navbar', 'navbar-expand-lg', 'navbar-light', 'bg-transparent'];
const elemImgLogo = ['assets/img/logo.png', '#'];
const elemUl = ['navbar-nav', 'ml-auto'];
const elemAMenuHref = ['#Inicio', '#section-whoami', '#section-services', '#section-portfolio', '#section-contact'];
const elemAMenuText = ['Início', 'Quem Sou', 'Serviços', 'Portfólio', 'Contato']

const newNavClass = new menuNavBar();

newNavClass.startMenu(elemNavBar, elemImgLogo, elemUl, elemAMenuHref,
    elemAMenuText);

/* Setando o Header da Página */
class headerTop {
    constructor() {
        elHeader.appendChild(elHeaderH1)
        elHeader.appendChild(elHeaderP)
    }

    startHeader(textHeaderId, textHeaderH1Class, TextHeaderPClass,
        textHeaderTitle, textHeaderSubTitle) {

        this.headerIdClass(textHeaderId, textHeaderH1Class, TextHeaderPClass)
        this.headerTitle(textHeaderTitle)
        this.headerSubTitle(textHeaderSubTitle)
    }

    headerIdClass(textHeaderId, textHeaderH1Class, textHeaderPClass) {
        elHeader.setAttribute('id', textHeaderId)
        elHeaderH1.setAttribute('class', textHeaderH1Class)
        elHeaderP.setAttribute('class', textHeaderPClass)
    }

    headerTitle(textHeaderTitle) {
        const textH1 = document.createTextNode(textHeaderTitle)
        elHeaderH1.appendChild(textH1)
    }

    headerSubTitle(textHeaderSubTitle) {
        const textP = document.createTextNode(textHeaderSubTitle)
        elHeaderP.appendChild(textP)
    }
}

const elemHeaderId = 'top-header';
const elemTitleClass = 'top-title text-center mt-5';
const elemSubTitleClass = 'top-subtitle text-center mt-1';
const elemHeaderTittle = 'Generate Lorem Ipsum placeholder text!';
const elemHeaderSubTitle = 'Lorem Ipsum is simply dummy text of the printing. Is simply dummy text of the printing.'

const newHeaderStar = new headerTop;
newHeaderStar.startHeader(elemHeaderId, elemTitleClass, elemSubTitleClass,
    elemHeaderTittle, elemHeaderSubTitle);


/* Setando os elementos da section Quem Sou */
const elSectionWhoAmI = document.createElement('section')
const elDivWhoAmIContainer = document.createElement('div')
const elDivWhoAmIRow = document.createElement('div')
const elDivWhoAmICol01 = document.createElement('div')
const elDivWhoAmICol02 = document.createElement('div')

elApp.appendChild(elSectionWhoAmI)

class sectionWhoAmI {
    constructor(){
        elSectionWhoAmI.appendChild(elDivWhoAmIContainer)
        elDivWhoAmIContainer.appendChild(elDivWhoAmIRow)
        elDivWhoAmIRow.appendChild(elDivWhoAmICol01)
        elDivWhoAmIRow.appendChild(elDivWhoAmICol02)

        elSectionWhoAmI.setAttribute('id', 'section-whoami')
        elDivWhoAmIContainer.setAttribute('class', 'container')
        elDivWhoAmIRow.setAttribute('class', 'row')
        elDivWhoAmICol01.setAttribute('id', 'sectionWhoAmICol01')
        elDivWhoAmICol01.setAttribute('class', 'col-xs-12 col-sm-12 col-md-6 col-lg-6')
        elDivWhoAmICol02.setAttribute('id', 'sectionWhoAmICol02')
        elDivWhoAmICol02.setAttribute('class', 'col-xs-12 col-sm-12 col-md-6 col-lg-6')
    }

    startSectionWhoAmI(textWhoAmICol01, textWhoAmICol02) {
        this.startWhoAmICol01(textWhoAmICol01)
        this.startWhoAmICol02(textWhoAmICol02)
    }

    startWhoAmICol01(textWhoAmICol01) {
        const elWhoAmIColImg = document.createElement('img')

        elDivWhoAmICol01.appendChild(elWhoAmIColImg)
        elWhoAmIColImg.setAttribute('src', textWhoAmICol01[0])
        elWhoAmIColImg.setAttribute('class', 'img-thumbnail mx-auto d-block')
        elWhoAmIColImg.setAttribute('alt', 'GSM')
        elWhoAmIColImg.setAttribute('width', '210px')

    }

    startWhoAmICol02(textWhoAmICol02) {
        const elWhoAmITitle = document.createElement('h3')
        const elWhoAmISubTitle = document.createElement('p')
        const elWhoAmIParagraph = document.createElement('p')
        elDivWhoAmICol02.appendChild(elWhoAmITitle)
        elDivWhoAmICol02.appendChild(elWhoAmISubTitle)
        elDivWhoAmICol02.appendChild(elWhoAmIParagraph)

        elWhoAmITitle.setAttribute('class', 'text-center')
        elWhoAmITitle.innerHTML = textWhoAmICol02[0]

        elWhoAmISubTitle.setAttribute('class', 'text-center text-muted')
        elWhoAmISubTitle.innerHTML = textWhoAmICol02[1]

        elWhoAmIParagraph.setAttribute('class', 'text-muted')
        elWhoAmIParagraph.innerHTML = textWhoAmICol02[2]

        var elWhoAmIDivColRow2 = document.createElement('div')
        elDivWhoAmICol02.appendChild(elWhoAmIDivColRow2)
        elWhoAmIDivColRow2.setAttribute('class', 'row')

        var elWhoAmIDivCol2 = document.createElement('div')
        elWhoAmIDivColRow2.appendChild(elWhoAmIDivCol2)
        elWhoAmIDivCol2.setAttribute('class', 'col-6 text-center')
        var elWhoAmISpanCol2 = document.createElement('span')
        elWhoAmIDivCol2.appendChild(elWhoAmISpanCol2)
        elWhoAmISpanCol2.setAttribute('class', 'btn btn-outline-info')
        elWhoAmISpanCol2.innerHTML = textWhoAmICol02[3]

        var elWhoAmIDivCol2 = document.createElement('div')
        elWhoAmIDivColRow2.appendChild(elWhoAmIDivCol2)
        elWhoAmIDivCol2.setAttribute('class', 'col-6 text-center')
        var elWhoAmISpanCol2 = document.createElement('span')
        elWhoAmIDivCol2.appendChild(elWhoAmISpanCol2)
        elWhoAmISpanCol2.setAttribute('class', 'btn btn-outline-success')
        elWhoAmISpanCol2.innerHTML = textWhoAmICol02[4]

    }

}

const elemWhoAmICol01 = [
    'assets/img/GilbertoMedeiros.png'
]

const elemWhoAmICol02 = [
    'Quem Sou',
    'Um pequeno resumo da minha jornada!',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'facebook.com/gsmloborio',
    'linkedin.com/gsmloborio'
]
const newSectionWhoAmI = new sectionWhoAmI()
newSectionWhoAmI.startSectionWhoAmI(elemWhoAmICol01, elemWhoAmICol02)

/* Setando os elementos da section de Serviços */
const elSectionServices = document.createElement('section')
const elDivServices = document.createElement('div')
const elH2Services = document.createElement('h2')
const elPServices = document.createElement('p')
const elServicesRow = document.createElement('div')

elApp.appendChild(elSectionServices);

class sectionServices {
    constructor() {
        elSectionServices.appendChild(elDivServices)
        elDivServices.appendChild(elH2Services)
        elDivServices.appendChild(elPServices)

        elSectionServices.setAttribute('id', 'section-services')
        elDivServices.setAttribute('class', 'container')
    }

    startSectionServices(textSectionServiceH2P, textSectionServicesColumn,
        textSectionServicesCard) {
        this.sectionServicesH2P(textSectionServiceH2P)
        this.sectionCards(textSectionServicesColumn, textSectionServicesCard)
    }

    sectionServicesH2P(textSectionServiceH2P) {
        textSectionServiceH2P.map(function () {
            var textServivesH2 = document.createTextNode(textSectionServiceH2P[0])
            var textSectionP = document.createTextNode(textSectionServiceH2P[1])
            elH2Services.appendChild(textServivesH2)
            elH2Services.setAttribute('class', 'text-center')
            elPServices.appendChild(textSectionP)
            elPServices.setAttribute('class', 'text-center mb-2')
        })
    }

    sectionCards(textSectionServicesCollumn, textSectionServicesCard) {
        elDivServices.appendChild(elServicesRow)
        elServicesRow.setAttribute('class', 'row')

        var columnSize = this.incrementCollumn(textSectionServicesCollumn)

        for (var i = 0; i < textSectionServicesCollumn; i++) {
            var elServicesCol = document.createElement('div')
            elServicesCol.setAttribute('class', `col-xs-12 col-sm-12 col-md-6 col-lg-${columnSize} text-center`)
            elServicesRow.appendChild(elServicesCol)
            var elServicesCardImage = document.createElement('img')
            var elServicesCardTitle = document.createElement('h4')
            var elServicesCardText = document.createElement('p')

            var textMountCard = this.incrementMountCard(i, textSectionServicesCard)
            var textTitleCard = document.createTextNode(textMountCard[1])
            var textCard = document.createTextNode(textMountCard[2])

            elServicesCardImage.setAttribute('src', textMountCard[0])
            elServicesCardImage.setAttribute('alt', textMountCard[1])
            elServicesCol.appendChild(elServicesCardImage)

            elServicesCardTitle.appendChild(textTitleCard)
            elServicesCol.appendChild(elServicesCardTitle)

            elServicesCardText.appendChild(textCard)
            elServicesCol.appendChild(elServicesCardText)

        }
    }

    incrementCollumn(textSectionServicesCollumn) {
        switch (textSectionServicesCollumn) {
            case 1:
                return 12;
                break;
            case 2:
                return 6;
                break;
            case 3:
                return 4;
                break;
            case 4:
                return 3;
                break;
            default:
                return 12;
        }
    }

    incrementMountCard(indice, textSectionServicesCard) {
        var textMountCard = [];
        switch (indice) {
            case 0:
                textMountCard.push(textSectionServicesCard[0])
                textMountCard.push(textSectionServicesCard[1])
                textMountCard.push(textSectionServicesCard[2])
                return textMountCard
                break;
            case 1:
                textMountCard.push(textSectionServicesCard[3])
                textMountCard.push(textSectionServicesCard[4])
                textMountCard.push(textSectionServicesCard[5])
                return textMountCard
                break;
            case 2:
                textMountCard.push(textSectionServicesCard[6])
                textMountCard.push(textSectionServicesCard[7])
                textMountCard.push(textSectionServicesCard[8])
                return textMountCard
                break;
            case 3:
                textMountCard.push(textSectionServicesCard[9])
                textMountCard.push(textSectionServicesCard[10])
                textMountCard.push(textSectionServicesCard[11])
                return textMountCard
                break;
            default:
                textMountCard.push(textSectionServicesCard[0])
                textMountCard.push(textSectionServicesCard[1])
                textMountCard.push(textSectionServicesCard[2])
                return textMountCard
        }

    }

}

const elemSectionServiceH2P = [
    'Nossos Serviços',
    'Contrary to popular belief, Lorem Ipsum is not simply random text.'
]
const elemSectionServicesCollumn = 3
const elemSectionServicesCard = [
    'assets/img/icons/Bar-Chart.png',
    'Contrary to popular',
    'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC',
    'assets/img/icons/Graph-Diagram.png',
    'There are many',
    'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC',
    'assets/img/icons/Light-Bulb.png',
    'It is a long',
    'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
]

const newSectionServices = new sectionServices()
newSectionServices.startSectionServices(elemSectionServiceH2P, elemSectionServicesCollumn,
    elemSectionServicesCard)

/* Setando os elementos do Section do Orçamento */
const elSectionBudget = document.createElement('section')
const elDivBudget = document.createElement('div')
const elH3Budget = document.createElement('h3')
const elPBudget = document.createElement('p')
const elButtonBudget = document.createElement('button')

elApp.appendChild(elSectionBudget);

/* Setando section de Pedido de Orçamento */

class sectionBudget {
    constructor() {
        elSectionBudget.appendChild(elDivBudget)
        elDivBudget.appendChild(elH3Budget)
        elDivBudget.appendChild(elPBudget)
        elDivBudget.appendChild(elButtonBudget)
    }

    startSectionBudget(textSectionBudget, textSectionBudgetDiv, textSectionBudgetH3, textSectionBudgetP,
        textSectionBudgetButton) {

        this.sectionBudgetDiv(textSectionBudget, textSectionBudgetDiv)
        this.sectionBudgetElem(
            textSectionBudgetH3,
            textSectionBudgetP,
            textSectionBudgetButton
        )
    }

    sectionBudgetDiv(textSectionBudget, textSectionBudgetDiv) {
        elSectionBudget.setAttribute('id', textSectionBudget)
        textSectionBudgetDiv.map(function (elem) {
            elDivBudget.classList.add(elem)
        })
    }

    sectionBudgetElem(textSectionBudgetH3, textSectionBudgetP, textSectionBudgetButton) {
        elH3Budget.classList.add(textSectionBudgetH3[0])
        var textH2Budget = document.createTextNode(textSectionBudgetH3[1])
        elH3Budget.appendChild(textH2Budget)

        elPBudget.classList.add(textSectionBudgetP[0])
        var textPBudget = document.createTextNode(textSectionBudgetP[1])
        elPBudget.appendChild(textPBudget)

        elButtonBudget.setAttribute('class', textSectionBudgetButton[0])
        var textButtonBudget = document.createTextNode(textSectionBudgetButton[1])
        elButtonBudget.appendChild(textButtonBudget)
    }
}

const elemSectionBudget = 'section-budget'
const elemSectionBudgetDiv = [
    'container',
    'text-center'
]
const elemSectionBudgetH3 = [
    'h3-budget',
    'Orçamentos e Contatos'
]
const elemSectionBudgetP = [
    'p-budget',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
]
const elemSectionBudgetButton = [
    'btn btn-outline-warning btn-lg',
    'Clique Aqui!'
]

const newSectionBudget = new sectionBudget()
newSectionBudget.startSectionBudget(elemSectionBudget, elemSectionBudgetDiv, elemSectionBudgetH3,
    elemSectionBudgetP, elemSectionBudgetButton)

/* Setando section de Portfolio */

const elSectionPortfolio = document.createElement('section')
const elDivPortfolio = document.createElement('div')
const elH3Portfolio = document.createElement('h3')
const elPPortfolio = document.createElement('p')
const elDivCardRowTitle = document.createElement('div')
const elDivCardColTitle = document.createElement('div')
const elDivCardRow = document.createElement('div')



elApp.appendChild(elSectionPortfolio);

class sectionPortfolio {
    constructor() {
        elSectionPortfolio.appendChild(elDivPortfolio)

        elSectionPortfolio.setAttribute('id', 'section-portfolio')
        elDivPortfolio.setAttribute('class', 'container text-center')
    }

    startSectionPortfolio(textTitlePortfolio, textCardSize, textCardPortfolio) {
        this.newTitlePortfolio(textTitlePortfolio)
        this.newCardPortfolio(textCardSize, textCardPortfolio)
    }

    newTitlePortfolio(textTitlePortfolio) {
        elDivCardRowTitle.setAttribute('class', 'row')
        elDivPortfolio.appendChild(elDivCardRowTitle)
        elDivCardColTitle.setAttribute('class', `col-12`)
        elDivCardRowTitle.appendChild(elDivCardColTitle)

        const textH3Title = document.createTextNode(textTitlePortfolio[0])
        elH3Portfolio.appendChild(textH3Title)
        elDivCardColTitle.appendChild(elH3Portfolio)

        const textPSubTitle = document.createTextNode(textTitlePortfolio[1])
        elPPortfolio.appendChild(textPSubTitle)
        elDivCardColTitle.appendChild(elPPortfolio)
    }

    newCardPortfolio(textCardCol, textCardPortfolio) {
        let newDataCard = []
        let numberCard = 0;

        elDivCardRow.setAttribute('class', 'row')
        elDivPortfolio.appendChild(elDivCardRow)

        for (var i = 0; i < textCardPortfolio.length; i++) {

            newDataCard.push(textCardPortfolio[i])

            if (numberCard == 2) {

                var elDivCardCol = document.createElement('div')

                switch (textCardCol) {
                    case 1:
                        elDivCardCol.setAttribute('class', 'col-xs-12 col-sm-12 col-md-6 col-lg-12')
                        break
                    case 2:
                        elDivCardCol.setAttribute('class', 'col-xs-12 col-sm-12 col-md-6 col-lg-6')
                        break
                    case 3:
                        elDivCardCol.setAttribute('class', 'col-xs-12 col-sm-12 col-md-6 col-lg-4')
                        break
                    case 4:
                        elDivCardCol.setAttribute('class', 'col-xs-12 col-sm-12 col-md-6 col-lg-3')
                        break
                    default:
                        elDivCardCol.setAttribute('class', 'col-xs-12 col-sm-12 col-md-6 col-lg-12')

                }

                elDivCardRow.appendChild(elDivCardCol)

                var elDivCard = document.createElement('div')
                elDivCard.setAttribute('class', 'card mb-3')
                elDivCardCol.appendChild(elDivCard)

                var elImgCard = document.createElement('img')
                elImgCard.setAttribute('class', 'card-img-top')
                elImgCard.setAttribute('src', `${newDataCard[0]}`)
                elImgCard.setAttribute('alt', `${newDataCard[1]}`)
                elDivCard.appendChild(elImgCard)

                var elDivCardBody = document.createElement('div')
                elDivCardBody.setAttribute('class', 'card-body')
                elDivCard.appendChild(elDivCardBody)

                var elH5Card = document.createElement('h5')
                var textH5Card = document.createTextNode(newDataCard[1])
                elH5Card.setAttribute('class', 'card-title')
                elH5Card.appendChild(textH5Card)
                elDivCardBody.appendChild(elH5Card)

                var elPCard = document.createElement('p')
                var textPCard = document.createTextNode(newDataCard[2])
                elPCard.appendChild(textPCard)
                elDivCardBody.appendChild(elPCard)

                var elButtonCard = document.createElement('button')
                var textButtonCard = document.createTextNode('Ver mais...')
                elButtonCard.setAttribute('class', 'btn btn-outline-warning btn-lg')
                elButtonCard.setAttribute('type', 'submit')
                elButtonCard.appendChild(textButtonCard)
                elDivCardBody.appendChild(elButtonCard)

                numberCard = 0
                newDataCard = []
            } else {
                numberCard++;
            }

        }
    }

}

const elemTitlePortfolio = [
    'Nossos Portifólio',
    'Contrary to popular belief, Lorem Ipsum is not simply random text.'
]

const elemCardCol = 3
const elemCardPortfolio = [
    'assets/img/portfolio/image1.jpg',
    'Why do we use it',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    'assets/img/portfolio/image2.jpg',
    'Where can I get some',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    'assets/img/portfolio/image3.jpg',
    'Where does it come from',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    'assets/img/portfolio/image4.jpg',
    'Why do we use it',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    'assets/img/portfolio/image5.jpg',
    'Where can I get some',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    'assets/img/portfolio/image6.jpg',
    'Where does it come from',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
]


const newSectionPortfolio = new sectionPortfolio()
newSectionPortfolio.startSectionPortfolio(elemTitlePortfolio, elemCardCol, elemCardPortfolio)

/* Setando section de Contatos */
const elSectionContact = document.createElement('section')
const elDivContact = document.createElement('div')
const elRowContactTitle = document.createElement('div')
const elColContactTitle = document.createElement('div')
const elRowContact = document.createElement('div')
const elColContact01 = document.createElement('div')
const elColContact02 = document.createElement('div')
const elColContact03 = document.createElement('div')

const elH3Contact = document.createElement('h3')
const elPContact = document.createElement('p')

const elH4Contacts = document.createElement('h4')
const elUlContacts = document.createElement('ul')

const elH4RedesSociais = document.createElement('h4')
const elUlRedesSociais = document.createElement('ul')

const elH4FormContacts = document.createElement('h4')
const elFormContacts = document.createElement('form')

elApp.appendChild(elSectionContact);

class sectionContact {
    constructor(){
        elSectionContact.appendChild(elDivContact)
        elDivContact.appendChild(elRowContactTitle)
        elRowContactTitle.appendChild(elColContactTitle)
        elDivContact.appendChild(elRowContact)

        elRowContact.appendChild(elColContact01)
        elColContact01.setAttribute('id', 'colContact01')
        elColContact01.appendChild(elH4Contacts)
        elColContact01.appendChild(elUlContacts)

        elRowContact.appendChild(elColContact03)
        elColContact03.setAttribute('id', 'colContact03')
        elColContact03.setAttribute('class', 'colContact03')
        elColContact03.appendChild(elH4FormContacts)
        elColContact03.appendChild(elFormContacts)

        elRowContact.appendChild(elColContact02)
        elColContact02.setAttribute('class', 'colContact02')
        elColContact02.appendChild(elH4RedesSociais)
        elColContact02.appendChild(elUlRedesSociais)
        
        elSectionContact.setAttribute('id', 'section-contact')
        elDivContact.setAttribute('class', 'container')
        elRowContactTitle.setAttribute('class', 'row')
        elColContactTitle.setAttribute('class', 'col-12 title-contact text-center')
        

        elRowContact.setAttribute('class', 'row')
        elColContact01.setAttribute('class', 'col-xs-12 col-sm-12 col-md-6 col-lg-4')
        elUlContacts.setAttribute('class', 'sectionContactsUl')
        elColContact02.setAttribute('class', 'col-xs-12 col-sm-12 col-md-6 col-lg-4')
        elUlRedesSociais.setAttribute('class', 'sectionRedesSociaisUl')
        elColContact03.setAttribute('class', 'col-xs-12 col-sm-12 col-md-6 col-lg-4')
    }

    startSectionContact(textTitleContact, textContacts, textRedesSociais) {
        this.sectionTitleContact(textTitleContact)
        this.sectionFormContacts()
        this.sectionContacts(textContacts)
        this.sectionRedesSociais(textRedesSociais)
    }

    sectionTitleContact(textTitleContact) {
        const h3TitleContact = document.createTextNode(textTitleContact[0])
        elH3Contact.appendChild(h3TitleContact)
        elColContactTitle.appendChild(elH3Contact)

        const pTitleContact = document.createTextNode(textTitleContact[1])
        elPContact.appendChild(pTitleContact)
        elColContactTitle.appendChild(elPContact)
    }

    sectionContacts(textContacts) {
        elH4Contacts.setAttribute('class', 'h4Contacts')
        const textH4Contacts = document.createTextNode('Contatos')
        elH4Contacts.appendChild(textH4Contacts)

        textContacts.map(function(elem) {
            var elLiContacts = document.createElement('li')

            var textLiContacts = document.createTextNode(elem)
            elUlContacts.appendChild(elLiContacts)

            elLiContacts.appendChild(textLiContacts)
        })
    }

    sectionRedesSociais(textRedesSociais) {
        elH4RedesSociais.setAttribute('class', 'h4RedesSociais')
        const textH4RedesSociais = document.createTextNode('Redes Sociais')
        elH4RedesSociais.appendChild(textH4RedesSociais)

        for (var i = 0; i < textRedesSociais.length; i++){
            
            
            if (i % 2 == 0){
                var elLiRedesSociais = document.createElement('li')
                var elARedesSociais = document.createElement('a')
                var textARedesSociais = document.createTextNode(textRedesSociais[i])

            } else {
                elARedesSociais.setAttribute('href',  textRedesSociais[i])
                elARedesSociais.appendChild(textARedesSociais)
                elLiRedesSociais.appendChild(elARedesSociais)
                elUlRedesSociais.appendChild(elLiRedesSociais)
            }

        }
    }

    sectionFormContacts() {
        elH4FormContacts.setAttribute('class', 'h4FormContacts')
        var textH4FormContacts = document.createTextNode('Fale Conosco!')
        elH4FormContacts.appendChild(textH4FormContacts)

        elFormContacts.setAttribute('class', 'formContacts')
        elFormContacts.setAttribute('action', '#')
        elFormContacts.setAttribute('name', 'formContacts')

        var elDivInputs = document.createElement('div')
        var elInputContacts = document.createElement('input')
        elDivInputs.setAttribute('class', 'form-group')
        elFormContacts.appendChild(elDivInputs)

        elInputContacts.setAttribute('class', 'form-control')
        elInputContacts.setAttribute('type', 'text')
        elInputContacts.setAttribute('name', 'name')
        elInputContacts.setAttribute('placeholder', 'Informe seu nome...')
        elInputContacts.setAttribute('required', 'required')
        elDivInputs.appendChild(elInputContacts)

        var elDivInputs = document.createElement('div')
        var elInputContacts = document.createElement('input')
        elDivInputs.setAttribute('class', 'form-group')
        elFormContacts.appendChild(elDivInputs)

        elInputContacts.setAttribute('class', 'form-control')
        elInputContacts.setAttribute('type', 'email')
        elInputContacts.setAttribute('name', 'email')
        elInputContacts.setAttribute('placeholder', 'Informe seu email valído...')
        elInputContacts.setAttribute('required', 'required')
        elDivInputs.appendChild(elInputContacts)

        var elDivInputs = document.createElement('div')
        var elInputContacts = document.createElement('input')
        elDivInputs.setAttribute('class', 'form-group')
        elFormContacts.appendChild(elDivInputs)

        elInputContacts.setAttribute('class', 'form-control')
        elInputContacts.setAttribute('type', 'text')
        elInputContacts.setAttribute('name', 'subject')
        elInputContacts.setAttribute('placeholder', 'Informe o assunto...')
        elInputContacts.setAttribute('required', 'required')
        elDivInputs.appendChild(elInputContacts)

        var elDivInputs = document.createElement('div')
        var elTextAreaContacts = document.createElement('textarea')
        elDivInputs.setAttribute('class', 'form-group')
        elFormContacts.appendChild(elDivInputs)

        elTextAreaContacts.setAttribute('class', 'form-control')
        elTextAreaContacts.setAttribute('rows', '3')
        elTextAreaContacts.setAttribute('name', 'message')
        elTextAreaContacts.setAttribute('placeholder', 'Informe sua mensagem...')
        elTextAreaContacts.setAttribute('required', 'required')
        elDivInputs.appendChild(elTextAreaContacts)

        var elDivInputs = document.createElement('div')
        var elButtonContacts = document.createElement('button')
        elDivInputs.setAttribute('class', 'form-group')
        elFormContacts.appendChild(elDivInputs)

        elButtonContacts.setAttribute('class', 'btn btn-outline-warning btn-lg')
        elButtonContacts.setAttribute('type', 'submit')
        elButtonContacts.innerHTML = 'Enviar'
        elDivInputs.appendChild(elButtonContacts)

    }

}

const elemTextTitleContact = [
    'Nossos Contatos',
    'Reader will be distracted by the readable'
]

const elemTextContacts = [
    '(21) 9858-585215',
    'gsilvamedeiros@gmail.com',
    'http://www.seusite.com.br'
]

const elemRedesSociais = [
    'Facebook',
    'https://facebook.com/seulogin',
    'Twitter',
    'https://twitter.com/seulogin',
    'Linkedin',
    'https://linkedin.com/seulogin'
]

const newSectionContact = new sectionContact();
newSectionContact.startSectionContact(elemTextTitleContact, elemTextContacts, elemRedesSociais)

/* Setando footer da página */
const elFooter = document.createElement('footer')
const elDivPartOne = document.createElement('div')
const elDivPartTwo = document.createElement('div')
const elADivTwo = document.createElement('a')

elApp.appendChild(elFooter);

class footer {
    constructor() {
        elFooter.appendChild(elDivPartOne)
        elFooter.appendChild(elDivPartTwo)
        elDivPartTwo.setAttribute('class', 'container text-center')
    }

    startFooter(textDivTwo){
        this.newDivTwo(textDivTwo)
    }

    newDivTwo(textDivTwo) {
        var txtColOne = document.createTextNode(textDivTwo[0])
        elDivPartTwo.appendChild(txtColOne)
        var txtColTwo = document.createTextNode(textDivTwo[1])
        elDivPartTwo.appendChild(txtColTwo)

        elADivTwo.setAttribute('class', 'aFooter')
        elADivTwo.setAttribute('href', `${textDivTwo[3]}`)
        var txtADivTwo = document.createTextNode(textDivTwo[2])
        elADivTwo.appendChild(txtADivTwo)
        elDivPartTwo.appendChild(elADivTwo)

    }
}

elemDivTwo = [
    'Todos os direitos reservados (GSM-Loborio) - ',
    'Desenvolvido por: ',
    'Gilberto Medeiros',
    'http://meusiteaqui.com'
]

const newFooter = new footer()
newFooter.startFooter(elemDivTwo)

