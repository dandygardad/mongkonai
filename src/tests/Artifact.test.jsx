import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import AppRoutes from '../AppRoutes'

const artifactJson = {
    "artifact": {
        "name": "Viridescent Venerer",
        "rarity": [
            "4",
            "5"
        ],
        "2pc": "Anemo DMG Bonus +15%",
        "4pc": "Increases Swirl DMG by 60%. Decreases opponent's Elemental RES to the element infused in the Swirl by 40% for 10s.",
        "flower": {
            "name": "In Remembrance of Viridescent Fields",
            "relictype": "Flower of Life",
            "description": "A wild flower that was once a ubiquitous sight in its homeland. It was picked by a hunter who wore it on their chest."
        },
        "plume": {
            "name": "Viridescent Arrow Feather",
            "relictype": "Plume of Death",
            "description": "The fletching of an arrow that once pierced right through its prey, but somehow still remains spotless."
        },
        "sands": {
            "name": "Viridescent Venerer's Determination",
            "relictype": "Sands of Eon",
            "description": "A wondrous instrument that a hunter once wore. It forever points towards their prey."
        },
        "goblet": {
            "name": "Viridescent Venerer's Vessel",
            "relictype": "Goblet of Eonothem",
            "description": "A water pouch used by the Viridescent Venerer. Its capacity is much greater than one would expect."
        },
        "circlet": {
            "name": "Viridescent Venerer's Diadem",
            "relictype": "Circlet of Logos",
            "description": "A proud crown that once belonged to the Viridescent Venerer. It is as lush and green as the breezes of the wild."
        },
        "images": {
            "flower": "https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15002_4.png",
            "plume": "https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15002_2.png",
            "sands": "https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15002_5.png",
            "goblet": "https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15002_1.png",
            "circlet": "https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15002_3.png",
            "nameflower": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_RelicIcon_15002_4.png",
            "nameplume": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_RelicIcon_15002_2.png",
            "namesands": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_RelicIcon_15002_5.png",
            "namegoblet": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_RelicIcon_15002_1.png",
            "namecirclet": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_RelicIcon_15002_3.png"
        },
        "url": {
            "fandom": "https://genshin-impact.fandom.com/wiki/Viridescent_Venerer"
        },
        "version": "1.0"
    }
}

window.fetch = jest.fn()

describe("Test for Artifact page", () => {
    test("Render all components of Artifact", async () => {
        window.fetch.mockResolvedValueOnce({
            json: async () => {
                return artifactJson
            }
        })

        const urlViridescent = '/art/viridescentvenerer'
        render(<MemoryRouter initialEntries={[urlViridescent]}><AppRoutes /></MemoryRouter>)

        expect(await screen.findByText('Artifact Info')).toBeInTheDocument()
        expect(await screen.findByText('Viridescent Venerer')).toBeInTheDocument()
        expect(await screen.findAllByTestId('stat-item')).toHaveLength(5)
    })

    test("Render Not Found if Artifact input is doesn't exist", async () => {
        window.fetch.mockResolvedValueOnce({
            json: async () => {
                return {}
            }
        })

        const urlError = '/art/asdasdasdasdasd'
        render(<MemoryRouter initialEntries={[urlError]}><AppRoutes /></MemoryRouter>)

        expect(await screen.findByText('Artifact Not Found!')).toBeInTheDocument()
    })
})