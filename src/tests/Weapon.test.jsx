import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import AppRoutes from '../AppRoutes'

const weaponJson = {
    "weapon": {
        "name": "Skyward Spine",
        "description": "A polearm that symbolizes Dvalin's firm resolve. The upright shaft of this weapon points towards the heavens, clad in the might of sky and wind.",
        "weapontype": "Polearm",
        "rarity": "5",
        "baseatk": 48,
        "substat": "Energy Recharge",
        "subvalue": "8",
        "effectname": "Black Wing",
        "effect": "Increases CRIT Rate by {0} and increases Normal ATK SPD by {1}. Additionally, Normal and Charged Attacks hits on opponents have a {2} chance to trigger a vacuum blade that deals {3} of ATK as DMG in a small AoE. This effect can occur no more than once every 2s.",
        "r1": [
            "8%",
            "12%",
            "50%",
            "40%"
        ],
        "r2": [
            "10%",
            "12%",
            "50%",
            "55%"
        ],
        "r3": [
            "12%",
            "12%",
            "50%",
            "70%"
        ],
        "r4": [
            "14%",
            "12%",
            "50%",
            "85%"
        ],
        "r5": [
            "16%",
            "12%",
            "50%",
            "100%"
        ],
        "weaponmaterialtype": "Dandelion Gladiator",
        "costs": {
            "ascend1": [
                {
                    "name": "Mora",
                    "count": 10000
                },
                {
                    "name": "Fetters of the Dandelion Gladiator",
                    "count": 5
                },
                {
                    "name": "Chaos Device",
                    "count": 5
                },
                {
                    "name": "Divining Scroll",
                    "count": 3
                }
            ],
            "ascend2": [
                {
                    "name": "Mora",
                    "count": 20000
                },
                {
                    "name": "Chains of the Dandelion Gladiator",
                    "count": 5
                },
                {
                    "name": "Chaos Device",
                    "count": 18
                },
                {
                    "name": "Divining Scroll",
                    "count": 12
                }
            ],
            "ascend3": [
                {
                    "name": "Mora",
                    "count": 30000
                },
                {
                    "name": "Chains of the Dandelion Gladiator",
                    "count": 9
                },
                {
                    "name": "Chaos Circuit",
                    "count": 9
                },
                {
                    "name": "Sealed Scroll",
                    "count": 9
                }
            ],
            "ascend4": [
                {
                    "name": "Mora",
                    "count": 45000
                },
                {
                    "name": "Shackles of the Dandelion Gladiator",
                    "count": 5
                },
                {
                    "name": "Chaos Circuit",
                    "count": 18
                },
                {
                    "name": "Sealed Scroll",
                    "count": 14
                }
            ],
            "ascend5": [
                {
                    "name": "Mora",
                    "count": 55000
                },
                {
                    "name": "Shackles of the Dandelion Gladiator",
                    "count": 9
                },
                {
                    "name": "Chaos Core",
                    "count": 14
                },
                {
                    "name": "Forbidden Curse Scroll",
                    "count": 9
                }
            ],
            "ascend6": [
                {
                    "name": "Mora",
                    "count": 65000
                },
                {
                    "name": "Dream of the Dandelion Gladiator",
                    "count": 6
                },
                {
                    "name": "Chaos Core",
                    "count": 27
                },
                {
                    "name": "Forbidden Curse Scroll",
                    "count": 18
                }
            ]
        },
        "images": {
            "image": "https://static.wikia.nocookie.net/gensin-impact/images/6/69/Weapon_Skyward_Spine.png",
            "icon": "https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_EquipIcon_Pole_Dvalin.png",
            "awakenicon": "https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_EquipIcon_Pole_Dvalin_Awaken.png",
            "nameicon": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_EquipIcon_Pole_Dvalin.png",
            "namegacha": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_Gacha_EquipIcon_Pole_Dvalin.png",
            "nameawakenicon": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_EquipIcon_Pole_Dvalin_Awaken.png"
        },
        "url": {
            "fandom": "https://genshin-impact.fandom.com/wiki/Skyward_Spine"
        },
        "version": "1.0"
    },
    "materialtype": {
        "name": "Dandelion Gladiator",
        "2starname": "Fetters of the Dandelion Gladiator",
        "3starname": "Chains of the Dandelion Gladiator",
        "4starname": "Shackles of the Dandelion Gladiator",
        "5starname": "Dream of the Dandelion Gladiator",
        "day": [
            "Wednesday",
            "Saturday",
            "Sunday"
        ],
        "location": "Wolvendom",
        "region": "Mondstadt",
        "domainofforgery": "Cecilia Garden",
        "version": ""
    }
}

window.fetch = jest.fn()

describe("Test for Weapon page", () => {
    test("Render Weapon Info", async () => {
        window.fetch.mockResolvedValueOnce({
            json: async () => {
                return weaponJson
            }
        })

        const urlWeapon = '/wp/skywardspine'
        render(<MemoryRouter initialEntries={[urlWeapon]}><AppRoutes /></MemoryRouter>)

        expect(await screen.findByText('Weapon Info')).toBeInTheDocument()
        expect(await screen.findByText('Skyward Spine')).toBeInTheDocument()
        expect(await screen.findByText('A polearm that symbolizes Dvalin\'s firm resolve. The upright shaft of this weapon points towards the heavens, clad in the might of sky and wind.')).toBeInTheDocument()

        const linkMaterial = await screen.findByTestId('link-material')

        expect(linkMaterial.href).toContain('/mats/dandeliongladiator')
    })

    test("Render not found if Weapon input doesn't exist", async () => {
        window.fetch.mockResolvedValueOnce({
            json: async () => {
                return []
            }
        })

        const urlWeapon = '/wp/asdasdasdasd'
        render(<MemoryRouter initialEntries={[urlWeapon]}><AppRoutes /></MemoryRouter>)

        expect(await screen.findByText('Weapon Not Found!')).toBeInTheDocument()
    })
})