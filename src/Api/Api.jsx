import axios from 'axios';


export const getData = (foodHealth, foodDiet, foodSearch, selectedDiet, selectedHealth, url, caloriesMin, caloriesMax) => {


    let config = {
        headers: {

            apiKey: process.env.REACT_APP_API_KEY,
            withCredentials: true,
            sameSite: 'none',
            secure: true

        }
    }

    selectedHealth = foodHealth.options[foodHealth.selectedIndex].value;
    selectedDiet = foodDiet.options[foodDiet.selectedIndex].value;


    url = `https://api.edamam.com/search?q=${foodSearch.value}&app_id=${process.env.REACT_APP_API_KEY_ID}&app_key=${process.env.REACT_APP_API_KEY}&diet=${selectedDiet}&health=${selectedHealth}&calories=${caloriesMin.value}-${caloriesMax.value}&from=0&to=100`;

    foodSearch.value = "";
    foodHealth.selectedIndex = 0;
    foodDiet.selectedIndex = 0;

    caloriesMin = "";
    caloriesMax = "";


    return new Promise((resolve, reject) => {
        axios
            .get(url, config)
            .then((response) => {
                return resolve(
                    response.data
                );
            })
            .catch((error) => {
                console.log(error);
                return reject(error);
            });
    });
}

export default getData;