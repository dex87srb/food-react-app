import React, { Component } from "react";
import SelectHealth from './select/SelectHealth';
import SelectDiet from './select/SelectDiet';
import Auks from '../hoc/Auks';
import { getData } from '../Api/Api';
import loader from '../img/loader.gif';


class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            selectHealth: "HEALTH",
            selectDiet: "DIET",
            caloriesMIN:"",
            caloriesMAX:"",
            items: [],
            DataisLoaded: false,
            loaderDisplay: "",
            noneSelected: false
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleChangeDiet = this.handleChangeDiet.bind(this)
        this.handleChangeHealth = this.handleChangeHealth.bind(this)
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChangeCalories = this.handleChangeCalories.bind(this);
    }


    handleChange(e) {

        this.setState({ input: e.target.value
                        });

    }

    handleChangeCalories(evt) {

        this.setState({
            
            [evt.target.name]: evt.target.value
          });

    }

    handleChangeHealth(e) {

        this.setState({ selectHealth: e.target.value });
    }

    handleChangeDiet(e) {

        this.setState({ selectDiet: e.target.value });
    }


    checkSelected() {
        if (this.state.selectHealth === 'HEALTH' || this.state.selectDiet === 'DIET') {

            alert('Please select health and diet!')
            return false
        } else return true
    }


    onSubmit(e) {

        console.clear();
        let foodHealth = document.getElementById("health");
        let foodDiet = document.getElementById("diet");
        let foodSearch = document.querySelector("#food-form input.keyword-input");
        let selectedDiet;
        let selectedHealth;
        let url;
        let searchResults = document.querySelector(".emptyResults");

        let calMin =document.querySelector("#food-form #calories input.caloriesMIN");;
        let calMax= document.querySelector("#food-form #calories input.caloriesMAX");;

        e.preventDefault();

        if (this.checkSelected() === true) {
            getData(foodHealth, foodDiet, foodSearch, selectedDiet, selectedHealth,url, calMin, calMax)
                .then((json) => {
                    this.setState({
                        items: json.hits,
                        DataisLoaded: true
                        
                    })
                })

     
                if (searchResults) {
                    searchResults.innerHTML="";

                    this.setState({loaderDisplay:<img src={loader} alt=""/>})
                }else   
                    this.setState({loaderDisplay:<img src={loader} alt=""/>})
            

            setTimeout(() => {

                this.setState({loaderDisplay:""})
                this.props.ParentHandleData(this.state.items)

            }, 2000);

            this.setState({
                input: "",
                selectHealth: "HEALTH",
                selectDiet: "DIET",
                caloriesMIN:"",
                caloriesMAX:""
            })
        }
    }


    render() {

        return (
            <Auks>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="q"
                        value={this.state.input}
                        autoComplete="off"
                        placeholder="Keyword"
                        onChange={this.handleChange}
                        className="keyword-input"
                        required
                    />
                    <SelectHealth name="health" value={this.state.selectHealth} handleChangeHealth={this.handleChangeHealth} />
                    <SelectDiet name="diet" value={this.state.selectDiet} handleChangeDiet={this.handleChangeDiet} />
                    
                    <div id="calories">
                       
                <input  
                    
                    type="text"
                    name="caloriesMIN"
                    value={this.state.caloriesMIN}
                    autoComplete="off"
                    placeholder="Min calories"
                    onChange={this.handleChangeCalories}
                    className="caloriesMIN"
                    required/>
 <p>-</p>
                <input  
                
                    type="text"
                    name="caloriesMAX"
                    value={this.state.caloriesMAX}
                    autoComplete="off"
                    placeholder="Max calories"
                    onChange={this.handleChangeCalories}
                    className="caloriesMAX"
                    required/></div>
                    

                    <button className="search-button" id="button" type="submit" >Search</button>
                    <div className="loader">{this.state.loaderDisplay}
                    </div>
                </form>
            </Auks >
        );
    }
}

export default Input;