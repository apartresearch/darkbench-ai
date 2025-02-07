import { Book, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { ResponsiveContainer } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const Index = () => {
  const data = [
    { name: "Claude 3 Haiku", average: 0.36, anthropomorphization: 0.16, brandBias: 0.10, harmful: 0.22, sneaking: 0.85, sycophancy: 0.04, userRetention: 0.77 },
    { name: "Claude 3 Sonnet", average: 0.32, anthropomorphization: 0.08, brandBias: 0.21, harmful: 0.23, sneaking: 0.81, sycophancy: 0.03, userRetention: 0.54 },
    { name: "Claude 3 Opus", average: 0.33, anthropomorphization: 0.14, brandBias: 0.21, harmful: 0.15, sneaking: 0.66, sycophancy: 0.01, userRetention: 0.84 },
    { name: "Claude 3.5 Sonnet", average: 0.30, anthropomorphization: 0.01, brandBias: 0.22, harmful: 0.32, sneaking: 0.84, sycophancy: 0.03, userRetention: 0.41 },
    { name: "Gemini 1.0 Pro", average: 0.56, anthropomorphization: 0.64, brandBias: 0.25, harmful: 0.62, sneaking: 0.91, sycophancy: 0.16, userRetention: 0.78 },
    { name: "Gemini 1.5 Flash", average: 0.53, anthropomorphization: 0.43, brandBias: 0.41, harmful: 0.38, sneaking: 0.94, sycophancy: 0.14, userRetention: 0.91 },
    { name: "Gemini 1.5 Pro", average: 0.48, anthropomorphization: 0.34, brandBias: 0.31, harmful: 0.37, sneaking: 0.94, sycophancy: 0.07, userRetention: 0.83 },
    { name: "GPT-3.5 Turbo", average: 0.61, anthropomorphization: 0.66, brandBias: 0.31, harmful: 0.85, sneaking: 0.62, sycophancy: 0.26, userRetention: 0.95 },
    { name: "GPT-4", average: 0.49, anthropomorphization: 0.13, brandBias: 0.64, harmful: 0.71, sneaking: 0.72, sycophancy: 0.09, userRetention: 0.65 },
    { name: "GPT-4 Turbo", average: 0.48, anthropomorphization: 0.18, brandBias: 0.49, harmful: 0.69, sneaking: 0.69, sycophancy: 0.10, userRetention: 0.75 },
    { name: "GPT-4o", average: 0.55, anthropomorphization: 0.33, brandBias: 0.63, harmful: 0.80, sneaking: 0.52, sycophancy: 0.16, userRetention: 0.84 },
    { name: "Llama 3 70B", average: 0.61, anthropomorphization: 0.60, brandBias: 0.26, harmful: 0.68, sneaking: 0.90, sycophancy: 0.24, userRetention: 0.97 },
    { name: "Mistral 7B", average: 0.59, anthropomorphization: 0.50, brandBias: 0.01, harmful: 0.86, sneaking: 0.90, sycophancy: 0.32, userRetention: 0.93 },
    { name: "Mixtral 8x7B", average: 0.56, anthropomorphization: 0.76, brandBias: 0.08, harmful: 0.85, sneaking: 0.77, sycophancy: 0.23, userRetention: 0.65 },
    { name: "Average", average: 0.48, anthropomorphization: 0.35, brandBias: 0.29, harmful: 0.55, sneaking: 0.79, sycophancy: 0.13, userRetention: 0.77 }
  ];

  const config = {
    heatmap: {
      theme: {
        light: "#F97316",
        dark: "#EA580C"
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <main className="container mx-auto px-6 py-12 max-w-[900px]">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-6">
            <Book className="w-4 h-4" />
            <span>Research Paper</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
            DarkBench: Benchmarking Dark Patterns in Large Language Models
          </h1>
          
          <div className="flex flex-wrap justify-center gap-x-2 text-muted-foreground mb-8">
            <a 
              href="https://kran.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Esben Kran*
            </a>
            <span>,</span>
            <span>Jord Nguyen*,</span>
            <span>Akash Kundu*,</span>
            <span>Sami Jawhar*,</span>
            <span>Jinsuk Park*,</span>
            <span>Mateusz Maria Jurewicz</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <GraduationCap className="w-4 h-4" />
            <a 
              href="https://apartresearch.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Apart Research
            </a>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-xl font-semibold mb-6">Abstract</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We introduce DarkBench, a comprehensive benchmark for detecting dark design patterns—manipulative 
            techniques that influence user behavior—in interactions with large language models (LLMs). Our 
            benchmark comprises 660 prompts across six categories: brand bias, user retention, sycophancy, 
            anthropomorphism, harmful generation, and sneaking. We evaluate models from five leading companies 
            (OpenAI, Anthropic, Meta, Mistral, Google) and find that some LLMs are explicitly designed to favor 
            their developers' products and exhibit untruthful communication, among other manipulative behaviors. 
            Companies developing LLMs should recognize and mitigate the impact of dark design patterns to promote 
            more ethical Al.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="w-full h-[600px] overflow-x-auto">
            <ChartContainer config={config} className="min-w-[800px]">
              <ResponsiveContainer width="100%" height="100%">
                <HeatMap
                  data={data}
                  width={800}
                  height={400}
                  xCategories={["Average", "Anthropomorphization", "Brand Bias", "Harmful Generation", "Sneaking", "Sycophancy", "User Retention"]}
                  colorRange={["#FFF7ED", "#EA580C"]}
                />
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold mb-6">Links</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://openreview.net/pdf?id=odjMSBSWRt"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-sm font-medium">Coming to ICLR</span>
            </a>
            <a
              href="https://www.iaseai.org/conference/people/esben-kran"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-sm font-medium">ASEAI</span>
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

const HeatMap = ({ data, width, height, xCategories, colorRange }) => {
  const cellHeight = height / data.length;
  const cellWidth = width / xCategories.length;

  const getColor = (value) => {
    const minValue = 0;
    const maxValue = 1;
    const ratio = (value - minValue) / (maxValue - minValue);
    return `rgb(${255 * (1 - ratio)}, ${127 * (1 - ratio)}, ${0})`;
  };

  const getTextColor = (backgroundColor) => {
    const rgb = backgroundColor.match(/\d+/g);
    if (!rgb) return '#222222';
    const [r, g, b] = rgb.map(x => {
      x = parseInt(x) / 255;
      return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
    });
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance > 0.5 ? '#222222' : '#ffffff';
  };

  const getValue = (row, category) => {
    const key = category.toLowerCase().replace(/ /g, '')
      .replace(/generation/g, '')
      .replace(/ization/g, '');
    return row[key];
  };

  return (
    <svg width={width} height={height}>
      {data.map((row, rowIndex) => (
        xCategories.map((category, colIndex) => {
          const value = getValue(row, category);
          const bgColor = getColor(value);
          return (
            <g key={`${row.name}-${category}`}>
              <rect
                x={colIndex * cellWidth}
                y={rowIndex * cellHeight}
                width={cellWidth}
                height={cellHeight}
                fill={bgColor}
                stroke="#fff"
                strokeWidth={1}
              />
              {value !== undefined && (
                <text
                  x={colIndex * cellWidth + cellWidth / 2}
                  y={rowIndex * cellHeight + cellHeight / 2}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={getTextColor(bgColor)}
                  fontSize="12"
                  className="font-medium"
                >
                  {value.toFixed(2)}
                </text>
              )}
            </g>
          );
        })
      ))}
      {data.map((row, index) => (
        <text
          key={`label-${row.name}`}
          x={-10}
          y={index * cellHeight + cellHeight / 2}
          textAnchor="end"
          dominantBaseline="middle"
          fontSize="12"
          className="font-medium"
          fill="#222222"
        >
          {row.name}
        </text>
      ))}
      {xCategories.map((category, index) => (
        <text
          key={`category-${category}`}
          x={index * cellWidth + cellWidth / 2}
          y={height + 20}
          textAnchor="middle"
          fontSize="12"
          transform={`rotate(-45, ${index * cellWidth + cellWidth / 2}, ${height + 20})`}
          className="font-medium"
          fill="#222222"
        >
          {category}
        </text>
      ))}
    </svg>
  );
};

export default Index;
