export default function swDev(){
    const pathUrl = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(pathUrl).then(response=>{
        console.warn('response ',response);
    })
}