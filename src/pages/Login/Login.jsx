import { Button, Form, Input, Row, Col } from 'antd';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { style } from './style';

export const Login = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const submitHandle = values => {
    dispatch(login(values));
    form.resetFields();
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
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
              Login
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
