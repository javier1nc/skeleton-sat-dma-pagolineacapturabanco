import { persisted } from 'svelte-persisted-store'
import { browser } from '$app/environment';
import CryptoJS from 'crypto-js'
//import { SECRET_KEY } from '$env/static/private'

const SECRET_KEY = 'temporalsecret'

// svelte-persisted-store ---
// First param `preferences` is the local storage key.
// Second param is the initial value.

export async function load() {
  console.log(SECRET_KEY) // secret 🤫
}
export const preferences = persisted('preferences', {
  theme: browser ? document.body.getAttribute('data-theme') ?? '' : 'Gob Sat', // Session based theme store. Grabs the current theme from the current body.
  views: ['hidden','patient','pro','auditor','admin','dev']
})

export const createSecureStore = (key, initialValue) => {
  return persisted(key, initialValue, {
    serialize: (value) => {
      return CryptoJS.AES.encrypt(JSON.stringify(value), SECRET_KEY).toString()
    },
    deserialize: (str) => {
      const decrypted = CryptoJS.AES.decrypt(str, SECRET_KEY).toString(CryptoJS.enc.Utf8)
      return JSON.parse(decrypted)
    }
  })
}

// Usage
export const secureStore = createSecureStore('sensitive-data', { view: 'hidden'})