import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestAnimals } from '../../actions/actions';

import InfoBar from './InfoBar';
import FilterOptions from './FilterOptions';
import Pets from './Pets';
import AppliedFilters from './AppliedFilters';

class PetPage extends Component {
    
    render() {
        const { isPending, error, otherData, animals } = this.props; // this should have animals from the store
        // const animals = [{ name: 'Bob', age: 'baby', species: 'dog'}, { name: 'Bob', age: 'baby', species: 'dog'}, 
        // { name: 'Bob', age: 'baby', species: 'snake'}, { name: 'Bob', age: 'baby', species: 'gecko'}, { name: 'Bob', age: 'baby', species: 'rabbit'},
        // { name: 'Bob', age: 'baby', species: 'snake'}, { name: 'Bob', age: 'baby', species: 'dog'}, { name: 'Bob', age: 'baby', species: 'rabbit'}, { name: 'Bob', age: 'baby', species: 'rabbit'},
        // { name: 'Bob', age: 'baby', species: 'dog'}, { name: 'Bob', age: 'baby', species: 'gecko'}]

        console.log(animals)



        // individual animal object includes 
        
        // breeds: { mixed: boolean, primary: string, secondary: string, unknown: boolean }
        const primaryBreed = animals.map(animal => animal.breeds.primary);
        const secondaryBreed = animals.map(animal => animal.breeds.secondary);
        const species = [...new Set([...primaryBreed, ...secondaryBreed])]
        console.log(species)
        
        // age: string - options - baby/young/adult/senior
        
        // size: string - options - small/medium/large/XL
        
        // gender: string - options - male/female

        // need to figure out the amount of male and female
        // const amountFemales = (animals.filter(animal => animal.gender === 'Female')).length;
        // console.log(amountFemales)

        
        // coat: string - options - short/long 
        
        // colors : { primary: string, secondary: string, tertiary: string }
        // probably don't need to worry about this
        const primaryColors = animals.map(animal => animal.colors.primary)
        const secondaryColors = animals.map(animal => animal.colors.primary)
        const colors = [...new Set([...primaryColors, ...secondaryColors])]
        console.log('colors', colors)
        
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
                <div className="animal-results-page">
                    <FilterOptions species={species}/>
                    <div className="animal-results-right">
                        <AppliedFilters />
                        {/* <Pets animals={animals} isPending={isPending} error={error} /> */}
                    </div>
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