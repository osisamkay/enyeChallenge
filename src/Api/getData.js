export const FetchData= async ()=>{

    const response = await fetch('https://enye-reduxx.firebaseio.com/users.json?auth=TvBf1BRbGhjZkSyjFEiFZxXznKbwIYqoJ3k6cwN4');
    const data=await response.json();
    if (response.status>400){
        throw new Error(data.error)
    }
    return data

    
}



