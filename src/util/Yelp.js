// Client ID
// eeymoQLqY3ybZ85heJqFEA

// API Key
const apiKey = 'YRyyaOQoz_joGKav-PKVrUfZOXjQq38SUQoBOjEZIo-Gi7JNs7ZTXYq9DLw7cqXfoIhNLeEl1j-I67B6Z5qlm_rHdOqaVd1_CA77KA5ZT1sfCy9k17Ohe6XagFrrW3Yx';

const Yelp = {
    search: (term, location, sortBy) => {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}` 
            }
        })
        .then( response => response.json())
        .then( jsonResponse => {
              if (jsonResponse.businesses) {
                  console.log(jsonResponse.businesses)
                  return jsonResponse.businesses.map( business => {
                      return {
                        id:business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.alias,
                        rating: business.rating,
                        reviewCount: business.review_count
                      }
                  })
              }
        });
    }
}


export default Yelp;