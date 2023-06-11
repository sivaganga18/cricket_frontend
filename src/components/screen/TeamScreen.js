import React, { useState } from "react";
import TeamLayout from "../screenCompoments/teams/TeamLayout";
import { message } from "antd";
import TeamModal from "../screenCompoments/teams/TeamModal";

export default function TeamScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const handleEdit = (record) => {
    // Handle edit action for the team record
    console.log("Editing team:", record);
  };

  const handleDelete = (record) => {
    // Handle delete action for the team record
    console.log("Deleting team:", record);
    message.success(`Deleted team: ${record.name}`);
  };

  const handleAddTeam = (values) => {
    console.log("Adding team:", values);
    // Perform necessary actions with the form values, such as saving to state or making API requests
    setModalVisible(false);
  };

  const handleCancelModal = () => {
    setModalVisible(false);
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  return (
    <>
      <TeamLayout
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleOpenModal={handleOpenModal}
      />
      <TeamModal
        visible={modalVisible}
        onCancel={handleCancelModal}
        onSave={handleAddTeam}
      />
    </>
  );
}
