import React from 'react';
import {Sector} from 'recharts';

/**
 * Базовая структура активного шейпа.
 */
export const ChartActiveShapeBase = (shapeProps) => {
    const {cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, stroke, strokeWidth, strokeOpacity} = shapeProps;
    const activeSectorLabelWidth = 4;
    const activeSectorLabelPadding = 6;
    const activeSectorLabelInnerRadius = outerRadius + 6;
    const activeSectorLabelOuterRadius = outerRadius + (activeSectorLabelPadding + activeSectorLabelWidth);
    const activeSectorLabelStrokeWidth = activeSectorLabelPadding * 2;

    return (
        <g>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeOpacity={strokeOpacity}
            />
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={activeSectorLabelInnerRadius}
                outerRadius={activeSectorLabelOuterRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
                stroke="transparent"
                strokeWidth={activeSectorLabelStrokeWidth}
            />
        </g>
    );
};
