import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestAnimals } from '../../actions/actions';

import InfoBar from './InfoBar';
import FilterOptions from './FilterOptions';
import Pets from './Pets';
import AppliedFilters from './AppliedFilters';

class PetPage extends Component {

    state ={
        breeds: [],
        ages: [],
        sizes: [],
        genders: [],
        good_with_children: false,
        good_with_dogs: false,
        good_with_cats: false,
        coats: [],
        colors: []
    }

    addFilterOptions = (filter, option) => {

        const newArr = (option, arr) => {
            if(!arr.includes(option)){
                arr.push(option)
            }
            return arr
        }

        switch(filter){
            case 'breed':
                const breedsArr = newArr(option, this.state.breeds);
                this.setState({
                    breeds: breedsArr
                })
                break;
            case 'age':
                const agesArr = newArr(option, this.state.ages)
                this.setState({
                    ages: agesArr
                })
                break;
            case 'size':
                const sizesArr = newArr(option, this.state.sizes);
                this.setState({
                    sizes: sizesArr
                })
                break;
            case 'gender':
                const gendersArr = newArr(option, this.state.genders);
                this.setState({
                    genders: gendersArr
                })
                break;
            case 'good_with_children':
                this.setState({ good_with_children: true })
                console.log(this.state.good_with_children)
                break;
            case 'good_with_dogs':
                this.setState({ good_with_dogs: true })
                console.log(this.state.good_with_dogs)
                break;
            case 'good_with_cats':
                this.setState({ good_with_cats: true })
                console.log(this.state.good_with_cats)
                break;
            case 'coat':
                const coatsArr = newArr(option, this.state.coats);
                this.setState({
                    coats: coatsArr
                })
                break;
            case 'color':
                const colorsArr = newArr(option, this.state.colors);
                this.setState({
                    colors: colorsArr
                })
                break;
            default:
                console.log('not working')
        }

    }

    deleteFilterOptions = (filter, option) => {
        const newArr = (option, arr) => {
            return arr.filter(el => el !== option)
        }

        console.log(filter, option)
        switch(filter){
            case 'age':
                const agesArr = newArr(option, this.state.ages)
                this.setState({
                    ages: agesArr
                })
                break;
            case 'breed':
                const breedsArr = newArr(option, this.state.breeds )
                this.setState({
                    breeds : breedsArr
                })
                break;
            case 'size':
                const sizesArr = newArr(option, this.state.sizes)
                this.setState({
                   sizes : sizesArr
                })
                break;
            case 'gender':
                const gendersArr = newArr(option, this.state.genders)
                this.setState({
                    genders : gendersArr
                })
                break;
            case 'coat':
                const coatsArr = newArr(option, this.state.coats)
                this.setState({
                    coats : coatsArr
                })
                break;
            case 'color':
                const colorsArr = newArr(option, this.state.colors)
                this.setState({
                    colors : colorsArr
                })
                break;
            default:
                console.log('not working')
        }
    }

    deleteAllFilters = () => {
        this.setState({
            breeds: [],
            ages: [],
            sizes: [],
            genders: [],
            good_with_children: false,
            good_with_dogs: false,
            good_with_cats: false,
            coats: [],
            colors: []
        })
    }

    // when state is updated make the next update lifecycle methods
    makeRequestToAPI = () => {
        let query = {}
        
        query.type = this.props.animalQuery;

        // take this out later if needed
        query.limit = 100;
        const allFilters = Object.entries(this.state)
        
        for(const [filterOption, filter] of allFilters){
            if(filterOption.startsWith('good') && filter === true){
                query[filterOption] = true
            } else if(!filterOption.startsWith('good') && filter.length > 0){
                // instead of changing the filterOption could change name in state
                // but then have to change all the names on the page and also in applied filters
                const property = filterOption.slice(0, -1);
                query[property] = filter.toString() 
            }
        }
        // add request here
        this.props.onRequestAnimals(query);
    }

    render() {
        const { isPending, error, otherData, animals } = this.props; // this should have animals from the store

        

        //console.log(animals)

        // individual animal object includes 
        
        // breeds: { mixed: boolean, primary: string, secondary: string, unknown: boolean }
        // const primaryBreed = animals.map(animal => animal.breeds.primary);
        // const secondaryBreed = animals.map(animal => animal.breeds.secondary);
        // const species = [...new Set([...primaryBreed, ...secondaryBreed])]
        // console.log(species)
        

        // need to figure out the amount of male and female
        // const amountFemales = (animals.filter(animal => animal.gender === 'Female')).length;
        // console.log(amountFemales)

        
        // colors : { primary: string, secondary: string, tertiary: string }
        // probably don't need to worry about this
        // const primaryColors = animals.map(animal => animal.colors.primary)
        // const secondaryColors = animals.map(animal => animal.colors.primary)
        // const colors = [...new Set([...primaryColors, ...secondaryColors])]
        // console.log('colors', colors)

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
                    <FilterOptions addFilterOptions={this.addFilterOptions} makeRequestToAPI={this.makeRequestToAPI}/>
                    <div className="animal-results-right">
                        <AppliedFilters 
                            filters={this.state} 
                            deleteFilterOptions={this.deleteFilterOptions}
                            deleteAllFilters={this.deleteAllFilters}
                            makeRequestToAPI={this.makeRequestToAPI}
                        />
                        <Pets animals={animals} isPending={isPending} error={error} />
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