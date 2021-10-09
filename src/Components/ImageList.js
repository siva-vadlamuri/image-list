import React, { Component } from 'react'

export class ImageList extends Component {
    state = {
        
    }
    static getDerivedStateFromProps(props,state){
    //    Sync up the props with stata
          const data = props.data;
        return {
            data
        }
    }
    render() {
        // console.log(this.props?.data);
        // console.log(this.state);
        return (
            <div>
                <section className="container">
                    <section className="row">
                        {
                          this.state.data.length > 0 &&  this.state?.data.map((product)=>(
                                <div  className="col-md-4">
                                    <img key={product.id} className="img-fluid rounded h-75 w-75" src={product?.urls?.regular} alt={product?.alt_description}/>
                                    </div>
                            ))
                        }
                    </section>
                </section>
            </div>
        )
    }
}

export default ImageList
