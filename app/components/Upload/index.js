import React, {Component} from 'react';
import {Tile, Button, Icon, Upload} from 'tinper-bee';

import './index.less';

const Dragger = Upload.Dragger;


const props = {
    name: 'file',
    action: '/upload.do',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            console.log(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            console.log(`${info.file.name} file upload failed.`);
        }
    },
};

const demo6props = {
    name: 'file',
    multiple: true,
    showUploadList: false,
    action: '/upload.do',
    enterDragger(){
        console.log('enterDragger')
    },
    leaveDragger(){
        console.log('leaveDragger')
    },
    beforeUpload(file,fileList){
        console.log('file: ',file, 'fileList: ',fileList)
    },
    onChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {

            console.log(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            console.log(`${info.file.name} file upload failed.`);
        }
    },
};

export default class UploadDemo extends Component {


    render() {
        return (
            <div className="upload-demo">
                <Tile className="upload-demo-tile demo-tile demo-tile-lg">
                    <h3>上传</h3>
                    <div className="upload-demo-row">
                        <Upload {...props}>
                            <Button colors="primary" bordered>
                                <Icon type="uf-upload" /> Click to Upload
                            </Button>
                        </Upload>
                    </div>
                    <div className="upload-demo-row" style={{ marginTop: 16, height: 170 }}>
                        <Dragger {...demo6props}>
                            <p className="u-upload-drag-icon">
                                <Icon type="inbox" className="uf-upload" />
                            </p>
                            <p className="u-upload-text">Click or drag file to this area to upload</p>
                            {/* <p className="u-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p> */}
                        </Dragger>
                    </div>
                </Tile>
            </div>
        )
    }
}