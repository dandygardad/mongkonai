// Test for Home
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import SearchResults from '../components/global/SearchResults'

import FocusBox from '../components/home/FocusBox'
import RandomCharacter from '../components/home/RandomCharacter'
import Home from '../pages/Home'

const materials = {
    "materials": [
        {
            "name": "Boreal Wolf",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114005.png",
            "material_data": [
                {
                    "name": "Boreal Wolf's Milk Tooth",
                    "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114005.png",
                    "url": "borealwolfsmilktooth"
                },
                {
                    "name": "Boreal Wolf's Cracked Tooth",
                    "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114006.png",
                    "url": "borealwolfscrackedtooth"
                },
                {
                    "name": "Boreal Wolf's Broken Fang",
                    "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114007.png",
                    "url": "borealwolfsbrokenfang"
                },
                {
                    "name": "Boreal Wolf's Nostalgia",
                    "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114008.png",
                    "url": "borealwolfsnostalgia"
                }
            ],
            "url": "borealwolf",
            "material": true
        },
        {
            "name": "Mist Veiled Elixir",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114017.png",
            "material_data": [
                {
                    "name": "Mist Veiled Lead Elixir",
                    "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114017.png",
                    "url": "mistveiledleadelixir"
                },
                {
                    "name": "Mist Veiled Mercury Elixir",
                    "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114018.png",
                    "url": "mistveiledmercuryelixir"
                },
                {
                    "name": "Mist Veiled Gold Elixir",
                    "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114019.png",
                    "url": "mistveiledgoldelixir"
                },
                {
                    "name": "Mist Veiled Primo Elixir",
                    "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114020.png",
                    "url": "mistveiledprimoelixir"
                }
            ],
            "url": "mistveiledelixir",
            "material": true
        },
        {
            "name": "Narukami",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114029.png",
            "material_data": [
                {
                    "name": "Narukami's Wisdom",
                    "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114029.png",
                    "url": "narukamiswisdom"
                },
                {
                    "name": "Narukami's Joy",
                    "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114030.png",
                    "url": "narukamisjoy"
                },
                {
                    "name": "Narukami's Affection",
                    "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114031.png",
                    "url": "narukamisaffection"
                },
                {
                    "name": "Narukami's Valor",
                    "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114032.png",
                    "url": "narukamisvalor"
                }
            ],
            "url": "narukami",
            "material": true
        }
    ]
}

const char = {
    "char": {
        "name": "Yelan",
        "desc": "A mysterious person who claims to work for the Ministry of Civil Affairs, but is a \"non-entity\" on the Ministry of Civil Affairs' list.",
        "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_Gacha_AvatarImg_Yelan.png",
        "element": "Hydro"
    }
}

const chars = {
    "characters": [
        {
            "name": "Aether",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_PlayerBoy.png",
            "url": "aether"
        },
        {
            "name": "Albedo",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Albedo.png",
            "url": "albedo"
        },
        {
            "name": "Aloy",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Aloy.png",
            "url": "aloy"
        },
        {
            "name": "Amber",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Ambor.png",
            "url": "amber"
        },
        {
            "name": "Arataki Itto",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Itto.png",
            "url": "aratakiitto"
        },
        {
            "name": "Barbara",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Barbara.png",
            "url": "barbara"
        },
        {
            "name": "Beidou",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Beidou.png",
            "url": "beidou"
        },
        {
            "name": "Bennett",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Bennett.png",
            "url": "bennett"
        },
        {
            "name": "Chongyun",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Chongyun.png",
            "url": "chongyun"
        },
        {
            "name": "Collei",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Collei.png",
            "url": "collei"
        },
        {
            "name": "Diluc",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Diluc.png",
            "url": "diluc"
        },
        {
            "name": "Diona",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Diona.png",
            "url": "diona"
        },
        {
            "name": "Dori",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Dori.png",
            "url": "dori"
        },
        {
            "name": "Eula",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Eula.png",
            "url": "eula"
        },
        {
            "name": "Fischl",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Fischl.png",
            "url": "fischl"
        },
        {
            "name": "Ganyu",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Ganyu.png",
            "url": "ganyu"
        },
        {
            "name": "Gorou",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Gorou.png",
            "url": "gorou"
        },
        {
            "name": "Hu Tao",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Hutao.png",
            "url": "hutao"
        },
        {
            "name": "Jean",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Qin.png",
            "url": "jean"
        },
        {
            "name": "Kaedehara Kazuha",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Kazuha.png",
            "url": "kaedeharakazuha"
        },
        {
            "name": "Kaeya",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Kaeya.png",
            "url": "kaeya"
        },
        {
            "name": "Kamisato Ayaka",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Ayaka.png",
            "url": "kamisatoayaka"
        },
        {
            "name": "Kamisato Ayato",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Ayato.png",
            "url": "kamisatoayato"
        },
        {
            "name": "Keqing",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Keqing.png",
            "url": "keqing"
        },
        {
            "name": "Klee",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Klee.png",
            "url": "klee"
        },
        {
            "name": "Kujou Sara",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Sara.png",
            "url": "kujousara"
        },
        {
            "name": "Kuki Shinobu",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Shinobu.png",
            "url": "kukishinobu"
        },
        {
            "name": "Lisa",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Lisa.png",
            "url": "lisa"
        },
        {
            "name": "Lumine",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_PlayerGirl.png",
            "url": "lumine"
        },
        {
            "name": "Mona",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Mona.png",
            "url": "mona"
        },
        {
            "name": "Ningguang",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Ningguang.png",
            "url": "ningguang"
        },
        {
            "name": "Noelle",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Noel.png",
            "url": "noelle"
        },
        {
            "name": "Qiqi",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Qiqi.png",
            "url": "qiqi"
        },
        {
            "name": "Raiden Shogun",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Shougun.png",
            "url": "raidenshogun"
        },
        {
            "name": "Razor",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Razor.png",
            "url": "razor"
        },
        {
            "name": "Rosaria",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Rosaria.png",
            "url": "rosaria"
        },
        {
            "name": "Sangonomiya Kokomi",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Kokomi.png",
            "url": "sangonomiyakokomi"
        },
        {
            "name": "Sayu",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Sayu.png",
            "url": "sayu"
        },
        {
            "name": "Shenhe",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Shenhe.png",
            "url": "shenhe"
        },
        {
            "name": "Shikanoin Heizou",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Heizo.png",
            "url": "shikanoinheizou"
        },
        {
            "name": "Sucrose",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Sucrose.png",
            "url": "sucrose"
        },
        {
            "name": "Tartaglia",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Tartaglia.png",
            "url": "tartaglia"
        },
        {
            "name": "Thoma",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Tohma.png",
            "url": "thoma"
        },
        {
            "name": "Tighnari",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Tighnari.png",
            "url": "tighnari"
        },
        {
            "name": "Venti",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Venti.png",
            "url": "venti"
        },
        {
            "name": "Xiangling",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Xiangling.png",
            "url": "xiangling"
        },
        {
            "name": "Xiao",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Xiao.png",
            "url": "xiao"
        },
        {
            "name": "Xingqiu",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Xingqiu.png",
            "url": "xingqiu"
        },
        {
            "name": "Xinyan",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Xinyan.png",
            "url": "xinyan"
        },
        {
            "name": "Yae Miko",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Yae.png",
            "url": "yaemiko"
        },
        {
            "name": "Yanfei",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Feiyan.png",
            "url": "yanfei"
        },
        {
            "name": "Yelan",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Yelan.png",
            "url": "yelan"
        },
        {
            "name": "Yoimiya",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Yoimiya.png",
            "url": "yoimiya"
        },
        {
            "name": "Yun Jin",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Yunjin.png",
            "url": "yunjin"
        },
        {
            "name": "Zhongli",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Zhongli.png",
            "url": "zhongli"
        }
    ]
}

// Mock the fetch


describe("Tests for Home page", () => {
    test("Render Daily Materials component with data", () => {
        // Arrange
        render(<MemoryRouter><FocusBox name="Daily Materials" daily={true} content={materials.materials} /></MemoryRouter>)

        // Assert
        expect(screen.getByText("Daily Materials")).toBeInTheDocument()
        expect(screen.getAllByRole("link")).not.toHaveLength(0)
    })

    test("Render Your Focus component with data", () => {
        render(<MemoryRouter><FocusBox name="Your Focus" daily={false} content={materials.materials} /></MemoryRouter>)

        expect(screen.getByText("Your Focus")).toBeInTheDocument()
        expect(screen.getAllByRole("link")).not.toHaveLength(0)
    })

    test("Check links for \"FocusBox\" component if it match", () => {
        render(<MemoryRouter><FocusBox name="Daily Materials" daily={true} content={materials.materials} /></MemoryRouter>)

        const link = screen.getAllByRole("link")[0]
        expect(link.href).toContain("/mats/borealwolf")
    })

    test("Render random character", () => {
        render(<MemoryRouter><RandomCharacter char={char.char} /></MemoryRouter>)

        // Check text inside
        expect(screen.getByText("Random Character!")).toBeInTheDocument()
        expect(screen.getByText("Yelan")).toBeInTheDocument()
        expect(screen.getByText("A mysterious person who claims to work for the Ministry of Civil Affairs, but is a \"non-entity\" on the Ministry of Civil Affairs' list.")).toBeInTheDocument()

        // Check image
        expect(screen.getByAltText("Yelan").src).toContain("https://res.cloudinary.com/genshin/image/upload/sprites/UI_Gacha_AvatarImg_Yelan.png")
    })

    test("Check if there's text \"Loading\" when data not load", () => {
        render(<MemoryRouter><Home /></MemoryRouter>)

        expect(screen.getByText("Loading...")).toBeInTheDocument()
    })

    test("Check if search function can found \"Keqing\"", async() => {
        window.fetch = jest.fn()
        window.fetch.mockResolvedValue({
            json: async () => chars
        })

        render(<MemoryRouter><SearchResults input={"Keqing"} /></MemoryRouter>)

        const hrefChar = await screen.findByTestId("result-box")
        expect(hrefChar.href).toContain("/ch/keqing")
        expect(await screen.findAllByTestId("result-box")).not.toHaveLength(0)
    })
    
    test("Check if search function can found \"k\"", async() => {
        window.fetch = jest.fn()
        window.fetch.mockResolvedValue({
            json: async () => chars
        })

        render(<MemoryRouter><SearchResults input={"k"} /></MemoryRouter>)

        expect(await screen.findAllByTestId("result-box")).toHaveLength(12)
    })
})