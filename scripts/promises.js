const prompt = require('prompt-sync')();
const secondsToWait = parseInt(prompt('how many seconds do you wanna wait?: '));
//callback
const getDataCallback = (callback)=>{
    setTimeout(()=>{
        callback(undefined, 'Dummy Data');
    }, secondsToWait*1000);
};

console.log("start execution");
getDataCallback((err, data)=>{
    if (err) {
        console.log("failed to fetch data");
    }else{
        console.log(data);
    }
});

console.log("end execution");
//promise
const getDataPromise = (data)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>
            typeof data === 'number' ? resolve(data *2) : reject('Number must be provided')
        , secondsToWait*1000);
    });
}


getDataPromise(10).then((param)=>{
    return getDataPromise(param);
}).then((param)=>{
    console.log(param);
})