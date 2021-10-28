import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {

    constructor(props) {
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessEmail = this.onChangeBusinessEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangewebsite = this.onChangewebsite.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeNotes = this.onChangeNotes.bind(this);
        this.onChangeactivate_from = this.onChangeactivate_from.bind(this);
        this.onChangetype = this.onChangetype.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            name: '',
            email: '',
            phone:'',
            website:'',
            category:'',
            notes:'',
            type:'',
            activate_from:'',
        }
    }
    onChangePersonName(e) {
      this.setState({
        name: e.target.value
      });
    }
    onChangeBusinessEmail(e) {
      this.setState({
        email: e.target.value
      })  
    }
    onChangePhone(e) {
      this.setState({
        phone: e.target.value
      })
    }

    onChangewebsite(e) {
      this.setState({
        website: e.target.value
      })
    
    }
    onChangeCategory(e) {
      this.setState({
        category: e.target.value
      })
    }

    onChangeNotes(e) {
      this.setState({
        notes: e.target.value
      })
    }

    onChangeactivate_from(e) {
      this.setState({
        activate_from: e.target.value
      })
    }

    onChangetype(e) {
      this.setState({
        type: e.target.value
      })
    }
  
    onSubmit(e) {
      e.preventDefault();
    //   console.log(`The values are ${this.state.name}, ${this.state.email}, and ${this.state.phone},${this.state.website},${this.state.category}`)
    //   const user = {
    //     name: this.state.name,
    //     email: e.target.value,
    //     website: e.target.value,
    //     category: e.target.value

    //   };
  
      axios.post('http://localhost:8000/api/store-bfx', this.state)
        .then(res => {
          console.log(res);
          console.log(res.data);


        })
        document.getElementById("create-course-form").reset();

    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3 class="align_center">Add New Business</h3>
                <form id="create-course-form" onSubmit={this.onSubmit}>
                <div class="container">
                    <div class="row">
                        <div class="col mb-3">
                            <div className="form-group">
                            <label>Name:  </label>
                            <input type="text" name="name" value={this.state.name}
                        onChange={this.onChangePersonName}  className="form-control" required/>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div className="form-group">
                            <label>Email: </label>
                            <input type="email" name="email" value={this.state.email}
                        onChange={this.onChangeBusinessEmail} className="form-control"/>
                            </div>
                        </div>

                        <div class="col mb-3">
                            <div className="form-group">
                            <label>Phone: </label>
                            <input type="number" name="phone" value={this.state.phone}
                        onChange={this.onChangePhone} className="form-control"/>
                            </div>
                        </div>
                       
                        
                    </div>

                    <div class="row">
                        <div class="col mb-3">
                            <div className="form-group">
                            <label>website:  </label>
                            <input type="text" name="website" value={this.state.website}
                                onChange={this.onChangewebsite} className="form-control"/>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div className="form-group">
                            <label>Contact Name: </label>
                            <input type="text" name="contact_name" className="form-control"/>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div className="form-group">
                            <label>Contact Phone: </label>
                            <input type="text" name="contact_phone" className="form-control"/>
                            </div>
                        </div>
                      
                    </div>

                    <div class="row">
                        <div class="col mb-3">
                            <div className="form-group">
                            <label>Notes:  </label>
                            <textarea id="w3review" name="notes" value={this.state.notes}
                                onChange={this.onChangeNotes} className="form-control" rows="3" cols="40">
                            </textarea>
                            </div>
                        </div>

                        <div class="col mb-3">
                              <div className="form-group">
                              <label>Type: </label>
                              {/* <input type="text" name="type" className="form-control"/> */}

                          <div className="radio">
                                <label>
                                  <input type="radio" name="type" onChange={this.onChangetype} value="small_business" checked={true} />
                                  &nbsp;Small Business
                                </label>
                              </div>
                              <div className="radio">
                                <label>
                                  <input type="radio" name="type" onChange={this.onChangetype} value="enterprise" />
                                  &nbsp;Enterprise
                                </label>
                              </div>
                              <div className="radio">
                                <label>
                                  <input type="radio" name="type" onChange={this.onChangetype} value="entrepreneur" />
                                  &nbsp;Entrepreneur
                                </label>
                              </div>

                              </div>
                        </div>

          

                        <div class="col mb-3">
                            <label class="customcheck"><b>Category</b></label>
                            <select class="form-control" value={this.state.value} multiple={true} name="category[]" onChange={this.onChangeCategory} aria-label="multiple select example">
                                <option selected>Select Category</option>
                                <option value="Clothes">Clothes</option>
                                <option value="Toys">Toys</option>
                                <option value="Groceries">Groceries</option>
                                <option value="Electronics">Groceries</option>
                                <option value="Digital">Digital</option>
                            </select>
                        </div>
                      
                    </div>


                    <div class="row">
                        <div class="col mb-3">
                            <div className="form-group">
                            <label>Commission percentege:  </label>
                            <input type="text" name="commission_percentege" className="form-control"/>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div className="form-group">
                            <label>Active from: </label>
                            <input type="date" name="activate_from" value={this.state.activate_from}
                                onChange={this.onChangeactivate_from} className="form-control"/>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div className="form-group">
                            <label>Contact Email: </label>
                            <input type="text" name="contact_email" className="form-control"/>
                            </div>
                        </div>
                      
                    </div>

                    <div className="form-group align_center">
                            <input type="submit" value="Register Business" className="btn btn-primary"/>
                    </div>

                </div>
                </form>
                </div>
        )
    }
}