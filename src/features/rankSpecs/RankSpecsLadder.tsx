import React from "react"
import {Table} from "antd"
import {GamerRankSpec} from "./types"
import {ColumnsType} from "antd/es/table"
import Comparable from "../comparables/Comparable";

interface RankLadderProps {
    gamerRank: GamerRankSpec[]
    loading: boolean
    caption: string
}

export const RankSpecsLadder = (props: RankLadderProps) => {
    const columns: ColumnsType<GamerRankSpec> = [
        {title: "Name", dataIndex: "name"},
        {title: "Spec", dataIndex: "spec"},
        {title: "Score", dataIndex: "score", sorter: (a, b) => a.score - b.score},
        {
            title: "World",
            dataIndex: "world",
            sorter: (a, b) => a.world - b.world,
            responsive: ["sm"],
            render: (text, record) => <Comparable greenWhenUp={false} number={record.world}
                                                  difference={record.worldDifference}/>
        },
        {
            title: "Region",
            dataIndex: "region",
            sorter: (a, b) => a.region - b.region,
            responsive: ["sm"],
            render: (text, record) => <Comparable greenWhenUp={false} number={record.region}
                                                  difference={record.regionDifference}/>
        },
        {
            title: "Realm",
            dataIndex: "realm",
            sorter: (a, b) => a.realm - b.realm,
            responsive: ["sm"],
            render: (text, record) => <Comparable greenWhenUp={false} number={record.realm}
                                                  difference={record.realmDifference}/>
        }
    ]

    return (
        <div>
            <Table
                columns={columns}
                dataSource={props.gamerRank}
                pagination={false}
                showHeader={true}
                bordered={true}
                caption={<div className={"font-face-lc"}><h1>{props.caption}</h1></div>}
                loading={props.loading}
            />
        </div>
    )
}
