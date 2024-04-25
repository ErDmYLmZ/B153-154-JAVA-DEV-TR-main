import React, { Component }  from "react"


class ClassComp extends Component{

    constructor(props){
        super(props)
    this.state={
        message:"Hello World",
        hour:"22",
        minute:"59"
    }

    }

    componentDidMount(){
        console.log(`
        Mount: ilk render durumunda calisir
        
        `)
    }

    componentDidUpdate(prevProps,prevState){
        console.log(`
        update: render-re-render dependencye gore calisir  `)  

        if(prevState.message !== this.state.message){
            console.log(`mesaj degisti`)

        }


       if(prevState.hour !==this.state.hour){
        console.log(`saat degisti`)
       
       }
        
    }

    componentWillUnmount(){
        console.log(`
        unmount: comp unmount oldugunda calisr
    
        `)
    }



    render(){

        return(

            <div className="m-5">
                <h2>{this.state.message}</h2>
                <h2>{this.state.hour} : {this.state.minute}  </h2>

                <button className="btn btn-danger" onClick={()=>this.setState({hour:23})} >Set Hour</button>
                <button className="btn btn-success" onClick={()=>this.setState({minute:33})}  >Set Minute</button>
                <button className="btn btn-info" onClick={()=>this.setState({message:"Class comp states"})} >Set Message</button>
               
            </div>
        )
    }


}

export default ClassComp;