import { Bar, Line, Pie, Doughnut, PolarArea, Radar, Scatter, Bubble } from "react-chartjs-2";

export default function CustomChart({ chartType, data, width, height, options={}}) {

    const defaultOptions = {
        responsive: true,
        maintainAspectRatio: true
    }

    const mergedOptions = {...defaultOptions, ...options}
    
    const charts = {
        bar: Bar,
        line: Line,
        pie: Pie,
        doughnut: Doughnut,
        polararea: PolarArea,
        radar: Radar,
        scatter: Scatter,
        bubble: Bubble
    }

    const ChartComponent = charts[chartType];
    
    if (!ChartComponent) {
        return <div>Chart Error: {chartType}</div>
    }

    return (
        <div style={{ width, height}}>
            <ChartComponent data={data} options={mergedOptions}/>
        </div>
    );
}