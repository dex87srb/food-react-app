import React, { Component } from 'react';
import Input from '../components/Input';
import Pagination from '../components/Pagination'
import { Recipes } from '../components/Recipe'


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dataPresent: false
        }
    }


    handleData = (childData) => {
        this.setState({ data: childData, dataPresent: true });
        this.props.Counter(this.state.data)
    }


    render() {
        const { data, dataPresent } = this.state;

        let searchResults = <p className="emptyResults">Nothing was found!</p>;


        if (data.length === 0) {

            if (searchResults && !dataPresent) {
                searchResults = ""
            } else {
               searchResults = <p className="emptyResults">Nothing was found!</p>
            }

        } else if (data.length !== 0) {

                searchResults =

                <Pagination data={data} pageLimit={5} dataLimit={10} RenderComponent={
                    Recipes
                } />

        }

        return (
            <main >
                <h1>Search recipe</h1>
                <section id="food-form">
                    <Input ParentHandleData={this.handleData} />

                </section>
                <div className="loader"></div>
                <section id="recipes"  >
                    {searchResults}
                </section>
            </main >
        )
    }
}

export default Main;