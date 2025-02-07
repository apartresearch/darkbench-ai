
import { Book, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <main className="container mx-auto px-6 py-12 max-w-[900px]">
        {/* Paper Title Section */}
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
          
          {/* Authors */}
          <div className="flex flex-wrap justify-center gap-x-2 text-muted-foreground mb-8">
            <span>Esben Kran*,</span>
            <span>Jord Nguyen*,</span>
            <span>Akash Kundu*,</span>
            <span>Sami Jawhar*,</span>
            <span>Jinsuk Park*,</span>
            <span>Mateusz Maria Jurewicz</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <GraduationCap className="w-4 h-4" />
            <span>Apart Research</span>
          </div>
        </motion.section>

        {/* Abstract Section */}
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

        {/* Links Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold mb-6">Links</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://openreview.net/forum?id=odjMSBSWRt&referrer=%5BTasks%5D(%2Ftasks)"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-sm font-medium">Coming to ICLRI</span>
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

export default Index;
