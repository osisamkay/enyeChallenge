export const Data = async () => {
    const response = await fetch("https://us-central1-enye-reduxx.cloudfunctions.net/users");
    const data = await response.json();
    if (response.data > 400) {
        throw new Error(data.error)
    }
    return data
}
