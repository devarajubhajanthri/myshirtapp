import React, { Component } from 'react';
import Display from '../design/Display';
import Setting from '../design/Setting';
import { connect } from 'react-redux';
import { storage } from '../../config/firebaseConfig';
import { saveDesign } from '../../store/actions/saveDesignAction';

class Dashboard extends Component {
    state = {
        tshirtColor: 'black',
        upperText: 'This is Upper Text',
        lowerText: 'This is Lower Text',
        memeImg: '',
        url:'',
        textSize: 38,
        testColor: 'white',
    }

    handleTshirtColor = (e) => {
        this.setState({ tshirtColor: e.target.id });
    }

    handleUpperText = (e) => {
        this.setState({ upperText: e.target.value })
    }

    handleLowerText = (e) => {
        this.setState({ lowerText: e.target.value })
    }
    handleTextSize = (e) => {
        this.setState({textsize: e.target.values})
    }
    
    formatText() {
        const size = this.state.textSize;
        return parseInt(size);
    }

    handleTextColor = (e) => {
        this.setState({textColor: e.target.value})
    }
    handleImageUpload = (e) => {
        if (e.target.files[0]) {
            const image = (e.target.files[0]);
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',
                (snapshot) => {
                    console.log(snapshot);
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    storage.ref('images').child(image.name).getDownloadURL().then(url => {
                        this.setState({url});
                    })
                }
            )
        }
    } 

    handlesaveDesign = (e) => {
        if(e.target.id === 'saveDesign') {
            this.props.saveDesign(this.state)
            console.log('button clicked')
        }
    }

    render() {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8">
                        <Display 
                        display={this.state}
                        textFormat={this.formatText()}
                        />
                    </div>
                    <div className="col-lg-4">
                        <Setting
                            color={this.handleTshirtColor}
                            UpperText={this.handleUpperText}
                            lowerText={this.handleLowerText}
                            uploadImage={this.handleImageUpload}
                            textsize={this.handleTextSize} 
                            textColor={this.handleTextColor}
                            saveDesign={this.handlesaveDesign}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveDesign: (design) => dispatch(saveDesign(design))
    }
}

export default connect(null,mapDispatchToProps) (Dashboard);
