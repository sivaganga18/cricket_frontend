import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";

const TeamModal = ({ visible, onCancel, onSave }) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields().then((values) => {
      form.resetFields();
      onSave(values);
    });
  };

  return (
    <Modal
      visible={visible}
      title="Add Team"
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="save" type="primary" onClick={handleSave}>
          Save
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="teamName"
          label="Team Name"
          rules={[
            {
              required: true,
              message: "Please enter the team name",
            },
          ]}
        >
          <Input placeholder="Enter the team name" />
        </Form.Item>
        <Form.Item
          name="teamShortName"
          label="Team Short Name"
          rules={[
            {
              required: true,
              message: "Please enter the team short name",
            },
          ]}
        >
          <Input placeholder="Enter the team short name" />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
              message: "Please enter the team address",
            },
          ]}
        >
          <Input.TextArea placeholder="Enter the team address" rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TeamModal;
