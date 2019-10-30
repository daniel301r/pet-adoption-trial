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
                break;
            case 'good_with_dogs':
                this.setState({ good_with_dogs: true })
                break;
            case 'good_with_cats':
                this.setState({ good_with_cats: true })
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
            case 'good_with_children':
                this.setState({ good_with_children: false })
                break;
            case 'good_with_dogs':
                this.setState({ good_with_dogs: false })
                break;
            case 'good_with_cats':
                this.setState({ good_with_cats: false })
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

    makeRequestToAPI = () => {
        let query = {}
        
        query.type = this.props.animalQuery;

        // take query limit out later if needed
        query.limit = 100;
        const allFilters = Object.entries(this.state)
        
        for(const [filterOption, filter] of allFilters){
            if(filterOption.startsWith('good') && filter === true){
                query[filterOption] = true
            } else if(!filterOption.startsWith('good') && filter.length > 0){
                // instead of changing the filterOption could change name in state
                // but then have to change all the filter names on this component and also in applied filters
                const property = filterOption.slice(0, -1);
                query[property] = filter.toString() 
            }
        }
        this.props.onRequestAnimals(query);
    }



    render() {
        const { isPending, error, otherData, animals } = this.props;

        const removeNull = (arr) => {
            const index = arr.findIndex(el => el === null);
            arr.splice(index, 1);
            return arr
        }

        const primaryBreed = animals.map(animal => animal.breeds.primary);
        const secondaryBreed = animals.map(animal => animal.breeds.secondary);
        const breedsArr = [...new Set([...primaryBreed, ...secondaryBreed])];

        const primaryColors = animals.map(animal => animal.colors.primary);
        const secondaryColors = animals.map(animal => animal.colors.secondary);
        const tertiaryColors = animals.map(animal => animal.colors.tertiary);
        const colorsArr = [...new Set([...primaryColors, ...secondaryColors, ...tertiaryColors])];

        return (
            <div>
                {animals.length > 0 ? <InfoBar otherData={otherData} query={this.props.animalQuery}/> : ''}
                <div className="animal-results-page">
                    <FilterOptions 
                        addFilterOptions={this.addFilterOptions} 
                        makeRequestToAPI={this.makeRequestToAPI}
                        breeds={removeNull(breedsArr)}
                        colors={removeNull(colorsArr)}
                    />
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
        isPending: state.searchAnimals.isPendingAnimals,
        otherData: state.searchAnimals.otherData,
        animals: state.searchAnimals.animals,
        error: state.searchAnimals.errorAnimals
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onRequestAnimals: (query) => dispatch(requestAnimals(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PetPage);