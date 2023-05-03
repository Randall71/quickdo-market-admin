import api from "./api"

export const getBusinesses = async () => {


    const request = await api('/businesses', 'GET' , {undefined} )

    const response = await request.json()

    return response
}

  // An async function for testing our hook.
// Will be successful 50% of the time.
export const myFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
      rnd <= 5
        ? resolve("Submitted successfully 🙌")
        : reject("Oh no there was an error 😞");
    }, 2000);
  });
};