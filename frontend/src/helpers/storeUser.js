// ce helper permet de store le user dans le localstorage

export default function (user) {
    localStorage.user = JSON.stringify(user)
}