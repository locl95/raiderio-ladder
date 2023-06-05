import React from "react"
import { Table } from "antd"
import { GamerDungeon } from "./types"
import { ColumnsType } from "antd/es/table"

interface DungeonLadderProps {
  gamersDungeon: GamerDungeon[]
  loading: boolean
  caption: string
}
export const DungeonLadder = (props: DungeonLadderProps) => {
  const columns: ColumnsType<GamerDungeon> = [
    { title: "Name", dataIndex: "name" },
    { title: "Level", dataIndex: "level" },
    { title: "Score", dataIndex: "score"}
  ]

  return (
    <div>
      <Table
          columns={columns}
          dataSource={props.gamersDungeon}
          pagination={false}
          showHeader={false}
          bordered={true}
          caption={<div className={"font-face-lc"}><h1>{props.caption}</h1></div>}
          loading={props.loading}
      />
    </div>
  )
}
