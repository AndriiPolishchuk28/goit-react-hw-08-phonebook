import { Button, Form, Input, Col, Row } from 'antd';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { style } from './style';

export const Register = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const submitHandle = values => {
    dispatch(register(values));
    form.resetFields();
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Create new user</h2>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        form={form}
        onFinish={submitHandle}
        autoComplete="off"
        layout="vertical"
      >
        <Row>
          <Col span={8} offset={8}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your name',
                },
              ]}
            >
              <Input style={style.input} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={8}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email',
                },
              ]}
            >
              <Input style={style.input} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={8}>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password style={style.input} />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <Button style={style.btn} type="primary" htmlType="submit">
              Register
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
