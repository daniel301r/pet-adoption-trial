import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestAnimals } from '../../actions/actions';

import InfoBar from './InfoBar';
import Filters from './Filters';
import Pets from './Pets';

class PetPage extends Component {
    
    render() {
        const { isPending, error, otherData } = this.props; // this should have animals from the store
        const animals = [{ name: 'Bob', age: 'baby', species: 'dog'}]

        // individual animal object includes 
        
        // breeds: { mixed: boolean, primary: string, secondary: string, unknown: boolean }
        
        
        // age: string - options - baby/young/adult/senior
        
        // size: string - options - small/medium/large/XL
        
        // gender: string - options - male/female

        // need to figure out the amount of male and female
        const amountFemales = (animals.filter(animal => animal.gender === 'Female')).length;
        console.log(amountFemales)

        
        // coat: string - options - short/long 
        
        // colors : { primary: string, secondary: string, tertiary: string }
        
        // photos: [ {full : string (link), large: string, medium: string, small: string } ]
        
        // environment: { cats: boolean?, dogs: boolean?, children: boolean? }
        
        // name: string   
        
        // description: string
        
        // tags: [ string ] 

        // example of how to count the amount of properties in array using reduce, so would need
        // to put all of the properties in an array and then use this to count how many
        // - https://www.freecodecamp.org/news/check-out-these-useful-ecmascript-2015-es6-tips-and-tricks-6db105590377/

        return (
            <div>
                {/* only show info bar if an API call is made */}
                <InfoBar otherData={otherData}/>
                <div className="animal-results">
                    <Filters />
                    <Pets animals={animals} isPending={isPending} error={error}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        animalQuery: state.searchAnimals.animalQuery,
        isPending: state.searchAnimals.isPending,
        otherData: state.searchAnimals.otherData,
        animals: state.searchAnimals.animals,
        error: state.searchAnimals.error
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onRequestAnimals: (query) => dispatch(requestAnimals(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PetPage);