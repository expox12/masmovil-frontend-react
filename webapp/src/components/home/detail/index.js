import React, { useEffect, useState } from 'react';
import * as Api from "../../../services/api";
import { useParams } from "react-router";

const Detail = props => {
    const { id } = useParams();
    const [phone, setPhone] = useState();
    
    useEffect(() => { 
        (async function retrieveData() {
            const result = await Api.retrieveSinglePhone({id});
            setPhone(result.data);
        })();
    }, [setPhone]);

        

    return (
        
        <div className="container">
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={phone?.imageUrl} alt={"mobile"} />
                <div className="card-body">
                <h5 className="card-title">Detalle con ID: {id}</h5>
                </div>
            </div>
        </div>
    )

}

export default Detail;