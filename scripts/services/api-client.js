
/*
Network talk 
HTTP/HTTPS
Async call, return Promise
a) then b) catch
*/
// makeNetworkCall("https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json")
 async function makeNetworkCall(URL){
    
    // wrapper of xmlHttpRequest(written in year 2000), fetch was introduced in ECMAScript since 2015
    // const promise=fetch(URL);
    // promise.then((response)=>{
    // // response=header+body
    // const promise2=response.json();
    // promise2.then(data=>{}).catch(err=>{})
    // }).catch(()=>{

    // })
    try{
    const response=await fetch(URL);
    const data=await response.json();
    console.log(data);
    return data;
    }
    catch(err){
        throw err;
    }
}

export default makeNetworkCall;