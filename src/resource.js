async function fetchData(country) {
    country = country === 'worldwide'?'all':`countries/${country}`;
    // const response = await fetch(`https://corona.lmao.ninja/v2/${country}`)
    const response = await fetch(`https://corona.lmao.ninja/v2/${country}`)
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