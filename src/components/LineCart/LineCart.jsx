import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineCart = () => {

    
      const students = [
        {"id": 1, "name": "Alice", "bangla": 85, "english": 78},
        {"id": 2, "name": "Bob", "bangla": 78, "english": 82},
        {"id": 3, "name": "Charlie", "bangla": 92, "english": 90},
        {"id": 4, "name": "David", "bangla": 65, "english": 70},
        {"id": 5, "name": "Eve", "bangla": 70, "english": 75},
        {"id": 6, "name": "Frank", "bangla": 88, "english": 85},
        {"id": 7, "name": "Grace", "bangla": 75, "english": 80},
        {"id": 8, "name": "Henry", "bangla": 80, "english": 78},
        {"id": 9, "name": "Ivy", "bangla": 95, "english": 92},
        {"id": 10, "name": "Jack", "bangla": 82, "english": 88}
        ]
      
      

    return (
        <div>
            
            <LChart width={600} height={400} data={students}>

            <XAxis dataKey={"name"}></XAxis>
            <YAxis></YAxis>

               <Line type="monotone" dataKey="bangla" stroke="red" ></Line>
               <Line type={'monotone'} dataKey={'english'}></Line>
            </LChart>
            
        </div>
    );
};

export default LineCart;