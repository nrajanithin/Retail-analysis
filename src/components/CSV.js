import React, { Component } from 'react'
import { CsvToHtmlTable } from 'react-csv-to-table';
import { CSVReader } from 'react-papaparse'
import * as d3 from 'd3'
import hh from '../assets/400_households.csv'
import products from '../assets/400_products.csv'
import transactions from '../assets/400_transactions.csv'
const buttonRef = React.createRef()

export default class CSVReaderr extends Component {
    constructor(props)
    {
      super(props);
      this.state = {
        arr:[]
     }
    }
  componentDidMount = ()=>{
    d3.csv(hh, function(hh) { console.log(hh['AGE_RANGE']); });
  }
  handleOpenDialog = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e)
    }
  }

  handleOnFileLoad = (data) => {
    console.log('---------------------------')
    console.log(data)
    console.log(data[0].data[1])
    console.log('---------------------------')
  }

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  }

  handleOnRemoveFile = (data) => {
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')
  }

  handleRemoveFile = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e)
    }
  }

  render() {
    return (
        <div>
          <div class="row">
            <h1>Hi {this.props.un}</h1>
            <button>Logout</button>
          </div>
      <CSVReader
        ref={buttonRef}
        onFileLoad={this.handleOnFileLoad}
        onError={this.handleOnError}
        noClick
        noDrag
        onRemoveFile={this.handleOnRemoveFile}
      >
        {({ file }) => (
          <aside
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: 10
            }}
          >
            <button
              type='button'
              onClick={this.handleOpenDialog}
              style={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                width: '40%',
                paddingLeft: 0,
                paddingRight: 0
              }}
            >
              Browse file
            </button>
            <div
              style={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#ccc',
                height: 45,
                lineHeight: 2.5,
                marginTop: 5,
                marginBottom: 5,
                paddingLeft: 13,
                paddingTop: 3,
                width: '60%'
              }}
            >
              {file && file.name}
            </div>
            <button
              style={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                paddingLeft: 20,
                paddingRight: 20
              }}
              onClick={this.handleRemoveFile}
            >
              Remove
            </button>
          </aside>
        )}
      </CSVReader>
      <div class="row">
              <div>
                {this.state.arr[0]}
              </div>
      </div>
      </div>
    )
  }
}