import { Bar, BarChart, CartesianGrid, Label, XAxis, YAxis } from 'recharts';
const LabelList = () => {

    const students = [
        { "id": 1, "name": "Alice", "bangla": 85, "english": 78 },
        { "id": 2, "name": "Bob", "bangla": 78, "english": 82 },
        { "id": 3, "name": "Charlie", "bangla": 92, "english": 90 },
        { "id": 4, "name": "David", "bangla": 65, "english": 70 },
        { "id": 5, "name": "Eve", "bangla": 70, "english": 75 },
        { "id": 6, "name": "Frank", "bangla": 88, "english": 85 },
        { "id": 7, "name": "Grace", "bangla": 75, "english": 80 },
        { "id": 8, "name": "Henry", "bangla": 80, "english": 78 },
        { "id": 9, "name": "Ivy", "bangla": 95, "english": 92 },
        { "id": 10, "name": "Jack", "bangla": 82, "english": 88 }
    ]

    return (
        <div>
            <BarChart width={700} height={300} data={students} margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray='3.3'></CartesianGrid>

                <XAxis dataKey={'name'}>
                    <Label value="Pages of my website" offset={0} position="insideBottom"></Label>
                </XAxis>

                <YAxis label={{ value: 'pv of page', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} ></YAxis>

                <Bar dataKey="english" fill="#8884d8">
                    <LabelList dataKey="name" position="insideTop" angle="45" />
                </Bar>

                <Bar dataKey="uv" fill="#82ca9d">
                    <LabelList dataKey="uv" position="top" />
                </Bar>
            </BarChart>
        </div>
    );
};

export default LabelList;