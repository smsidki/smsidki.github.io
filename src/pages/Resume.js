import React from 'react';
import { Document, Page } from 'react-pdf';
import { formatMessage } from 'umi/locale';
import main from '@/assets/style/main.less';
import resume from '@/assets/doc/resume.pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Button, Col, Pagination, Row } from 'antd';
import SpinLoading from '@/components/Loading/SpinLoading';

class Resume extends React.Component {

  state = {
    page: 1,
    totalPages: 1
  };

  onDocLoaded = ({ numPages: totalPages }) => {
    this.setState({totalPages});
  };

  changePage = page => {
    this.setState({page});
  };

  render() {
    // noinspection RequiredAttributes
    return (
      <div className={main['content-n-padding-v']}>
        <Row type={'flex'} justify={'center'}>
          <Col style={{margin: '0 10px'}}>
            <Pagination
              simple={true}
              onChange={this.changePage}
              total={this.state.totalPages * 10}
            />
          </Col>
          <Col style={{margin: '0 10px'}}>
            <a href={resume} download>
              <Button type={'primary'} size={'small'} icon={'download'}>
                {formatMessage({ id: 'download.pdf'})}
              </Button>
            </a>
          </Col>
        </Row>
        <br/>
        <Row type={'flex'} justify={'center'}>
          <Document
            file={resume}
            loading={<SpinLoading/>}
            externalLinkTarget={'_blank'}
            onLoadSuccess={this.onDocLoaded}
          >
            <Page pageNumber={this.state.page}/>
          </Document>
        </Row>
      </div>
    );
  }

}

export default Resume;
