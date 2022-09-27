import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import AppRoutes from '../AppRoutes'

const materialJson = {
    "materials": {
        "name": "Boreal Wolf's Milk Tooth",
        "description": "Weapon Ascension Material.\nAndrius' wolf pack is its blessed honor guard, and even the milk teeth of a wolf cub possess great potential.\nIn the past, the gods had the responsibility to love all people. Andrius was therefore quite unusual in that he became leader of the wolves, while only welcoming abandoned babies and wanderers when it came to humans.",
        "sortorder": 2505,
        "rarity": "2",
        "category": "AVATAR_MATERIAL",
        "materialtype": "Weapon Ascension Material",
        "dropdomain": "Domain of Forgery: Submerged Valley",
        "daysofweek": [
            "Tuesday",
            "Friday",
            "Sunday"
        ],
        "source": [
            "Purchase from the Souvenir Shop in Mondstadt"
        ],
        "images": {
            "redirect": "https://genshin-impact.fandom.com/wiki/Special:Redirect/file/Item_Boreal_Wolf's_Milk_Tooth.png",
            "fandom": "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Boreal_Wolf%27s_Milk_Tooth.png",
            "nameicon": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114005.png"
        },
        "url": {
            "fandom": "https://genshin-impact.fandom.com/wiki/Boreal_Wolf's_Milk_Tooth"
        },
        "version": ""
    }
}

window.fetch = jest.fn()

describe("Test for Material page", () => {
    test("Render Material Info", async () => {
        window.fetch.mockResolvedValueOnce({
            json: async () => {
                return materialJson
            }
        })

        const urlMaterial = '/mat/borealwolfsmilktooth'
        render(<MemoryRouter initialEntries={[urlMaterial]}><AppRoutes /></MemoryRouter>)

        expect(await screen.findByText('Material Info')).toBeInTheDocument()
        expect(await screen.findByText('Weapon Ascension Material. Andrius\' wolf pack is its blessed honor guard, and even the milk teeth of a wolf cub possess great potential. In the past, the gods had the responsibility to love all people. Andrius was therefore quite unusual in that he became leader of the wolves, while only welcoming abandoned babies and wanderers when it came to humans.')).toBeInTheDocument()
        expect(await screen.findByText('Boreal Wolf\'s Milk Tooth')).toBeInTheDocument()
        expect(await screen.findAllByTestId('days-of-week')).not.toHaveLength(0)
    })

    test("Render not found if Material input doesn't exist", async () => {
        window.fetch.mockResolvedValueOnce({
            json: async () => {
                return []
            }
        })

        const urlMaterial = '/mat/asdasdasdasd'
        render(<MemoryRouter initialEntries={[urlMaterial]}><AppRoutes /></MemoryRouter>)

        expect(await screen.findByText('Material Not Found!')).toBeInTheDocument()
    })
})