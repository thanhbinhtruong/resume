import 'antd/dist/antd.variable.min.css';
import ReCaptchaV2 from 'react-google-recaptcha';
import { ConfigProvider } from 'antd';
import { Col, Row } from 'antd';
import {
  Button,
  Drawer,
  Form,
  Input,
  Image,
  Typography,
  notification,
  BackTop,
  Tabs,
  Timeline,
  Progress,
} from 'antd';
import {
  FacebookOutlined,
  InstagramOutlined,
  GithubOutlined,
  LinkOutlined,
} from '@ant-design/icons';

import React, { useState } from 'react';
import './portfolio.scss';
import Tree from './Tree';

const { Title } = Typography;
ConfigProvider.config({
  theme: {
    primaryColor: 'rgb(157, 209, 134)',
    textColor: 'white',
  },
});

const Portfolio = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [captcha, setCaptcha] = useState('');

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const data = await fetch(
      'https://ckeq63e4o2.execute-api.ap-southeast-1.amazonaws.com/dev/contact',
      {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'content-type': 'application/json',
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          return response.json();
        }
      })
      .then((myJson) => {
        console.log('myblob', myJson);

        if (myJson.success === true) {
          notification.success({
            message: 'Success',
          });
        } else {
          notification.error({
            message: 'Unsuccess',
            description: myJson.errors,
          });
        }
      })
      .catch((e) => {
        console.log('myblobe', e);
        notification.error({
          message: 'Unsuccess',
          description: e.message,
        });
      });
  };

  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: 'rgb(157, 209, 134)',
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  };

  function onChange(value) {
    setCaptcha(value);
  }

  const handleExpire = () => {
    setCaptcha();
  };

  return (
    <>
      <div className="intro">
        <Row>
          <Col xs={12}>
            <Button type="primary" shape="circle" size={'large'}>
              B
            </Button>
          </Col>
          <Col xs={12} style={{ textAlign: 'right' }}>
            <Button type="primary" onClick={showDrawer}>
              ☰
            </Button>
          </Col>
        </Row>
        <Row justify="center">
          <Col md={12}>
            <div style={{ textAlign: 'center' }}>
              <Image
                className="img-frame"
                width={300}
                src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/105455628_2726031467625432_8057296589738121633_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=fN7S1M9WANkAX-Z3UDC&_nc_ht=scontent.fdad2-1.fna&oh=00_AT8Y73GbFbu2Q1rqLuFCVkfRtuNXgYBrffcEjAdyo1CYmw&oe=6300CCD9"
              />
            </div>
          </Col>
          <Col md={12}>
            <Title> Hello!</Title>
            <Title level={3}>
              I'm <span className="higlight-text">Truong Thanh Binh</span>, a
              software developer passionate with Cyber Security.
            </Title>
            Get in touch:{' '}
            <a href="mailto:thanhbinhtruong678@gmail.com" target="_blank">
              thanhbinhtruong678@gmail.com
            </a>
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={24}>
            <div style={{ textAlign: 'center' }}>
              <p>ThanhBinh Truong with love 💚</p>
            </div>
          </Col>
        </Row>
      </div>
      <div className="intro-2">
        <Row justify="center">
          <Col xs={24}>
            <div style={{ textAlign: 'center' }}>
              <Title className="higlight-text" level={3}>
                ABOUT ME
              </Title>
              <Title level={5}>Main Infomation</Title>
            </div>
          </Col>
        </Row>

        <Row gutter={[36, 24]}>
          <Col xs={24} md={12} className="img-frame">
            <p>
              Innovative software engineer,
              <br />
              with a bachelor degree in IA and a passion for exploring new
              knowledge.
              <br />
              I enjoy connecting with people <br />
              and I am open to interesting work offers from innovative
              environments <br />
              where I can unlock my potential.
              <br />
              When not in the office, <br />I spend my time in fulfilling and
              relaxing pursuits such as cooking, gardening, reading, and
              exercising.
            </p>
          </Col>
          <Col xs={24} md={12}>
            <div style={{ textAlign: 'center' }}>
              <img
                className="img-frame-about"
                width={250}
                src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/131578257_2889240871304490_4935108664106103831_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=XOnpEM-TKgcAX-Kzc2N&_nc_ht=scontent.fdad2-1.fna&oh=00_AT9tBPVNmXUKHznYVGO0dPvACkYICBsx4xZfj0KaJ8_NFg&oe=6300BFD1"
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <Button
                className="margin-right-btn"
                type="primary"
                shape="circle"
                icon={<FacebookOutlined />}
                onClick={() => {
                  window.open(
                    'https://www.facebook.com/thanhbinh.truong.678',
                    '_blank'
                  );
                }}
              />
              <Button
                className="margin-right-btn"
                type="primary"
                shape="circle"
                icon={<InstagramOutlined />}
                onClick={() => {
                  window.open(
                    'https://www.instagram.com/thanhbinhtruong',
                    '_blank'
                  );
                }}
              />
              <Button
                className="margin-right-btn"
                type="primary"
                shape="circle"
                icon={<GithubOutlined />}
                onClick={() => {
                  window.open('https://github.com/thanhbinhtruong', '_blank');
                }}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Tabs defaultActiveKey="1" centered>
              <Tabs.TabPane tab="Skills" key="1">
                <Row gutter={[36, 24]}>
                  <Col xs={24} md={12}>
                    <Title className="ant-rate-text" level={5}>
                      Python/Django{' '}
                    </Title>
                    <span className=""></span>
                    <Progress percent={70} status="active" />
                    <Title className="ant-rate-text" level={5}>
                      ReactJS
                    </Title>
                    <Progress percent={70} status="active" />
                    <Title className="ant-rate-text" level={5}>
                      Html/Css/JS
                    </Title>
                    <Progress percent={70} status="active" />
                  </Col>
                  <Col xs={24} md={12}>
                    <Title className="ant-rate-text" level={5}>
                      OracelSQL/PostgresSQL/DynamoDB{' '}
                    </Title>
                    <Progress percent={70} status="active" />
                    <Title className="ant-rate-text" level={5}>
                      AWS Cloud{' '}
                    </Title>
                    <Progress percent={50} status="active" />
                    <Title className="ant-rate-text" level={5}>
                      Jenkin/Docker
                    </Title>
                    <Progress percent={50} status="active" />
                  </Col>
                </Row>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Experience" key="2">
                <Timeline mode="left">
                  <Timeline.Item label="OCT 2020 -  NOW">
                    <Title level={5}>FPT SOFTWARE</Title>
                    <p>Software Developer</p>
                  </Timeline.Item>
                  <Timeline.Item label="FEB 2020 -  OCT 2020">
                    <Title level={5}>SPLUS SOFTWARE JSC</Title>
                    <p>Software Developer</p>
                  </Timeline.Item>
                  <Timeline.Item label="DEC 2018 - SEP 2018">
                    <Title level={5}>SPLUS SOFTWARE JSC</Title>
                    <p>Internship</p>
                  </Timeline.Item>
                </Timeline>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Education" key="3">
                <Timeline mode="left">
                  <Timeline.Item label="March 24, 2022">
                    <Title level={5}>AWS Certified Developer – Associate</Title>
                    <a
                      className="higlight-text"
                      target="_blank"
                      href="https://www.credly.com/badges/31591a41-e7e3-46e6-8e51-31e1b6de2274/public_url"
                    >
                      <LinkOutlined /> AWS DVA
                    </a>
                  </Timeline.Item>
                  <Timeline.Item label="September 29, 2021">
                    <Title level={5}>
                      Professional Scrum Master™ I (PSM I)
                    </Title>
                    <a
                      className="higlight-text"
                      target="_blank"
                      href="https://www.credly.com/badges/32d32578-8e40-4d01-89b6-d77678e447d4/public_url"
                    >
                      <LinkOutlined /> PSM I
                    </a>
                  </Timeline.Item>
                  <Timeline.Item label="July 31, 2021">
                    <Title level={5}>
                      AWS Certified Solutions Architect – Associate
                    </Title>
                    <a
                      className="higlight-text"
                      target="_blank"
                      href="https://www.credly.com/badges/7c8609c5-d902-400b-ad28-761982a6554c/public_url"
                    >
                      <LinkOutlined /> AWS - SAA
                    </a>
                  </Timeline.Item>
                  <Timeline.Item label="2019">
                    <Title level={5}>Graduated at FPT University</Title>
                    <p className="higlight-text">
                      Major: Information Assurance
                    </p>
                  </Timeline.Item>
                </Timeline>
              </Tabs.TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
      <div className="intro">
        <Row justify="center">
          <Col xs={24}>
            <div style={{ textAlign: 'center' }}>
              <Title className="higlight-text" level={3}>
                GET IN TOUCH
              </Title>
              <Title level={5}>Contact</Title>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={24}>
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Row gutter={[36, 24]}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="subject"
                    label="Subject"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      {
                        required: true,
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                    ]}
                  >
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="message"
                    label="Message"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input.TextArea
                      showCount
                      style={{
                        height: 204,
                      }}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row justify="center">
                <div style={{ textAlign: 'center' }}>
                  <Col xs={24}>
                    <Form.Item
                      name="captcha"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <ReCaptchaV2
                        value={captcha}
                        sitekey="6LdEjxshAAAAAMVvv0BGtLndN9QLnGZx0Qmrvcg9"
                        onChange={onChange}
                        onExpired={handleExpire}
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Col>
                </div>
              </Row>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col xs={24}>
            <div style={{ textAlign: 'center' }}>
              <p>&copy; 2022 ThanhBinh Truong</p>
            </div>
          </Col>
        </Row>
      </div>

      <Drawer
        title="ThanhBinh Truong"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Portfolio</p>
      </Drawer>
      <BackTop>
        <div style={style}>⇧</div>
      </BackTop>
      <Tree className="svg-tree-b-r" />
    </>
  );
};

export default Portfolio;
