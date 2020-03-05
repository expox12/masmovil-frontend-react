import PropTypes from "prop-types";
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changePage, fetchPhones } from '../../reducers/phones/actions';
import Pagination from '../pagination';
import PhoneTable from "./list";

const Home = props => {
    const { page, phones } = props;
    const { changePage, fetchPhones } = props;

    const [phoneList, setPhones] = useState([])
    const [pageState, setPageState] = useState(1)

    const incrementPage = () => setPageState(pageState + 1);
    const decreasePage = () => setPageState(pageState -1);
    
    useEffect(() => { changePage(pageState) }, [ pageState ]);
    useEffect(() => { fetchPhones() }, []);
    useEffect(() => setPhones(phones), [phones]);

    return (
        <React.Fragment>
            <main> 
                <div className="container">
                    <PhoneTable phoneList={phoneList}/>
                    <Pagination></Pagination>
                    <button onClick={() => decreasePage()}>Prev</button>
                    <p style={{color: 'red'}}>{page}</p>
                    <button onClick={() => incrementPage()}>Next</button>
                </div>
            </main>

        </React.Fragment>
    )
};

Home.propTypes = {
    //phoneList: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    // state variables
    phones: state.phones.items,
    page: state.phones.page
});

const mapDispatchToProps = {
    // state actions and action creator
    changePage,
    fetchPhones
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
