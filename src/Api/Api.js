export const Data = async () => {
    const response = await fetch("https://enye-reduxx.firebaseio.com/users.json?auth=TvBf1BRbGhjZkSyjFEiFZxXznKbwIYqoJ3k6cwN4");
    const data = await response.json();
    if (response.data > 400) {
        throw new Error(data.error)
    }
    return data
}
