import { useProductsContext } from "../../context/productsContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Statistics",
    },
  },
};

const Stats = () => {
  const { products } = useProductsContext();

  const sortedByPrice = products.sort((a, b) => (a.price > b.price ? 1 : -1));

  const cheapestProducts = sortedByPrice.slice(0, 3);
  const mostExpensiveProducts = sortedByPrice.slice(
    sortedByPrice.length - 3,
    sortedByPrice.length
  );

  const uniqueLabels = [...cheapestProducts, ...mostExpensiveProducts].reduce<
    string[]
  >((acc, curr) => {
    const isLabelAlreadyPresent = acc.find((p) => p === curr.name);
    if (isLabelAlreadyPresent) {
      return acc;
    }

    return [...acc, curr.name];
  }, []);

  const data = {
    labels: uniqueLabels,
    datasets: [
      {
        label: "Cheapest",
        data: cheapestProducts.map((product) => product.price),
        backgroundColor: "white",
      },
      {
        label: "Most expensive",
        data: mostExpensiveProducts.map((product) => product.price),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default Stats;
