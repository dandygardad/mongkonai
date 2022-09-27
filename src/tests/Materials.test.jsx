import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import AppRoutes from '../AppRoutes'

const materialsJson = {
    "materials": {
        "name": "Boreal Wolf",
        "2starname": "Boreal Wolf's Milk Tooth",
        "3starname": "Boreal Wolf's Cracked Tooth",
        "4starname": "Boreal Wolf's Broken Fang",
        "5starname": "Boreal Wolf's Nostalgia",
        "day": [
            "Tuesday",
            "Friday",
            "Sunday"
        ],
        "location": "Wolvendom",
        "region": "Mondstadt",
        "domainofforgery": "Cecilia Garden",
        "version": ""
    },
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
    ]
}

window.fetch = jest.fn()

describe("Test for Materials page", () => {
    test("Render all components of Materials", async () => {
        window.fetch.mockResolvedValueOnce({
            json: async () => {
                return materialsJson
            }
        })

        const urlBorealWolf = '/mats/borealwolf'
        render(<MemoryRouter initialEntries={[urlBorealWolf]}><AppRoutes /></MemoryRouter>)

        expect(await screen.findByText('Materials Info')).toBeInTheDocument()
        expect(await screen.findByText('Boreal Wolf')).toBeInTheDocument()
        expect(await screen.findAllByTestId('focus-box-link')).toHaveLength(4)
    })

    test("Render Not Found if Materials input is doesn't exist", async () => {
        window.fetch.mockResolvedValueOnce({
            json: async () => {
                return {}
            }
        })

        const urlError = '/mats/asdasdasdasdasd'
        render(<MemoryRouter initialEntries={[urlError]}><AppRoutes /></MemoryRouter>)

        expect(await screen.findByText('Materials Not Found!')).toBeInTheDocument()
    })
})