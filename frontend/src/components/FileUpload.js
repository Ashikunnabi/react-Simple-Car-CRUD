import React, { Component } from 'react'
import { DropzoneDialog } from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export default class FileUpload extends Component {
    api = "http://127.0.0.1:8000"
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            files: []
        };
    }

    handleClose() {
        this.setState({
            open: false
        });
    }

    handleSave(files) {
        //Saving files to state for further use and closing Modal.
        this.setState({
            files: files,
            open: false
        });
        this.formData = new FormData();
        this.formData.set('file', files[0])

        fetch(`${this.api}/uploadfile/`, {
            method: 'POST',
            body: this.formData,
        })
            .then(response => response.json())
            .then(result => {
                document.getElementById('success').removeAttribute('hidden');
                document.getElementById('error').setAttribute('hidden', 'hidden');
            })
            .catch(error => {
                document.getElementById('success').setAttribute('hidden', 'hidden');
                document.getElementById('error').removeAttribute('hidden');
                console.log(error)
            })
    }

    handleOpen() {
        this.setState({
            open: true,
        });
    }

    render() {
        return (
            <div style={{ float: "right" }}>
                <Button onClick={this.handleOpen.bind(this)} startIcon={<CloudUploadIcon />}>
                    Upload Excel
                </Button>
                <DropzoneDialog
                    open={this.state.open}
                    onSave={this.handleSave.bind(this)}
                    acceptedFiles={['.csv', '.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']}
                    showPreviews={true}
                    maxFileSize={5000000}
                    onClose={this.handleClose.bind(this)}
                />
            </div>
        );
    }
}