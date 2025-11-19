import { Button, Form, Input } from "antd";
import type { FieldType } from "../Props";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const handleFinish = (values: FieldType) => {
    // create a simple local user record and go straight to dashboard
    localStorage.setItem("user", values.username);
    navigate("/login");
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-1/2 h-full bg-gray-100 flex items-center justify-center">
        <h2>Checking</h2>
      </div>
      <div className="w-1/2 flex justify-center items-center h-full">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ width: 400 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={handleFinish}
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
            <a href="/login" className="flex justify-content">
              Already have an account?
            </a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
