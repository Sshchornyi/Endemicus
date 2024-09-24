
const amphibian = [{
    name: "Пурпурова жаба",
    habitat: "Західні Гати, Індія",
    scientificName: "Nasikabatrachus sahyadrensis"
}, {
    name: "Золота жаба Мантела",
    habitat: "Острів Мадагаскар",
    scientificName: "Mantella aurantiaca"
}, {
    name: "Пуерториканська чубата жаба",
    habitat: "Пуерто-Рико, США",
    scientificName: "Peltophryne lemur"
}, {
    name: "Ліопельма Гамільтона",
    habitat: "Нова Зеландія",
    scientificName: "Leiopelma hamiltoni"
}];

const mammals = [
    {
        name: "Велика панда",
        habitat: "Сичуань/Тибет Китай",
        scientificName: "Ailuropoda melanoleuca"
    },{
        name: "Коала сірий",
        habitat: "Австралія",
        scientificName: "Phascolarctos cinereus"
    },
    {
        name: "Кенгуру рудий",
        habitat: "Австралія",
        scientificName: "Osphranter rufus"
    },
    {
        name: "Качкодзьоб",
        habitat: "Австралія",
        scientificName: "Ornithorhynchus anatinus"
    },
    {
        name: "Азійський лев",
        habitat: "Гуджарт, Індія",
        scientificName: "Panthera leo persica"
    }, {
        name: "Макак левохвостий",
        habitat: "Карнатака/Керала/Таміл Наду, Індія",
        scientificName: "Macaca silenus"
    }, {
        name: "Борнейський орангутан",
        habitat: "Острів Борнео/Калімантан, Південно-східна Азія",
        scientificName: "Pongo pygmaeus"
    },
    {
        name: "Карликова свиня",
        habitat: "Асам, Індія",
        scientificName: "Porcula salvania"
    },
    {
        name: "Кашмірський олень",
        habitat: "Кашмірська долина, Індія",
        scientificName: "Cervus hanglu hanglu"
    },
    {
        name: "Сангайський олень",
        habitat: "Маніпур, Індія",
        scientificName: "Rucervus eldii eldii"
    },
    {
        name: "Нілґірійський тар",
        habitat: "Нілґірі, Індія",
        scientificName: "Nilgiritragus hylocrius"
    },
    {
        name: "Білка-летяга Намдафа",
        habitat: "Аруначал-Прадеш, Індія",
        scientificName: "Biswamoyopterus biswasi"
    }
];

const birds = [{
    name: "Ківі",
    habitat: "Нова Зеландія",
    scientificName: "Apteryx haastii"
}, {
    name: "Какапо",
    habitat: "Нова Зеландія",
    scientificName: "Strigops habroptilus"
}, {
    name: "Голуб гривастий",
    habitat: "Індія, Індонезія, Малайзія, М'янма, Палау, Папуа Нова Гвінея, Філіппіни, Соломонові Острови, Таїланд, В'єтнам, Камбоджа",
    scientificName: "Caloenas nicobarica"
},
{
    name: "Імператорський пінгвін",
    habitat: "Антарктида",
    scientificName: "Aptenodytes forsteri"
}, {
    name: "Колібрі-Бджола",
    habitat: "Острів Куба",
    scientificName: "Mellisuga helenae"
}];

const reptiles = [{
    name: "Бронзова змія Західних Гат",
    habitat: "Західні Гати, Індія",
    scientificName: "Ahaetulla perroteti"
}, {
    name: "Війковий (Чубатий) гекон",
    habitat: "Австралія і Океанія",
    scientificName: "Correlophus ciliatus"
}, {
    name: "Смарагдовий варан",
    habitat: "Індонезія, Папуа Нова Гвінея",
    scientificName: "Varanus prasinus"
},{
    name: "Філіппінська ящірка-вітрильник",
    habitat: "Філіппіни",
    scientificName: "Hydrosaurus pustulatus"
},
{
    name: "Комодський варан",
    habitat: "Острови Комодо,Рінджа, Падар, Гілі-Мотанг і Флорес, Індонезія",
    scientificName: "Varanus komodoensis"
}];

const invertabrate = [{
    name: "Насіннєва муха Фонсека",
    habitat: "Шотландія, Сполучене королівство Великої Британії та Північної Ірландії",
    scientificName: "Botanophila fonsecai"
},{
    name: "Кошлатий земляний ткач",
    habitat: "Англія, Сполучене королівство Великої Британії та Північної Ірландії",
    scientificName: "Nothophantes horridus"
},{
    name: "Помаранчево-смугаста веснянка",
    habitat: "Сполучене королівство Великої Британії та Північної Ірландії",
    scientificName: "Perlodes mortoni"
},{
    name: "Ландійський капустяний жук-блішка",
    habitat: "Острів Ланді, Сполучене королівство Великої Британії та Північної Ірландії",
    scientificName: "Psylliodes luridipennis"
},{
    name: "Британська печерна криветка",
    habitat: "Англія, Сполучене королівство Великої Британії та Північної Ірландії",
    scientificName: "Niphargellus glenniei"
}
];

const fish = [{
    name: "Хаплохроміс Нейререі",
    habitat: "Озеро Вікторія, Африка",
    scientificName: "Haplochromis nyererei"
}, {
    name: "Латимерія коморська",
    habitat: "Східний і південний береги Африки",
    scientificName: "Latimeria chalumnae"
}, {
    name: "Діамантова тетра",
    habitat: "Венесуела, Південна Америка",
    scientificName: "Moenkhausia pittieri"
}, {
    name: "Synodontis grandiops",
    habitat: "Танганьїка, Африка",
    scientificName: "Synodontis grandiops"
}
];


async function imageExists(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch {
        return false;
    }
}

async function findImageUrl(baseUrl) {
    const extensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    for (const ext of extensions) {
        const url = `${baseUrl}.${ext}`;
        if (await imageExists(url)) {
            return url;
        }
    }
    return 'images/default.jpg';
}

async function fetchTextFile(filename) {
    try {
        const response = await fetch(`${folderName}/${filename}.txt`);
        if (!response.ok) throw new Error(`Error fetching ${filename}.txt`);
        const text = await response.text();

        const paragraphs = text.split('\r\n').filter(paragraph => paragraph.trim() !== '');


        return paragraphs;
    } catch (error) {
        console.error(error);
        return [];
    }
}


let dataArray;
let folderName;
const title = document.title.toLowerCase();
if (title.includes("Ссавці".toLowerCase())) {
    dataArray = mammals;
    folderName = "Mammals";
} else if (title.includes("Птахи".toLowerCase())) {
    dataArray = birds;
    folderName = "Birds";
}
else if (title.includes("Безхребетні".toLowerCase())) {
    dataArray = invertabrate;
    folderName = "Invertabrates";
}
else if (title.includes("Риби".toLowerCase())) {
    dataArray = fish;
    folderName = "Fish";
}
else if (title.includes("Плазуни".toLowerCase())) {
    dataArray = reptiles;
    folderName = "Reptiles";
}
else if (title.includes("Земноводні".toLowerCase())) {
    dataArray = amphibian;
    folderName = "Amphibians";
}
else {
    console.log("error2");
    console.log(title);
}

function createContent() {
    const contentDiv = document.getElementById('content');

    dataArray.forEach(async item => {
        const infopartDiv = document.createElement('div');
        infopartDiv.classList.add('infopart');

        const imgUrl = await findImageUrl(`${folderName}/${item.scientificName}`);


        const img = document.createElement('img');
        img.src = imgUrl;
        img.width = 400;

        const infosubpartDiv = document.createElement('div');
        infosubpartDiv.classList.add('infosubpart');

        const nameH3 = document.createElement('h3');
        nameH3.innerHTML = `<strong>Назва: </strong> ${item.name}`;

        const scientificNameH3 = document.createElement('h3');
        scientificNameH3.innerHTML = `<strong>Наукова назва виду: </strong> <i>${item.scientificName}</i>`;

        const habitatH3 = document.createElement('h3');
        habitatH3.innerHTML = `<strong>Ареал проживання: </strong> ${item.habitat}`;

        infosubpartDiv.appendChild(nameH3);
        infosubpartDiv.appendChild(scientificNameH3);
        infosubpartDiv.appendChild(habitatH3);

        const descriptionParagraphs = await fetchTextFile(item.scientificName);

        descriptionParagraphs.forEach(paragraph => {
            const p = document.createElement('p');
            p.textContent = paragraph;
            infosubpartDiv.appendChild(p);
        });

        const hr = document.createElement('hr');

        infopartDiv.appendChild(img);
        infopartDiv.appendChild(infosubpartDiv);
        infopartDiv.appendChild(hr);
        contentDiv.appendChild(infopartDiv);
    });
}

createContent();
