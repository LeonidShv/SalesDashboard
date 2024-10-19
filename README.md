# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup
node: v20.11.0

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

1. Dashboard Overview (KPIs):
- Display the following KPIs in cards at the top of the dashboard: - Total sales
- Number of orders
- Top-performing product
- Sales growth percentage
- Each KPI card should be styled with Tailwind CSS and responsive.

RESULT:
cards are completed, there is a minor moment for improvements (small margins). Data are mocked in very simle way. We can calculate them from salesListMockData. But let's imagine, this work calculated in the server

2. Sales Charts:
- Implement two key charts using a library like Chart.js or ApexCharts: - Sales Over Time: A line chart showing total sales by month or week. - Product Performance: A bar chart displaying top products by sales.

RESULT:
implemented only one chart, the second chart can be added by example. Data are mocked in a very simle way.

3. Filtering:
- Allow the user to filter the dashboard data by:
- Date range (e.g., last 7 days, last month, custom date range).
- Sales region (e.g., North America, Europe, Asia).
- Filtering should update both the KPIs and the charts dynamically.

RESULT:
implemented only UI part, just need more time for that.

4. Sales Breakdown Table:
- Display a detailed table of sales data beneath the charts.
- Include columns such as: Order ID, Product Name, Quantity Sold, Total Price, and Region.
- Provide pagination or lazy loading for the table if the dataset is large.

RESULT:
Fully implemented step with pagination and mock data.

5. Responsive Design:
- The layout should be fully responsive using Tailwind CSS.
- Ensure the dashboard adjusts seamlessly for mobile, tablet, and desktop screens.

RESULT:
The layout is responsive, but not ideally.

Bonus (Optional):
1. Mock Data: Simulate sales data using mock data or an external data source.

RESULT:
Soma data was mocked.

2. State Management: Use Vuex or Vue's Composition API to manage the state for filtering and data visualization.

RESULT:
I used Composition API approach and pinia as a mediator between components and mock data


I spent only 7 hours for this test task. I have many ideas for improvements, but I need to spend much more time for that. I will wait for the feedback and thanks for your time!
