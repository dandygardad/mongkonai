import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

import AppRoutes from '../AppRoutes'
import ArtifactButton from '../components/character/ArtifactButton'

const characterDataWithoutRecom = {
        "character": {
        "name": "Tighnari",
        "fullname": "Tighnari",
        "title": "Verdant Strider",
        "description": "A young researcher well-versed in botany who currently serves as a Forest Watcher in Avidya Forest. He is a straight shooter with a warm heart — and a dab hand at guiding even the dullest of pupils.",
        "rarity": "5",
        "element": "Dendro",
        "weapontype": "Bow",
        "substat": "Dendro DMG Bonus",
        "gender": "Male",
        "body": "BOY",
        "association": "SUMERU",
        "region": "Sumeru",
        "affiliation": "Gandharva Ville",
        "birthdaymmdd": "12/29",
        "birthday": "December 29",
        "constellation": "Vulpes Zerda",
        "cv": {
            "english": "Elliot Gindi",
            "chinese": "莫然",
            "japanese": "小林沙苗",
            "korean": "Jung Ui-taek"
        },
        "costs": {
            "ascend1": [
                {
                    "name": "Mora",
                    "count": 20000
                },
                {
                    "name": "Nagadus Emerald Sliver",
                    "count": 1
                },
                {
                    "name": "Nilotpala Lotus",
                    "count": 3
                },
                {
                    "name": "Fungal Spores",
                    "count": 3
                }
            ],
            "ascend2": [
                {
                    "name": "Mora",
                    "count": 40000
                },
                {
                    "name": "Nagadus Emerald Fragment",
                    "count": 3
                },
                {
                    "name": "Majestic Hooked Beak",
                    "count": 2
                },
                {
                    "name": "Nilotpala Lotus",
                    "count": 10
                },
                {
                    "name": "Fungal Spores",
                    "count": 15
                }
            ],
            "ascend3": [
                {
                    "name": "Mora",
                    "count": 60000
                },
                {
                    "name": "Nagadus Emerald Fragment",
                    "count": 6
                },
                {
                    "name": "Majestic Hooked Beak",
                    "count": 4
                },
                {
                    "name": "Nilotpala Lotus",
                    "count": 20
                },
                {
                    "name": "Luminescent Pollen",
                    "count": 12
                }
            ],
            "ascend4": [
                {
                    "name": "Mora",
                    "count": 80000
                },
                {
                    "name": "Nagadus Emerald Chunk",
                    "count": 3
                },
                {
                    "name": "Majestic Hooked Beak",
                    "count": 8
                },
                {
                    "name": "Nilotpala Lotus",
                    "count": 30
                },
                {
                    "name": "Luminescent Pollen",
                    "count": 18
                }
            ],
            "ascend5": [
                {
                    "name": "Mora",
                    "count": 100000
                },
                {
                    "name": "Nagadus Emerald Chunk",
                    "count": 6
                },
                {
                    "name": "Majestic Hooked Beak",
                    "count": 12
                },
                {
                    "name": "Nilotpala Lotus",
                    "count": 45
                },
                {
                    "name": "Crystalline Cyst Dust",
                    "count": 12
                }
            ],
            "ascend6": [
                {
                    "name": "Mora",
                    "count": 120000
                },
                {
                    "name": "Nagadus Emerald Gemstone",
                    "count": 6
                },
                {
                    "name": "Majestic Hooked Beak",
                    "count": 20
                },
                {
                    "name": "Nilotpala Lotus",
                    "count": 60
                },
                {
                    "name": "Crystalline Cyst Dust",
                    "count": 24
                }
            ]
        },
        "images": {
            "nameicon": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Tighnari.png",
            "nameiconcard": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Tighnari_Card.png",
            "namegachasplash": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_Gacha_AvatarImg_Tighnari.png",
            "namegachaslice": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_Gacha_AvatarIcon_Tighnari.png",
            "icon": "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Tighnari.png",
            "namesideicon": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Side_Tighnari.png",
            "sideicon": "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Tighnari.png",
            "cover1": "https://webstatic.hoyoverse.com/upload/contentweb/2022/08/16/036850e73547569f22ad5c2f5337ceb5_460155589265400008.png",
            "cover2": "https://webstatic.hoyoverse.com/upload/contentweb/2022/08/16/076afb53067bde63f7b18f6335530b5e_1653386367773862877.png"
        },
        "version": "3.0"
    }
}

const characterDataWithRecom = {
    "character": {
        "name": "Xiao",
        "fullname": "Xiao",
        "title": "Vigilant Yaksha",
        "description": "A yaksha adeptus who defends Liyue. Also heralded as the \"Conqueror of Demons\" and \"Vigilant Yaksha.\"",
        "rarity": "5",
        "element": "Anemo",
        "weapontype": "Polearm",
        "substat": "CRIT Rate",
        "gender": "Male",
        "body": "BOY",
        "association": "LIYUE",
        "region": "Liyue",
        "affiliation": "Liyue Adeptus",
        "birthdaymmdd": "4/17",
        "birthday": "April 17",
        "constellation": "Alatus Nemeseos",
        "cv": {
            "english": "Laila Berzins",
            "chinese": "kinsen",
            "japanese": "松岡禎丞",
            "korean": "Shim Kyu-hyeok"
        },
        "costs": {
            "ascend1": [
                {
                    "name": "Mora",
                    "count": 20000
                },
                {
                    "name": "Vayuda Turquoise Sliver",
                    "count": 1
                },
                {
                    "name": "Qingxin",
                    "count": 3
                },
                {
                    "name": "Slime Condensate",
                    "count": 3
                }
            ],
            "ascend2": [
                {
                    "name": "Mora",
                    "count": 40000
                },
                {
                    "name": "Vayuda Turquoise Fragment",
                    "count": 3
                },
                {
                    "name": "Juvenile Jade",
                    "count": 2
                },
                {
                    "name": "Qingxin",
                    "count": 10
                },
                {
                    "name": "Slime Condensate",
                    "count": 15
                }
            ],
            "ascend3": [
                {
                    "name": "Mora",
                    "count": 60000
                },
                {
                    "name": "Vayuda Turquoise Fragment",
                    "count": 6
                },
                {
                    "name": "Juvenile Jade",
                    "count": 4
                },
                {
                    "name": "Qingxin",
                    "count": 20
                },
                {
                    "name": "Slime Secretions",
                    "count": 12
                }
            ],
            "ascend4": [
                {
                    "name": "Mora",
                    "count": 80000
                },
                {
                    "name": "Vayuda Turquoise Chunk",
                    "count": 3
                },
                {
                    "name": "Juvenile Jade",
                    "count": 8
                },
                {
                    "name": "Qingxin",
                    "count": 30
                },
                {
                    "name": "Slime Secretions",
                    "count": 18
                }
            ],
            "ascend5": [
                {
                    "name": "Mora",
                    "count": 100000
                },
                {
                    "name": "Vayuda Turquoise Chunk",
                    "count": 6
                },
                {
                    "name": "Juvenile Jade",
                    "count": 12
                },
                {
                    "name": "Qingxin",
                    "count": 45
                },
                {
                    "name": "Slime Concentrate",
                    "count": 12
                }
            ],
            "ascend6": [
                {
                    "name": "Mora",
                    "count": 120000
                },
                {
                    "name": "Vayuda Turquoise Gemstone",
                    "count": 6
                },
                {
                    "name": "Juvenile Jade",
                    "count": 20
                },
                {
                    "name": "Qingxin",
                    "count": 60
                },
                {
                    "name": "Slime Concentrate",
                    "count": 24
                }
            ]
        },
        "images": {
            "card": "https://static.wikia.nocookie.net/gensin-impact/images/8/88/Character_Xiao_Card.jpg",
            "portrait": "https://static.wikia.nocookie.net/gensin-impact/images/1/1e/Character_Xiao_Portrait.png",
            "icon": "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png",
            "sideicon": "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Xiao.png",
            "cover1": "https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/930f3ce55517e3c711a962c82e4639c0_8691377287489555826.png",
            "cover2": "https://webstatic.hoyoverse.com/upload/contentweb/2022/07/20/f39029c2d532da642a6a26e939342cfe_5885839034097905642.png",
            "hoyolab-avatar": "https://img-os-static.hoyolab.com/communityWeb/upload/59cb768b56ebc0143d6d2e37385c934c.png",
            "nameicon": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Xiao.png",
            "nameiconcard": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Xiao_Card.png",
            "namegachasplash": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_Gacha_AvatarImg_Xiao.png",
            "namegachaslice": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_Gacha_AvatarIcon_Xiao.png",
            "namesideicon": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_AvatarIcon_Side_Xiao.png"
        },
        "url": {
            "fandom": "https://genshin-impact.fandom.com/wiki/Xiao"
        },
        "version": "1.3"
    },
    "recommendation": {
        "curator": "Goblin Slayer (Bilalang 3)",
        "weapons": [
            {
                "name": "Bit of Aerosiderite",
                "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114023.png",
                "url": "bitofaerosiderite",
                "weapontype": "Sword"
            },
            {
                "name": "Bit of Aerosiderite",
                "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114023.png",
                "url": "bitofaerosiderite",
                "weapontype": "Sword"
            },
            {
                "name": "Bit of Aerosiderite",
                "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114023.png",
                "url": "bitofaerosiderite",
                "weapontype": "Sword"
            }
        ],
        "stats": {
            "flower": "HP",
            "feather": "Atk",
            "sand": "Atk%/Energy Recharge%",
            "goblet": "Anemo DMG Bonus/Atk%",
            "circlet": "CRIT DMG/CRIT Rate"
        },
        "artifacts": [
            {
                "showcase_name": "Viridescent & Gladiator",
                "data": [
                    {
                        "name": "Bit of Aerosiderite",
                        "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114023.png",
                        "url": "bitofaerosiderite",
                        "artifact": true
                    },
                    {
                        "name": "Bit of Aerosiderite",
                        "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114023.png",
                        "url": "bitofaerosiderite",
                        "artifact": true
                    }
                ]
            },
            {
                "showcase_name": "Viridescent & Gladiator",
                "data": [
                    {
                        "name": "Bit of Aerosiderite",
                        "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114023.png",
                        "url": "bitofaerosiderite",
                        "artifact": true
                    },
                    {
                        "name": "Bit of Aerosiderite",
                        "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114023.png",
                        "url": "bitofaerosiderite",
                        "artifact": true
                    }
                ]
            },
            {
                "showcase_name": "Viridescent & Gladiator",
                "data": [
                    {
                        "name": "Bit of Aerosiderite",
                        "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114023.png",
                        "url": "bitofaerosiderite",
                        "artifact": true
                    },
                    {
                        "name": "Bit of Aerosiderite",
                        "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114023.png",
                        "url": "bitofaerosiderite",
                        "artifact": true
                    }
                ]
            }
        ]
    }
}

const artifactRec = {
    "artifacts": {
        "showcase_name": "Viridescent & Gladiator",
        "data": [
            {
                "name": "Bit of Aerosiderite",
                "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114023.png",
                "url": "bitofaerosiderite",
                "artifact": true
            },
            {
                "name": "Bit of Aerosiderite",
                "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114023.png",
                "url": "bitofaerosiderite",
                "artifact": true
            }
        ]
    }
}

// Mock fetch
window.fetch = jest.fn()

describe("Tests for Character page", () => {
    test("Render \"Character\" component without recommendation", async() => {
        window.fetch.mockResolvedValueOnce({
            json: async () => characterDataWithoutRecom
        })
        const urlTighnari = '/ch/tighnari'
        render(<MemoryRouter initialEntries={[urlTighnari]}><AppRoutes /></MemoryRouter>)

        expect(await screen.findByText("Tighnari")).toBeInTheDocument()
        expect(await screen.findByText("A young researcher well-versed in botany who currently serves as a Forest Watcher in Avidya Forest. He is a straight shooter with a warm heart — and a dab hand at guiding even the dullest of pupils.")).toBeInTheDocument()
        expect(await screen.findByText("No recommendation now for Tighnari")).toBeInTheDocument()
    })

    test("Render \"CharacterInfo\" component with recommendation", async() => {
        window.fetch.mockResolvedValueOnce({
            json: async () => characterDataWithRecom
        })
        const urlXiao = '/ch/xiao'
        render(<MemoryRouter initialEntries={[urlXiao]}><AppRoutes /></MemoryRouter>)

        expect(await screen.findByText("Xiao")).toBeInTheDocument()
        expect(await screen.findByText("A yaksha adeptus who defends Liyue. Also heralded as the \"Conqueror of Demons\" and \"Vigilant Yaksha.\"")).toBeInTheDocument()

        expect(await screen.findAllByTestId("stat-item")).toHaveLength(5)
        expect(await screen.findAllByTestId("focus-box-link")).toHaveLength(3)
        expect(await screen.findAllByTestId("artifact-button")).toHaveLength(3)
    })

    test("Click showcase button on Artifact Recommendation", () => {
        render(<MemoryRouter><ArtifactButton name={artifactRec.artifacts.showcase_name} data={artifactRec.artifacts.data} /></MemoryRouter>)

        userEvent.click(screen.getByRole('button'))

        expect(screen.getAllByTestId("focus-box-link")).not.toHaveLength(0)
    })

    test("Render \"Character Not Found!\" if character input not exists", async() => {
        window.fetch.mockResolvedValueOnce({
            json: async () => []
        })
        const urlXiao = '/ch/asdasdasd'
        render(<MemoryRouter initialEntries={[urlXiao]}><AppRoutes /></MemoryRouter>)

        expect(await screen.findByText("Character Not Found!")).toBeInTheDocument()
    })
})