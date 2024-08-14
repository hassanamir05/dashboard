import { PieChart } from '@mui/x-charts/PieChart';

const PiChartComponent = () => {

    return <PieChart
        series={[
            {
                data: [
                    { id: 'Investment', value: 20 },
                    { id: 'Entertainment', value: 30 },
                    { id: 'Bill Expense', value: 15 },
                    { id: 'Others', value: 35 },
                ],
                innerRadius: 50,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: 0,
                endAngle: 360,
                cx: '75%',
                cy: '50%',
            }
        ]}
    />
}

export default PiChartComponent;