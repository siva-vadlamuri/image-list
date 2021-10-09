import React, { Component } from 'react'

export class DummyApi extends Component {
   
    state = {
        pageNumber : 1,
        results : [{}],
        pagination : [1,2,3,4,5,6,7,8]
    }
    getDummyData = async()=>{

     const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=20`,{
         headers : {
             "app-id" : '61421a5a6a9b4d3ad64b8cb1',
         }
     });
     const data = await response.json();
    //  console.log(data);
    this.setState({results:data.data});
    }

     handleClick = (e)=>{
         const {value} = e.target;
         this.setState({pageNumber:value});
     }

    componentDidMount(){
        this.getDummyData()
    }
    
    componentDidUpdate(currentState,prevState){
        console.log(this.state,prevState);
        console.log('Component Did Update is called ')
        
        if(this.state.pageNumber!=prevState.pageNumber){
            console.log(this.state.pageNumber,prevState.pageNumber);
            this.getDummyData();
        }
       
    }
    render() {
        // console.log(this.state);
        console.log('Render method is called');
        return (
            <div>
                
                <div className="container mt-5">
                    <div className="row">

                    {
                    this.state.results.length > 1 && this.state.results.map((user)=>(
                     
                        <div className="col-lg-6">
                          <div className="card mb-3">
                              <div className="row">
                                  <div className="col-lg-4">
                                  <img className="img-fluid rounded w-100 p-3" src={user.picture} alt="" />
                                  </div>
                                  <div className="col-lg-8">
                                      <div className="mt-3">
                                          <p>Title : {user.title}</p>
                                          <p>First Name : {user.firstName}</p>
                                          <p>Last Name: {user.lastName}</p>
                                      </div>
                                  </div>
                              </div>
                              
                          </div>
                        </div>
                        
                    ))
                }
                        
                    </div>
               
                </div>
                <div className="text-center">
                    {
                        this.state.pagination.map((number)=>(
                            
                                <button className="btn btn-info m-2" value={number} onClick={this.handleClick} >{number}</button>
                               
                        ))
                    }
                </div>
                <div>
                   


                </div>
               

            </div>
        )
    }
}

export default DummyApi
