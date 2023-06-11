import React from "react";
import { Statistic, Row, Col, Card } from "antd";

export default function DashboardLayout({
  totalTeams,
  totalPlayers,
  soldPlayers,
  unsoldPlayers,
}) {
  return (
    <div className="dashboard-container">
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>
            <Statistic title="Total Teams" value={totalTeams} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Total Players" value={totalPlayers} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Sold Players" value={soldPlayers} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Unsold Players" value={unsoldPlayers} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
