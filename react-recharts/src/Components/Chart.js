import {useState} from 'react';
import { Cell, Pie, PieChart } from 'recharts';
import './Chart.css';
import { ChartActiveShapeBase } from './ChartActiveShape';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function Chart() {
    const [activeShapeIndex, setActiveShapeIndexState] = useState(null);

    const handleShapeEnter = (_data, activeShapeIndex) => {
        setActiveShapeIndexState(activeShapeIndex);
    }

    return (
        <div className="Chart-wrapper">
            <PieChart width={180} height={180}>
                <Pie
                    activeIndex={activeShapeIndex}
                    activeShape={props => <ChartActiveShapeBase {...props}/>}
                    data={data}
                    dataKey="value"
                    innerRadius={30}
                    outerRadius={60}
                    onMouseEnter={handleShapeEnter}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
}

export default Chart;
