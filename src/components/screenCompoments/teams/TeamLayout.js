import React from "react";
import { Table, Button, Popconfirm, message } from "antd";

export default function TeamLayout({
  handleDelete,
  handleEdit,
  handleOpenModal,
}) {
  const data = [
    { id: 1, name: "Team A", shortName: "TA" },
    { id: 2, name: "Team B", shortName: "TB" },
    { id: 3, name: "Team C", shortName: "TC" },
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Short Name",
      dataIndex: "shortName",
      key: "shortName",
    },
    {
      title: "Actions",
      key: "actions",
      align: "right",
      render: (_, record) => (
        <span>
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this team?"
            onConfirm={() => handleDelete(record)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger" style={{ marginLeft: 8 }}>
              Delete
            </Button>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <>
      <Button
        type="primary"
        style={{
          alignItems: "flex-end",
          padding: 16,
          height: 50,
          width: 200,
          marginBottom: 16,
          alignSelf: "flex-end",
          right: 0,
        }}
        onClick={handleOpenModal}
      >
        Add Team
      </Button>
      <Table dataSource={data} columns={columns} />
    </>
  );
}
