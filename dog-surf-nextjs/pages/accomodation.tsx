
import { useEffect, useState } from 'react'
import styles from '../styles/Accomodation.module.css'

const accomodation = () => {

    const [properties, setProperties] = useState<any[]>([]);




    useEffect(() => {
        async function getData() {
          try {
            const data = await getAllProperties() 
            setProperties(data)
            // console.log(data)
          } catch (error) {
            console.error(error)
          }
        }
        getData()
      }, [])

    

      interface Property {
        id: number
        propertyLocation: string
        propertyAddress: string
      }


         async function getAllProperties() {
              // Send an HTTP GET request to the endpoint using the "fetch" function
            const res = await fetch('http://localhost:8090/api/v1/users/properties')
               // Get the response data as a JavaScript object
            const data = await res.json()
            // console.log(data)
            // data = data.filter((property: { bookedProperty: null; }) => property.bookedProperty == null);
            console.log('test')
            console.log(data)
            return data
          }

  

          async function BookProperty(id: string) {
            console.log(id);
            const property_id = id
            const user_id = sessionStorage.getItem('user_id');
            console.log(user_id);
            const endpoint = 'http://localhost:8090/api/v1/users/' + user_id + '/book/property/' + property_id ;
            console.log(endpoint);
            const options = {method : 'POST'}
            const response = await fetch(endpoint, options)
            const result = await response.json()
            console.log(result)
          }

    return (

        <div className={styles.listing_box_root}>
          <div className={styles.dog_info_box}>
          <div className={styles.dog_info_left}>
            
          <img alt="test" src="/images/list_dog.png"  />
          </div>
          <div className={styles.dog_info_right}>
          <h1>Check out different available properties</h1>
          <p>Find a great place where your dog will enjoy!, in such a short amount of time !</p>
          </div>
          </div>





            <div className={styles.listing_box_child}>
            <h3 className={styles.Authformtitle}>Properties List</h3>

                    <div className={styles.listing_text_headlines}>
                        <label className={styles.label_l_id}>ID</label>
                        <label className={styles.label_l}>Property Location</label>
                        <label className={styles.label_l}>Property address</label>
                        <button className={styles.button_invisible }>BOOK</button>
                    </div>
                
    
   <div>
      {/* Only render the list of properties if the "properties" state variable is truthy (not null or undefined) */}
      {properties && properties.map((property: Property) => (
        <div className={styles.db_input} key={property.id}>
          {/* <form  className={styles.db_input}> */}

          <label className={styles.label_l_id}>{property.id}</label>
          <label className={styles.label_d}>{property.propertyLocation}</label>
          <label className={styles.label_d}>{property.propertyAddress}</label>
          <button type="submit" className={styles.button3}  onClick={() => BookProperty(property.id.toString())} >Book </button>
               {/* </form> */}
        </div>
      ))}
      {/* Display a loading message if the "properties" state variable is null or undefined */}
      {/* {!properties && <p>Loading...</p>} */}
    </div>

            </div>
        
            <div className={styles.listing_bottom_box}>
            <img alt="test" src="/images/dogs_bottom.png"  />
            <img alt="test" src="/images/house_bot.png"  />
            </div>
    </div>











    )
}
export default accomodation
