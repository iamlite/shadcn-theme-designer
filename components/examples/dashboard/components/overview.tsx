'use client'

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { useColorContext } from '@/contexts/color-context'
import { hslToString } from '@/lib/color-utils'
import { Bar, BarChart, CartesianGrid, Rectangle, ResponsiveContainer, XAxis } from 'recharts'

const generateRandomAmount = () => Math.floor(Math.random() * 1000) + 100

export function Overview() {
  const { lightColors, darkColors, theme } = useColorContext()
  const colors = theme === 'dark' ? darkColors : lightColors
  const getColor = (index: number) => {
    const colorKey = `chart-${(index % 5) + 1}` as keyof typeof colors
    const hslValue = hslToString(colors[colorKey])
    return hslValue
  }

  const chartData = [
    { category: 'housing', amount: generateRandomAmount(), fill: getColor(0) },
    { category: 'food', amount: generateRandomAmount(), fill: getColor(1) },
    { category: 'transport', amount: generateRandomAmount(), fill: getColor(2) },
    { category: 'utilities', amount: generateRandomAmount(), fill: getColor(3) },
    { category: 'healthcare', amount: generateRandomAmount(), fill: getColor(4) },
    { category: 'entertainment', amount: generateRandomAmount(), fill: getColor(5) },
    { category: 'clothing', amount: generateRandomAmount(), fill: getColor(6) },
    { category: 'education', amount: generateRandomAmount(), fill: getColor(7) },
    { category: 'savings', amount: generateRandomAmount(), fill: getColor(8) },
    { category: 'insurance', amount: generateRandomAmount(), fill: getColor(9) },
    { category: 'debt', amount: generateRandomAmount(), fill: getColor(10) },
    { category: 'gifts', amount: generateRandomAmount(), fill: getColor(11) }
  ]

  const chartConfig = {
    amount: {
      label: 'Amount ($)'
    },
    housing: { label: 'Housing', color: getColor(0) },
    food: { label: 'Food', color: getColor(1) },
    transport: { label: 'Transport', color: getColor(2) },
    utilities: { label: 'Utilities', color: getColor(3) },
    healthcare: { label: 'Healthcare', color: getColor(4) },
    entertainment: { label: 'Entertainment', color: getColor(5) },
    clothing: { label: 'Clothing', color: getColor(6) },
    education: { label: 'Education', color: getColor(7) },
    savings: { label: 'Savings', color: getColor(8) },
    insurance: { label: 'Insurance', color: getColor(9) },
    debt: { label: 'Debt', color: getColor(10) },
    gifts: { label: 'Gifts', color: getColor(11) }
  } satisfies ChartConfig

  return (
    <ResponsiveContainer
      className='bg-background shadow-md rounded-md'
      width='100%'
      height={350}>
      <ChartContainer config={chartConfig}>
        <BarChart
          accessibilityLayer
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey='category'
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => chartConfig[value as keyof typeof chartConfig]?.label}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar
            dataKey='amount'
            strokeWidth={2}
            radius={8}
            activeBar={({ ...props }) => {
              return (
                <Rectangle
                  {...props}
                  fillOpacity={0.8}
                  stroke={props.payload.fill}
                  strokeDasharray={4}
                  strokeDashoffset={4}
                />
              )
            }}
          />
        </BarChart>
      </ChartContainer>
    </ResponsiveContainer>
  )
}
