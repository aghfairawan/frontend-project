import { Table } from "antd"
import { ColumnsType } from "antd/es/table";
import { category } from "../../types"

interface Props {
    data: category[];
    columns: ColumnsType<category>;
}

const CategoryList = ({ data, columns} : Props) => {

    return (
        <Table columns={columns} dataSource={data} />
    )
}

export default CategoryList