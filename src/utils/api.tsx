const API_URL = "http://dev.q-bb.ca/qam_apii/api";
const applicationKey = "MRZGFPLYPXMETWJBTV2Z84AR";


export default async function  api (path: string , method: string, body: any = null)  {

    const formBody = Object.keys(body).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(body[key])).join('&');

    


    console.log(formBody , 'formbodyyy')
return fetch(`${API_URL}${path}`, {
    method: method,
    headers: {
      Accept: "*/*",
      "application-key": applicationKey,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: method !== "POST" ? undefined : formBody,
  })
}
