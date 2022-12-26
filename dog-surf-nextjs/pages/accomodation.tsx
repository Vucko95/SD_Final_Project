import { useEffect, useState } from 'react'
import styles from '../styles/Accomodation.module.css'

const accomodation = () => {
    const API_URL = 'http://localhost:8090'
    // const [properties, setProperties] = useState(null);
    const [properties, setProperties] = useState<any[]>([]);


    // useEffect(() => {
    //     async function getData() {
    //       const data = await getAllProperties()
    //       setProperties(data)
    //     }
    //     getData()
    //   }, [])

    useEffect(() => {
        async function getData() {
          // Use a try-catch block to handle any errors that may occur
          try {
            const data = await getAllProperties() 
            setProperties(data)
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
            console.log(data)
            return data
          }


    return (

        <div className={styles.listing_box_root}>
          <div className={styles.dog_info_box}>
          <div className={styles.dog_info_left}>
            
          <img alt="test" src="/images/list_dog.png"  />
          </div>
          <div className={styles.dog_info_right}>
          <h1>Check out different available properties</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui molestiae ab facere tempora quasi accusantium eaque iste sunt fuga ullam saepe inventore repellendus perferendis quam doloribus, esse ipsum perspiciatis atque.</p>
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
                
                {/* { properties.map((property) => (
                    <div className='db_input' key={property.id}>
                        <label className="label_l_id">{property.id}</label>
                        <label className="label_d">{property.propertyLocation}</label>
                        <label className="label_d">{property.propertyAddress}</label>
                        <button className="button_d btn btn-primary"
                            
                        >BOOK
                        </button>
                    </div>
                ))} */}
   <div>
      {/* Only render the list of properties if the "properties" state variable is truthy (not null or undefined) */}
      {properties && properties.map((property: Property) => (
        <div className={styles.db_input} key={property.id}>
          <label className={styles.label_l_id}>{property.id}</label>
          <label className={styles.label_d}>{property.propertyLocation}</label>
          <label className={styles.label_d}>{property.propertyAddress}</label>
          <button className={styles.button3}
                            
                            >BOOK
                            </button>
        </div>
      ))}
      {/* Display a loading message if the "properties" state variable is null or undefined */}
      {/* {!properties && <p>Loading...</p>} */}
    </div>
{/* 
                    <div className={styles.db_input} key="1">
                        <label className={styles.label_l_id}>1</label>
                        <label className={styles.label_d}>dasdasdasloremdads</label>
                        <label className={styles.label_d}>dasdasdasdassda</label>
                        <button className={styles.button3}
                            
                        >BOOK
                        </button>
                    </div>
                    <div className={styles.db_input} key="2">
                        <label className={styles.label_l_id}>1</label>
                        <label className={styles.label_d}>dasdasdasdads</label>
                        <label className={styles.label_d}>dasdasdasdassda</label>
                        <button className={styles.button3}
                            
                        >BOOK
                        </button>
                    </div>
                    <div className={styles.db_input} key="3">
                        <label className={styles.label_l_id}>1</label>
                        <label className={styles.label_d}>dasdasdasdads</label>
                        <label className={styles.label_d}>dasdasdasdassda</label>
                        <button className={styles.button3}
                            
                        >BOOK
                        </button>
                    </div> */}
            </div>
        
            <div className={styles.listing_bottom_box}>
            <img alt="test" src="/images/dogs_bottom.png"  />
            <img alt="test" src="/images/house_bot.png"  />
            </div>
    </div>











    )
}
export default accomodation
