async function fetchData(country) {

    let response;
    if (country === 'worldwide') {
        response = await fetch(`https://api.covid19api.com/world/total`)
    } else {
        response = await fetch(`https://api.covid19api.com/total/country/${country}`)
    }

    return await response.json()
}

export default function createResource(country) {
    let status = "loading"
    let result
    let suspender = fetchData(country).then(
        (data) => {
            status = "success"
            result = data
        },
        (error) => {
            status = "error"
            result = error
        }
    )

    return {
        read() {
            if (status === "loading") {
                throw suspender
            } else if (status === "error") {
                throw result
            } else if (status === "success") {
                return result
            }
        },
    }
}
