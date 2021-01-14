//  Parse info for UserPage
const createUserInfo = data => {
    const res = {}

    Object.keys(data).map(i => {
        if (typeof data[i] !== 'object' && i !== 'avatar') {
            res[i] = data[i]
        }
    })
    return res
}

//   bar_foo_test ==> bar foo test
const toNormalCase = item => {
    return item[0].toUpperCase() + item
        .slice(1)
        .split('_')
        .join(' ')
}

const required = value => value
    ? undefined
    : 'Это поле не может быть пустым.'

//  getter, setter and cleaner for localStorage
const locStorage = (id, data) => {
    if (!id) {
        return localStorage.clear()             // delete
    } else if (!data) {
        return localStorage.getItem(id)         // getter
    } else {
        return localStorage.setItem(id, data)   // setter
    }
}

const createUserInfoForSubmit = data => {
    return {
        user: {
            email: data.email,
            password: data.password
        },
        phone: data.phone,
        invited_by: data.select,
        name: data.name,
        surname: data.surname,
        country_key: data.country
    }
}

export {
    createUserInfo,
    required,
    toNormalCase,
    locStorage,
    createUserInfoForSubmit
}
