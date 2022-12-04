// import React from "react"
import React, {useEffect, useState} from "react"
// import '../App.css';
import './listings.css';

// export default function Listings (props) {
  export default function Listings() {
    const API_URL = 'http://localhost:8090'
    const [properties, setProperties] = useState([]);
    

    useEffect(() => {
      getAllProperties()
          .then(props => {
              console.log(props);
              setProperties(props);
          });
  }, []);

    function getAllProperties() {
      return fetch(`${API_URL}/api/v1/users/properties`, {
          method: 'GET',
          mode: 'cors',
          headers: {   'Accept': 'application/json',    }
    })
        .then(response => response.json())
        .then(res => {
            console.log(res);
            return res;  })
        .catch(error => console.log(error)) ;
}


    return (
      
        <div className="listing_box_root">
            <div className="listing_box">
                {/* <div className="Auth-form-container">
        <div className="Auth-form-content"> */}
                <h3 className="Auth-form-title">Listing of all properties</h3>
                <div className="listing_text_headlines">
                    <label className="label_l">Property Location</label>
                    <label className="label_l">Property address</label>
                
                    <label className="label_l">Date</label>
                    <button className="button_invisible ">BOOK</button>
                </div>
                
                { properties.map((property) => (
                    <div className='db_input' key={property.id}>
                        <label className="label_d">{property.propertyLocation}</label>
                        <label className="label_d">{property.propertyAddress}</label>
                        <label className="label_d">{property.id}</label>
                        <button className="button_d btn btn-primary"
                              
                        >BOOK
                        </button>
                    </div>
                ))}

            </div>
        </div>
        
        // </div>
        //     </div>
    )
}