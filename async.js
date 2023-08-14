
getDataPromise = (num) => new Promise((resolve, reject)=>{
    setTimeout(()=> typeof num === 'number' ? resolve(num *2):reject('not a number') , 3000)
})

const processData = async ()=>{
    let result = await getDataPromise(5);
    result = await getDataPromise(result);
    return result;
}

processData().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});