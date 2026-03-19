import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { 
  Cpu, 
  Target, 
  BarChart3, 
  Globe, 
  Zap, 
  Mail, 
  Github, 
  Linkedin, 
  ArrowRight,
  ChevronRight,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Search,
  CheckCircle2,
  TrendingUp,
  Users,
  Award,
  Play,
  Image,
  X
} from 'lucide-react';
import tiktokMarketRankingDecImg from './assets/tiktok-market-ranking-dec.jpg';
import tiktokMarketRankingOctImg from './assets/tiktok-market-ranking-oct.png';
import tiktokSalesAnalysisImg from './assets/tiktok-sales-analysis.png';
import tiktokSalesTrendImg from './assets/tiktok-sales-trend.png';
import dualInputInterfaceImg from './assets/Dual-Input Interface (Doc + Voice).png';
import mockInterviewAgentHomeImg from './assets/mock-interview-agent-home.png';
import resumeAiPmImg from './assets/resume-ai-pm.png';
import resumeEcommerceOpsImg from './assets/resume-ecommerce-ops.png';
import xhsContentListImg from './assets/xhs-content-list.jpg';
import xhsFanDataImg from './assets/xhs-fan-data.jpg';
import xhsProfileImg from './assets/xhs-profile.jpg';
import xhsTopNotesImg from './assets/xhs-top-notes.jpg';

const tiktokGrowthData = [
  { name: 'Week 1', sales: 400, profit: 120 },
  { name: 'Week 2', sales: 300, profit: 90 },
  { name: 'Week 3', sales: 200, profit: 60 },
  { name: 'Week 4', sales: 150, profit: 40 }, // The drop
  { name: 'Week 5', sales: 450, profit: 140 }, // Recovery
  { name: 'Week 6', sales: 800, profit: 250 }, // Peak
  { name: 'Week 7', sales: 950, profit: 310 },
];

const conversionData = [
  { name: 'Impressions', value: 100000, fill: '#A09C8F' },
  { name: 'Clicks', value: 12000, fill: '#8E8A7D' },
  { name: 'Add to Cart', value: 2400, fill: '#7C786B' },
  { name: 'Purchases', value: 850, fill: '#0f0f0f' },
];

const efficiencyData = [
  { name: 'Traditional', value: 1, color: '#A09C8F' },
  { name: 'AI-Powered', value: 4, color: '#0f0f0f' },
];

const jdDemoVideoUrl = 'https://b23.tv/FTxZ9oZ';

const TypewriterText = ({ text, delay = 50, onComplete }: { text: string; delay?: number; onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [index, text, delay, onComplete]);

  return (
    <span className="font-mono whitespace-pre-wrap">
      {displayedText}
      <span className="animate-pulse inline-block w-2 h-4 bg-black/40 ml-1"></span>
    </span>
  );
};

const Nav = () => (
  <nav className="nav-bar">
    <a href="#about" className="nav-link">ABOUT</a>
    <a href="#ai" className="nav-link">AI</a>
    <a href="#product" className="nav-link">PRODUCT</a>
    <a href="#data" className="nav-link">DATA</a>
    <a href="#contact" className="nav-link">CONTACT</a>
  </nav>
);

const SectionHeading = ({ icon: Icon, title, subtitle }: { icon: any, title: string, subtitle: string }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-black text-white rounded-lg">
        <Icon size={20} />
      </div>
      <span className="retro-tag">{subtitle}</span>
    </div>
    <h2 className="section-title">{title}</h2>
  </div>
);

export default function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsBooting(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F1E6] text-[#0f0f0f] selection:bg-black selection:text-white">
      <AnimatePresence>
        {isBooting && (
          <motion.div 
            key="boot"
            className="glitch-overlay"
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <div className="font-mono text-green-500 text-xl flex flex-col items-center gap-4">
              <div className="animate-pulse">LOADING FIG_OS v1.0.4...</div>
              <div className="text-xs opacity-50">
                [SYSTEM] INITIALIZING NEURAL_ENGINE...<br/>
                [SYSTEM] LOADING ASSETS: BEIGE_SHELL.OBJ<br/>
                [SYSTEM] CONNECTING TO GEMINI_API...
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 bg-white/10 rounded-full"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {!isBooting && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Nav />

          {/* Hero Section */}
          <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-[#F4F1E6]">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <span className="retro-tag">👋 ABOUT ME</span>
                  <h1 className="text-6xl md:text-7xl font-medium tracking-tight leading-[0.9]">
                    钟家婷<br/>
                    <span className="italic font-serif text-4xl md:text-5xl opacity-60">想成为AI产品经理的运营人</span>
                  </h1>
                </div>

                <div className="content-text text-xl max-w-xl">
                  22岁，信管专业，连续三年专业第一，国家奖学金。<br/>
                  有TikTok跨境电商全链路运营实战经验，也能自己用AI从0到1做出产品。
                </div>

                <div className="p-6 bg-[#E0DCCF]/40 border border-black/5 rounded-2xl backdrop-blur-sm italic font-serif">
                  "我相信AI产品经理最重要的能力不是写代码，而是「发现需求 → 理解技术边界 → 用最低成本验证 → 用数据迭代」。"
                </div>

                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-black text-white rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
                    View Projects <ArrowRight size={18} />
                  </button>
                  <div className="flex items-center gap-4 px-4">
                    <Github className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
                    <Linkedin className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ scale: 0.8, opacity: 0, rotateY: 20 }}
                animate={{ scale: 0.9, opacity: 1, rotateY: -10 }}
                transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                className="relative flex justify-center"
              >
                <div className="scene-container scale-75 md:scale-90 lg:scale-100">
                  <div className="pc-body">
                    <div className="pc-top">
                      <div className="screen-bezel">
                        <div className="screen-glass">
                          <div className="screen-content">
                            <div className="p-4 space-y-3">
                              <div className="flex justify-between items-center border-b border-green-500/30 pb-1">
                                <span className="text-[10px]">FigOS 1.0</span>
                                <span className="text-[10px]">10:42 AM</span>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  <span className="text-xs">Untitled.txt</span>
                                </div>
                                <div className="text-sm leading-relaxed opacity-80 h-32">
                                  <TypewriterText text="Hello! I'm Jayla. I build AI-powered products that solve real problems. Currently exploring the boundaries of LLMs and human-AI interaction... [SYSTEM] ACCESSING PORTFOLIO_DATA... [SUCCESS] LOADING ABILITIES 1-5..." />
                                </div>
                              </div>
                              <div className="grid grid-cols-4 gap-2 pt-2">
                                {[1,2,3,4].map(i => (
                                  <div key={i} className="aspect-square border border-green-500/20 flex items-center justify-center">
                                    <div className="w-1/2 h-1/2 bg-green-500/10"></div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pc-base">
                      <div className="keyboard">
                        <div className="key-row">
                          {[...Array(10)].map((_, i) => <div key={i} className="key"></div>)}
                        </div>
                        <div className="key-row">
                          {[...Array(9)].map((_, i) => <div key={i} className="key"></div>)}
                        </div>
                        <div className="key-row">
                          <div className="key spacebar"></div>
                        </div>
                      </div>
                      
                      {/* Paper Output Slot */}
                      <div className="paper-tray">
                        <motion.div 
                          initial={{ y: 0 }}
                          animate={{ y: 40 }}
                          transition={{ delay: 2, duration: 2, ease: "easeOut" }}
                          className="paper-sheet"
                        >
                          <div className="p-4 text-[10px] leading-tight text-black/60 font-mono">
                            <div className="border-b border-black/10 mb-2 pb-1 flex justify-between">
                              <span>LOG_REPORT_01</span>
                              <span>2026.03.15</span>
                            </div>
                            <TypewriterText 
                              text="JAYLA'S PORTFOLIO STATUS: ACTIVE
CORE COMPETENCIES:
- AI PRODUCT STRATEGY (MVP -> ITERATION)
- TIKTOK ECOSYSTEM (選品 -> 運營 -> 數據)
- PROMPT ENGINEERING (FEW-SHOT -> COT)
- DATA-DRIVEN DECISION MAKING
- CROSS-CULTURAL COMMUNICATION
----------------------------
ACADEMIC RECORD:
- GPA: 3.74 / 4.0
- RANK: 1 / 120+
- SCHOLARSHIP: NATIONAL AWARD
----------------------------
CURRENT MISSION: BUILDING 
THE NEXT GENERATION OF 
AI-NATIVE APPLICATIONS." 
                              delay={20}
                            />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full"></div>
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full"></div>
              </motion.div>
            </div>
          </section>

          {/* Ability 1: AI Tools */}
          <section id="ai" className="py-32 px-6 bg-[#E0DCCF]/10">
            <div className="max-w-7xl mx-auto">
              <SectionHeading 
                icon={Cpu} 
                title="AI工具应用与Prompt Engineering" 
                subtitle="ABILITY 01" 
              />
              
              <div className="bento-grid">
                <div className="bento-card col-span-12 lg:col-span-8 bg-white/60">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-medium">JD智能简历工具 —— 模型选型与工作流设计</h3>
                    <span className="case-study-badge">CASE STUDY A</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-mono text-xs uppercase tracking-wider opacity-50">📌 技术选型决策</h4>
                      <div className="content-text text-sm space-y-3">
                        <p>我选择了Gemini API，基于以下判断：</p>
                        <p><strong>1.【功能需求】</strong> 产品有语音面试环节，需要实时语音对话能力<br/>→ 调研时只有Gemini支持实时语音交互</p>
                        <p><strong>2.【体验需求】</strong> 用户会在语音面试中一句一句地讲述经历，可能持续较长时间<br/>→ 需要足够长的上下文窗口，防止模型遗忘前面的内容<br/>→ Gemini的上下文窗口在同类模型中较长</p>
                        <p><strong>3.【开发效率】</strong> 使用Google AI Studio进行开发<br/>→ 同生态调用Gemini API更便捷，减少集成成本</p>
                        <p className="italic opacity-60 text-xs">💡 这不是"随便选了一个"，而是基于「功能适配 × 用户体验 × 开发效率」三个维度的综合判断。</p>
                      </div>
                      
                      <div className="aspect-video bg-black/5 rounded-xl overflow-hidden border border-black/5 relative group">
                        <img 
                          src={dualInputInterfaceImg} 
                          alt="AI Workflow Diagram" 
                          className="w-full h-full object-contain bg-white/50 p-3 group-hover:opacity-100 transition-opacity"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                          <span className="text-white text-xs font-mono bg-black/50 px-3 py-1 rounded-full">Dual-Input Resume Flow</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-mono text-xs uppercase tracking-wider opacity-50">📌 多步骤AI工作流设计</h4>
                      <div className="relative pl-4 border-l-2 border-black/10 space-y-4 text-sm">
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-black rounded-full mt-1.5"></div>
                          <div>
                            <p className="font-medium">用户上传简历</p>
                            <p className="text-[10px] opacity-50">文本输入作为初始上下文</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-black rounded-full mt-1.5"></div>
                          <div>
                            <p className="font-medium">语音面试环节</p>
                            <p className="text-[10px] opacity-50">Gemini实时语音对话，扮演面试官主动采访，挖掘简历细节，引导量化成果</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-black rounded-full mt-1.5"></div>
                          <div>
                            <p className="font-medium">AI整合</p>
                            <p className="text-[10px] opacity-50">语音面试内容 + 原始简历 → 合并生成丰富版简历</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-black rounded-full mt-1.5"></div>
                          <div>
                            <p className="font-medium">JD匹配</p>
                            <p className="text-[10px] opacity-50">上传目标JD → AI分析匹配度 → 输出针对性修改建议</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-orange-50/50 rounded-xl border border-orange-100 text-[11px] leading-relaxed">
                        <p className="font-medium text-orange-800 mb-1">解决核心问题：</p>
                        <p className="opacity-70">传统AI修改简历会捏造经历 → 面试时说不出来 → 非常尴尬。我的方案通过对话式挖掘，确保简历上的每一条都来自用户真实经历。</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bento-card col-span-12 lg:col-span-4 bg-white/80 border-black/5">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-medium flex items-center gap-2">
                      <Sparkles size={18} className="text-orange-500" /> AI塔罗牌占卜 —— Prompt策略设计
                    </h3>
                    <span className="case-study-badge">CASE STUDY B</span>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-mono text-[10px] uppercase tracking-wider opacity-50">📌 Prompt设计思路</h4>
                      <p className="text-xs leading-relaxed">
                        <strong>竞品问题：</strong> 市面上的AI塔罗牌回答模棱两可，"可能是A，也可能是B"，看完等于没看。
                      </p>
                    </div>
                    <div className="p-4 bg-[#F4F1E6] rounded-xl text-xs border border-black/5 space-y-2">
                      <p className="font-medium">我的策略：</p>
                      <ul className="space-y-1 opacity-70">
                        <li>• 参考了一位真人占卜师的回答风格</li>
                        <li>• 核心指令：必须给出确切结论，不允许模棱两可</li>
                        <li>• 语气要求：一针见血、极度精简</li>
                        <li>• 设计原则：宁可答案不100%准确，也要给用户一个确定的方向</li>
                      </ul>
                    </div>
                    <div className="pt-2">
                      <p className="text-[11px] font-serif italic opacity-60">
                        <strong>底层逻辑：</strong> 在注意力稀缺的时代，用户要的不是一篇长文分析，而是一个能让他做决定的确切回答。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bento-card col-span-12 lg:col-span-4 bg-white/60">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-medium flex items-center gap-2">
                      <TrendingUp size={18} /> TikTok运营中的AI提效 —— Prompt迭代
                    </h3>
                    <span className="case-study-badge">CASE STUDY C</span>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h4 className="font-mono text-[10px] uppercase tracking-wider opacity-50">📌 用Veo3提升UGC视频产能</h4>
                      <p className="text-xs opacity-70"><strong>背景：</strong> UGC带货视频日产量仅1条，内容制作效率瓶颈明显</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-black/5 rounded-xl text-[10px] space-y-1">
                        <p className="font-medium">我的做法</p>
                        <ul className="opacity-60 space-y-0.5">
                          <li>• 引入Veo3生成视频素材</li>
                          <li>• 持续迭代Prompt策略</li>
                          <li>• 结合剪映二创优化</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-emerald-50/50 rounded-xl text-[10px] space-y-1 border border-emerald-100">
                        <p className="font-medium text-emerald-800">结果</p>
                        <ul className="text-emerald-700 space-y-0.5">
                          <li>• 日产 1条 → 4条 (↑300%)</li>
                          <li>• 点击率提升 400%</li>
                          <li>• 1个月粉丝从0破千</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bento-card col-span-12 lg:col-span-8 bg-[#F4F1E6]">
                  <h3 className="text-xl font-medium mb-6">我的AI技术认知地图</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 font-bold">✅ 已实操</span>
                      <ul className="text-xs space-y-2 opacity-80">
                        <li>• 模型API调用（Gemini）</li>
                        <li>• Prompt Engineering（结构化指令、角色设定、输出约束）</li>
                        <li>• AI工作流设计（多步骤串联）</li>
                        <li>• AI视频工具（Veo3 + 剪映二创）</li>
                        <li>• 工作流平台（N8N，搭建过基础节点）</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-blue-600 font-bold">✅ 已理解概念</span>
                      <ul className="text-xs space-y-2 opacity-80">
                        <li>• <strong>RAG（检索增强生成）：</strong> 理解为外置知识库，增强模型在特定领域的判断力，减少幻觉</li>
                        <li>• 模型幻觉及应对策略</li>
                        <li>• 模型选型维度（功能支持/上下文长度/成本/生态便捷性）</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-orange-600 font-bold">📚 正在深入学习</span>
                      <ul className="text-xs space-y-2 opacity-80">
                        <li>• Dify / Coze平台实操</li>
                        <li>• 更完整的Agent搭建经验</li>
                        <li>• RAG的工程化落地（chunking/召回优化）</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ability 2: Product Insight */}
          <section id="product" className="py-32 px-6 bg-[#F4F1E6]">
            <div className="max-w-7xl mx-auto">
              <SectionHeading 
                icon={Target} 
                title="需求洞察与产品落地" 
                subtitle="ABILITY 02" 
              />

              <div className="bento-grid">
                <div className="bento-card col-span-12 lg:col-span-7 bg-white/60">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-medium">JD简历工具 —— 从个人痛点到产品</h3>
                    <span className="case-study-badge">CASE STUDY A</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h4 className="font-mono text-xs uppercase tracking-wider opacity-50">📌 需求洞察链</h4>
                      <div className="space-y-4">
                        {[
                          { step: "第一步", title: "自身痛点", desc: "应届生/转行人群经历与JD匹配度低，手动修改成本极高。" },
                          { step: "第二步", title: "市场验证", desc: "小红书大量类似痛点帖子确认了需求的普遍性。" },
                          { step: "第三步", title: "用户分群", desc: "识别出应届生与转行人群的共同痛点：经历与JD间的‘翻译成本’。" },
                          { step: "第四步", title: "竞品分析", desc: "传统AI易捏造经历，导致面试尴尬。简历核心是‘自圆其说’。" },
                          { step: "第五步", title: "差异化方案", desc: "对话式挖掘真实经历 + JD匹配 + 引导量化，确保真实性。" }
                        ].map((item, i) => (
                          <div key={i} className="flex gap-3 items-start">
                            <span className="text-[10px] font-mono bg-black/5 px-1.5 py-0.5 rounded mt-0.5 whitespace-nowrap">{item.step}</span>
                            <div>
                              <h5 className="text-xs font-bold">{item.title}</h5>
                              <p className="text-[10px] opacity-60 leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h4 className="font-mono text-xs uppercase tracking-wider opacity-50">📌 产品迭代记录 (v1.0 → v2.0)</h4>
                      <div className="space-y-4">
                        <div className="p-4 bg-red-50/30 rounded-xl border border-red-100/50">
                        <div className="p-4 bg-blue-50/30 rounded-xl border border-blue-100/50">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] font-bold text-red-700">【Bug修复】</span>
                          </div>
                          <p className="text-[10px] leading-relaxed">
                            <strong>问题：</strong>Gemini无时间观念，误判未来时间。<br/>
                            <strong>解决：</strong>传入当前时间数据作为系统提示词锚点。
                          </p>
                        </div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] font-bold text-blue-700">体验优化</span>
                          </div>
                          <p className="text-[10px] leading-relaxed">
                            <strong>问题：</strong>AI 追问过长，容易让用户产生疲劳感。<br/>
                            <strong>优化：</strong>先上传简历作为基础上下文，语音面试只针对缺失项和薄弱项追问。
                          </p>
                        </div>
                        <div className="p-4 bg-emerald-50/30 rounded-xl border border-emerald-100/50">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] font-bold text-emerald-700">【效果验证】</span>
                          </div>
                          <p className="text-[10px] leading-relaxed mb-3">
                            自己使用AI修改后的简历投递，成功拿到面试机会。
                          </p>
                          <div className="aspect-video bg-black rounded-lg border border-black/5 flex items-center justify-center relative group overflow-hidden cursor-pointer" onClick={() => window.open(jdDemoVideoUrl, '_blank', 'noopener,noreferrer')}>
                            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black" />
                            <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-6">
                              <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center mb-4 shadow-lg">
                                <Play size={24} />
                              </div>
                              <h5 className="mt-2 text-base font-medium">JD 简历工具演示视频</h5>
                              <p className="mt-2 text-[10px] opacity-70">点击后在新标签页打开 Bilibili 演示视频</p>
                            </div>
                            <span className="absolute bottom-2 right-2 text-[8px] font-mono text-white/30">OPEN_VIDEO</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-black/5 pt-8">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div>
                        <h4 className="text-xl font-medium">跨领域生成能力验证</h4>
                        <p className="text-xs opacity-60 mt-2">
                          用同一套工具分别生成 AI 产品经理方向和跨境电商运营方向简历，验证其跨领域改写与表达能力。
                        </p>
                      </div>
                      <span className="case-study-badge">OUTPUT CHECK</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-2xl border border-black/5 p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h5 className="text-sm font-medium">AI 产品经理方向</h5>
                          <button
                            type="button"
                            onClick={() => setSelectedImage(resumeAiPmImg)}
                            className="text-[10px] font-mono opacity-50 hover:opacity-100 transition-opacity"
                          >
                            OPEN
                          </button>
                        </div>
                        <div className="aspect-[3/4] overflow-hidden rounded-xl border border-black/5 bg-[#F4F1E6] cursor-zoom-in" onClick={() => setSelectedImage(resumeAiPmImg)}>
                          <img
                            src={resumeAiPmImg}
                            alt="AI PM Resume Output"
                            className="w-full h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl border border-black/5 p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h5 className="text-sm font-medium">跨境电商运营方向</h5>
                          <button
                            type="button"
                            onClick={() => setSelectedImage(resumeEcommerceOpsImg)}
                            className="text-[10px] font-mono opacity-50 hover:opacity-100 transition-opacity"
                          >
                            OPEN
                          </button>
                        </div>
                        <div className="aspect-[3/4] overflow-hidden rounded-xl border border-black/5 bg-[#F4F1E6] cursor-zoom-in" onClick={() => setSelectedImage(resumeEcommerceOpsImg)}>
                          <img
                            src={resumeEcommerceOpsImg}
                            alt="Ecommerce Ops Resume Output"
                            className="w-full h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bento-card col-span-12 lg:col-span-5 bg-white/60">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-medium">TikTok爆款选品 —— 数据验证 + 差异化创新</h3>
                    <span className="case-study-badge">CASE STUDY B</span>
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="font-mono text-xs uppercase tracking-wider opacity-50">📌 完整选品逻辑</h4>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-mono shrink-0">01</div>
                        <div>
                          <p className="text-xs font-bold">跨平台数据验证</p>
                          <p className="text-[10px] opacity-60">对比亚马逊/Shein数据，确认“瓜皮帽”为稳定出单的真需求。</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-mono shrink-0">02</div>
                        <div>
                          <p className="text-xs font-bold">差异化创新 (自有工厂)</p>
                          <p className="text-[10px] opacity-60">改为简约素色 + 冰丝材质，主打夏季场景，避开直接竞品。</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-mono shrink-0">03</div>
                        <div>
                          <p className="text-xs font-bold">场景化卖点拆解</p>
                          <p className="text-[10px] opacity-60">拆分为骑行内衬、旅行防晒、运动吸湿、脏辫固定等多个细分场景。</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-mono shrink-0">04</div>
                        <div>
                          <p className="text-xs font-bold">数据验证后押注</p>
                          <p className="text-[10px] opacity-60">日均自然出单100+（其他品3-5倍），利润率最高，启动达人分销。</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-emerald-900 text-white rounded-2xl">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-mono opacity-60 uppercase tracking-widest">Final Result</span>
                        <Award size={20} className="text-emerald-400" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-3xl font-mono">10,000+</div>
                          <div className="text-[10px] opacity-60">月销件数</div>
                        </div>
                        <div>
                          <div className="text-3xl font-mono">TOP 3</div>
                          <div className="text-[10px] opacity-60">类目排名</div>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <div className="aspect-square bg-white rounded-lg border border-black/5 flex items-center justify-center relative overflow-hidden group cursor-zoom-in" onClick={() => setSelectedImage(tiktokSalesAnalysisImg)}>
                          <img 
                            src={tiktokSalesAnalysisImg} 
                            alt="TikTok Sales Analysis" 
                            className="w-full h-full object-contain group-hover:opacity-100 transition-opacity"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://placehold.co/400x400/f3f4f6/6b7280?text=TikTok+Sales+Analysis";
                            }}
                          />
                          <span className="absolute bottom-1 left-1 text-[7px] bg-black/50 text-white px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">SALES_ANALYSIS.PNG</span>
                        </div>
                        <div className="aspect-square bg-white rounded-lg border border-black/5 flex items-center justify-center relative overflow-hidden group cursor-zoom-in" onClick={() => setSelectedImage(tiktokMarketRankingOctImg)}>
                          <img 
                            src={tiktokMarketRankingOctImg} 
                            alt="TikTok Market Ranking" 
                            className="w-full h-full object-contain group-hover:opacity-100 transition-opacity"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://placehold.co/400x400/f3f4f6/6b7280?text=Market+Ranking";
                            }}
                          />
                          <span className="absolute bottom-1 left-1 text-[7px] bg-black/50 text-white px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">MARKET_RANKING.PNG</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ability 3: Data Driven */}
          <section id="data" className="py-32 px-6 bg-[#E0DCCF]/20">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-black text-white rounded-lg">
                    <BarChart3 size={20} />
                  </div>
                  <span className="retro-tag">ABILITY 03</span>
                </div>
                <h2 className="section-title">数据驱动决策：从异常中寻找增长</h2>
              </div>

              <div className="bento-grid">
                {/* Case A: TikTok Sales Drop */}
                <div className="bento-card col-span-12 lg:col-span-8 bg-white/60">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-medium">TikTok销量暴跌排查 —— 从后台到前台的完整排查闭环</h3>
                      <p className="text-xs opacity-50 mt-1">📌 背景：爆款帽子（品类排名前5）在11月销量突然大幅下跌。</p>
                    </div>
                    <span className="case-study-badge">CASE STUDY A</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-mono text-xs uppercase tracking-wider opacity-50">📌 排查过程</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-black/5 rounded-xl text-[11px] border border-black/5">
                          <p className="font-bold mb-1">【第一轮假设】</p>
                          <p className="opacity-70">假设：亚马逊黑五吸走流量。验证：询问同行。结论：普遍下滑属正常 → 暂时接受。</p>
                        </div>
                        <div className="p-3 bg-red-50/50 rounded-xl text-[11px] border border-red-100/50">
                          <p className="font-bold text-red-800 mb-1">【假设被推翻】</p>
                          <p className="text-red-700/70">黑五结束后销量仍然萎靡。结论："行业普遍下滑"无法解释，需要深挖。</p>
                        </div>
                        <div className="p-3 bg-blue-50/50 rounded-xl text-[11px] border border-blue-100/50">
                          <p className="font-bold text-blue-800 mb-1">【关键转折：从后台到前台】</p>
                          <p className="text-blue-700/70">后台数据无异常。判断：问题在"竞争环境变了"。转到前台以消费者视角搜索。</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-mono text-xs uppercase tracking-wider opacity-50">📌 发现真因与行动</h4>
                      <div className="aspect-video bg-white rounded-xl overflow-hidden border border-black/5 relative group mb-4 cursor-zoom-in" onClick={() => setSelectedImage(tiktokSalesTrendImg)}>
                        <img 
                          src={tiktokSalesTrendImg} 
                          alt="TikTok Sales Trend" 
                          className="w-full h-full object-contain group-hover:opacity-100 transition-opacity"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://placehold.co/800x450/f3f4f6/6b7280?text=TikTok+Sales+Trend";
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                          <span className="text-white text-[10px] font-mono bg-black/50 px-2 py-1 rounded-full">点击查看全图</span>
                        </div>
                      </div>
                      <div className="space-y-2 text-[11px]">
                        <p className="font-bold">发现三个真因：</p>
                        <ul className="list-disc pl-4 space-y-1 opacity-70">
                          <li>大量卖家抄袭图、标题、款式</li>
                          <li>价格Bug：前台显示价格比平时更高</li>
                          <li>没有挂上黑五促销标识</li>
                        </ul>
                        <p className="font-bold mt-3">行动：</p>
                        <ul className="list-disc pl-4 space-y-1 opacity-70">
                          <li>修复价格Bug，争取全站最低报价</li>
                          <li>向平台举报完全抄袭的卖家</li>
                          <li>配合达人带货，放大恢复后的流量</li>
                        </ul>
                      </div>
                      <div className="mt-4 p-4 bg-emerald-900 text-white rounded-xl">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] opacity-60">结果</span>
                          <TrendingUp size={14} className="text-emerald-400" />
                        </div>
                        <p className="text-xs font-medium">销量恢复，排名从第4-5名推到品类第3名。</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-black/5">
                    <p className="text-xs font-serif italic opacity-60 text-center">
                      "当后台数据解释不了问题时，去前台、去用户视角、去竞争环境里找答案。"
                    </p>
                  </div>
                </div>

                {/* Case B: Influencer Negotiation */}
                <div className="bento-card col-span-12 lg:col-span-4 bg-white/60">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-medium">达人佣金谈判 —— 基于数据的商务决策</h3>
                    <span className="case-study-badge">CASE STUDY B</span>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-[#F4F1E6]/50 rounded-xl border border-black/5 text-[11px] space-y-2">
                      <p className="font-bold">📌 背景</p>
                      <p className="opacity-70">非裔达人首轮8%佣金，次轮要求提高到20%。</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="w-5 h-5 rounded bg-black text-white flex items-center justify-center text-[10px] shrink-0">1</div>
                        <p className="text-[11px]"><strong>看数据：</strong>贡献达人渠道1/3销量，带货量排名第一。</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-5 h-5 rounded bg-black text-white flex items-center justify-center text-[10px] shrink-0">2</div>
                        <p className="text-[11px]"><strong>评估隐性价值：</strong>发现“固定脏辫”新场景，打开非裔男性新客群。</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-5 h-5 rounded bg-black text-white flex items-center justify-center text-[10px] shrink-0">3</div>
                        <p className="text-[11px]"><strong>谈判：</strong>谈到12%-15% + 额外样品抽奖激励，兼顾利润与积极性。</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-black/5">
                      <p className="text-[10px] opacity-60 leading-relaxed">
                        <strong>结论：</strong>核心不是"砍价"，而是基于数据判断真实价值，设计双赢方案。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Case C: Xiaohongshu Content */}
                <div className="bento-card col-span-12 bg-[#F4F1E6]">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-medium">小红书内容迭代 —— 用户反馈驱动选题</h3>
                      <p className="text-xs opacity-50 mt-1">📌 数据驱动的内容迭代循环</p>
                    </div>
                    <span className="case-study-badge">CASE STUDY C</span>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
                        <div className="flex-1 p-4 bg-white/80 rounded-2xl border border-black/5 text-center">
                          <p className="text-xs font-bold mb-1">发布内容</p>
                          <p className="text-[10px] opacity-60">英一Tips合集爆款</p>
                        </div>
                        <ArrowRight className="hidden md:block opacity-20" />
                        <div className="flex-1 p-4 bg-white/80 rounded-2xl border border-black/5 text-center">
                          <p className="text-xs font-bold mb-1">看评论区反馈</p>
                          <p className="text-[10px] opacity-60">提取高频细分痛点</p>
                        </div>
                        <ArrowRight className="hidden md:block opacity-20" />
                        <div className="flex-1 p-4 bg-white/80 rounded-2xl border border-black/5 text-center">
                          <p className="text-xs font-bold mb-1">产出新内容</p>
                          <p className="text-[10px] opacity-60">针对性解决痛点</p>
                        </div>
                      </div>
                      <div className="mt-8 p-4 bg-black/5 rounded-xl text-xs italic opacity-60 text-center">
                        这形成了一个数据驱动的内容飞轮：发布内容 → 看反馈 → 提取痛点 → 产出新内容 → 继续循环
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="aspect-[3/4] bg-white rounded-xl flex items-center justify-center relative overflow-hidden group cursor-zoom-in" onClick={() => setSelectedImage(xhsTopNotesImg)}>
                        <img 
                          src={xhsTopNotesImg} 
                          alt="Xiaohongshu Top Notes" 
                          className="w-full h-full object-contain group-hover:opacity-100 transition-opacity"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://placehold.co/400x600/f3f4f6/6b7280?text=XHS+Top+Notes";
                          }}
                        />
                        <span className="absolute bottom-2 text-[8px] font-mono bg-black/50 text-white px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">点击放大</span>
                      </div>
                      <div className="aspect-[3/4] bg-white rounded-xl flex items-center justify-center relative overflow-hidden group cursor-zoom-in" onClick={() => setSelectedImage(xhsFanDataImg)}>
                        <img 
                          src={xhsFanDataImg} 
                          alt="Xiaohongshu Fan Data" 
                          className="w-full h-full object-contain group-hover:opacity-100 transition-opacity"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://placehold.co/400x600/f3f4f6/6b7280?text=XHS+Fan+Data";
                          }}
                        />
                        <span className="absolute bottom-2 text-[8px] font-mono bg-black/50 text-white px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">点击放大</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ability 4: Cross-cultural Collaboration */}
          <section id="collaboration" className="py-32 px-6 bg-[#F4F1E6]">
            <div className="max-w-7xl mx-auto">
              <SectionHeading 
                icon={Globe} 
                title="跨文化协作与商务沟通" 
                subtitle="ABILITY 04" 
              />
              <div className="bento-grid">
                <div className="bento-card col-span-12 lg:col-span-8 bg-white/60">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-medium">达人分销体系搭建（英语全程沟通）</h3>
                    <span className="case-study-badge">01 TO 01</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="p-4 bg-black/5 rounded-xl border border-black/5">
                        <h4 className="text-xs font-bold mb-2">【从0到1建立达人网络】</h4>
                        <p className="text-[11px] opacity-70">通过TikTok站内信用英语触达目标达人，独立负责全链路沟通与建联。</p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-mono text-[10px] uppercase tracking-wider opacity-50">📌 说服策略 —— 三赢模型</h4>
                        <div className="space-y-3">
                          <div className="flex gap-3">
                            <div className="w-8 h-8 rounded bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold shrink-0">达人</div>
                            <p className="text-[10px] opacity-70">赚取佣金 (8%/12%/15%) + 免费样品 + 热门内容自带流量帮达人涨粉。</p>
                          </div>
                          <div className="flex gap-3">
                            <div className="w-8 h-8 rounded bg-blue-100 text-blue-800 flex items-center justify-center text-[10px] font-bold shrink-0">品牌</div>
                            <p className="text-[10px] opacity-70">获得外部流量与销量增长 + 丰富商品使用场景 + 扩大品牌影响力。</p>
                          </div>
                          <div className="flex gap-3">
                            <div className="w-8 h-8 rounded bg-orange-100 text-orange-800 flex items-center justify-center text-[10px] font-bold shrink-0">粉丝</div>
                            <p className="text-[10px] opacity-70">参与样品抽奖活动 + 获得真正符合画像需求的高质量产品。</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="p-5 bg-black text-white rounded-2xl">
                        <h4 className="text-xs font-bold mb-3 flex items-center gap-2">
                          <Zap size={14} className="text-orange-400" /> 核心逻辑
                        </h4>
                        <p className="text-[11px] opacity-80 leading-relaxed">
                          不是求人帮忙带货，而是设计一个"达人、品牌、粉丝"三方都受益的合作结构。
                        </p>
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <div className="text-2xl font-mono text-orange-400">+75% - 150%</div>
                          <div className="text-[9px] opacity-50 uppercase tracking-widest">达人渠道 GMV 增长</div>
                        </div>
                      </div>
                      <div className="p-4 bg-white/80 rounded-xl border border-black/5">
                        <h4 className="text-xs font-bold mb-2">📌 意外发现：达人作为"需求发现者"</h4>
                        <p className="text-[10px] opacity-60 leading-relaxed">
                          非裔达人用瓜皮帽固定脏辫的案例说明：达人不只是渠道，更是离用户最近的"产品经理"。
                        </p>
                        <div className="mt-3 flex items-center gap-2 text-[10px] font-medium text-blue-600">
                          <ArrowRight size={12} /> 启示：用户使用方式可能远超设计意图
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bento-card col-span-12 lg:col-span-4 bg-[#1A1A1A] text-white">
                  <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
                    <Target size={18} className="text-emerald-400" /> AI PM 启示录
                  </h3>
                  <div className="space-y-6">
                    <div className="relative pl-4 border-l border-emerald-500/30">
                      <p className="text-xs font-medium mb-1 text-emerald-400">建立反馈通道</p>
                      <p className="text-[11px] opacity-60">
                        建立和用户/KOL的反馈通道，比关在办公室想需求更有效。
                      </p>
                    </div>
                    <div className="relative pl-4 border-l border-emerald-500/30">
                      <p className="text-xs font-medium mb-1 text-emerald-400">理解技术边界</p>
                      <p className="text-[11px] opacity-60">
                        AI不是万能的，知道哪些能做好、哪些做不到，才是真正有价值的认知。
                      </p>
                    </div>
                    <div className="mt-12 aspect-square rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center border border-white/5">
                      <Globe size={64} className="opacity-20 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ability 5: Self-drive & Rapid Learning */}
          <section id="learning" className="py-32 px-6 bg-[#E0DCCF]/10">
            <div className="max-w-7xl mx-auto">
              <SectionHeading 
                icon={Zap} 
                title="自驱力与极速学习" 
                subtitle="ABILITY 05" 
              />
              
              <div className="bento-grid">
                <div className="bento-card col-span-12 lg:col-span-5 bg-white/60">
                  <h3 className="text-2xl font-medium mb-6">我的学习方法论</h3>
                  <div className="space-y-8">
                    <div className="flex flex-col items-center gap-4">
                      {[
                        { title: "了解新技术/工具", icon: Search },
                        { title: "研究能力边界", icon: Target },
                        { title: "思考真实需求", icon: Sparkles },
                        { title: "动手做出来", icon: Zap }
                      ].map((step, i) => (
                        <React.Fragment key={i}>
                          <div className="w-full p-4 bg-white rounded-2xl border border-black/5 flex items-center gap-4 shadow-sm">
                            <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shrink-0">
                              <step.icon size={16} />
                            </div>
                            <span className="text-sm font-medium">{step.title}</span>
                          </div>
                          {i < 3 && <ArrowRight className="rotate-90 opacity-20" size={16} />}
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="p-4 bg-orange-50 rounded-xl border border-orange-100 italic text-xs opacity-70 text-center">
                      "创造一个产品的门槛降到了前所未有的低。在实战中加深理解，是最高效的路径。"
                    </div>
                  </div>
                </div>

                <div className="bento-card col-span-12 lg:col-span-7 bg-white/60">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-xl font-medium">具体案例：极速原型开发</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-black text-white rounded-2xl">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold">JD简历工具</span>
                            <span className="text-[10px] opacity-50">3-4 DAYS</span>
                          </div>
                          <p className="text-[10px] opacity-70">从零完成：搭建 → Debug → UI优化 → 功能迭代。如果只要Demo，一天不到就能跑通。</p>
                        </div>
                        <div className="p-4 bg-[#F4F1E6] rounded-2xl border border-black/5">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold">AI塔罗牌</span>
                            <span className="text-[10px] opacity-50">FEW DAYS</span>
                          </div>
                          <p className="text-[10px] opacity-70">同样在几天内从零做出可用版本，验证了“确定性回答”的 Prompt 策略。</p>
                        </div>
                      </div>

                      <h3 className="text-xl font-medium pt-4">我的信息来源</h3>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="p-3 bg-white rounded-xl border border-black/5 text-center">
                          <div className="text-red-600 mb-1 flex justify-center"><Globe size={16} /></div>
                          <div className="text-[9px] font-bold">YouTube</div>
                          <div className="text-[8px] opacity-50">Builders</div>
                        </div>
                        <div className="p-3 bg-white rounded-xl border border-black/5 text-center">
                          <div className="text-blue-400 mb-1 flex justify-center"><MessageSquare size={16} /></div>
                          <div className="text-[9px] font-bold">Twitter/X</div>
                          <div className="text-[8px] opacity-50">Developers</div>
                        </div>
                        <div className="p-3 bg-white rounded-xl border border-black/5 text-center">
                          <div className="text-emerald-500 mb-1 flex justify-center"><Zap size={16} /></div>
                          <div className="text-[9px] font-bold">Hands-on</div>
                          <div className="text-[8px] opacity-50">Trial</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xl font-medium">学术层面与竞赛佐证</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                            <div className="text-2xl font-mono text-orange-700">3.74</div>
                            <div className="text-[10px] opacity-50">GPA (4.0)</div>
                          </div>
                          <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                            <div className="text-2xl font-mono text-orange-700">TOP 1</div>
                            <div className="text-[10px] opacity-50">RANK (1/120+)</div>
                          </div>
                        </div>
                        <div className="p-4 bg-white rounded-2xl border border-black/5 space-y-2">
                          <div className="flex items-center gap-2 text-xs font-bold text-orange-600">
                            <Award size={14} /> 荣誉奖项
                          </div>
                          <ul className="text-[10px] space-y-1 opacity-70">
                            <li>• 国家奖学金 + 国家励志奖学金</li>
                            <li>• 北京市优秀毕业生</li>
                            <li>• 日日顺创新创业竞赛国家级金奖 (Top 1%)</li>
                            <li>• 数学建模竞赛一等奖</li>
                          </ul>
                        </div>
                        <p className="text-[10px] opacity-50 italic leading-relaxed">
                          "这些不仅是成绩，更是证明我在任何领域都能快速学习并做到头部的能力。"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Gallery */}
          <section id="gallery" className="py-32 px-6 bg-[#E0DCCF]/10">
            <div className="max-w-7xl mx-auto">
              <SectionHeading 
                icon={Globe} 
                title="项目画廊与实战成果" 
                subtitle="GALLERY" 
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { 
                    title: "JD 简历工具演示", 
                    description: "AI 采访与简历重构全流程演示，点击跳转到 Bilibili 查看视频。",
                    url: jdDemoVideoUrl, 
                    type: "video-link" 
                  },
                  { 
                    title: "TikTok 爆款选品榜单", 
                    description: "瓜皮帽单品月销万件，稳居类目 TOP 3。",
                    url: tiktokMarketRankingDecImg, 
                    type: "image" 
                  },
                  { 
                    title: "小红书个人主页", 
                    description: "账号主页展示与内容定位。",
                    url: xhsProfileImg, 
                    type: "image" 
                  },
                  { 
                    title: "小红书内容分析", 
                    description: "高频痛点挖掘与针对性内容迭代。",
                    url: xhsContentListImg, 
                    type: "image" 
                  },
                  { 
                    title: "TikTok 运营数据看板", 
                    description: "实时追踪销售趋势与转化漏斗。",
                    url: tiktokSalesAnalysisImg, 
                    type: "image" 
                  },
                  { 
                    title: "沉浸式 AI 面试与逐字稿重构 Agent", 
                    description: "展示 Mock Interview Agent 的首页与核心交互入口。",
                    url: mockInterviewAgentHomeImg, 
                    type: "image" 
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="group bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all h-fit"
                  >
                    <div
                      className={`relative overflow-hidden bg-white ${item.type === 'image' ? 'cursor-zoom-in' : 'cursor-pointer'}`}
                      onClick={() => {
                        if (item.type === 'image') setSelectedImage(item.url);
                        if (item.type === 'video-link') window.open(item.url, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      {item.type === 'video-link' ? (
                        <div className="aspect-[4/5] bg-black text-white flex flex-col items-center justify-center gap-4 p-8 text-center">
                          <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center">
                            <Play size={28} />
                          </div>
                          <div>
                            <p className="text-xs font-mono opacity-60 uppercase tracking-[0.3em] mb-2">Bilibili Demo</p>
                            <h4 className="text-2xl font-medium">JD 简历工具视频</h4>
                            <p className="text-sm opacity-70 mt-3">点击后在新标签页打开哔哩哔哩视频</p>
                          </div>
                        </div>
                      ) : (
                        <img 
                          src={item.url} 
                          alt={item.title}
                          className="w-full h-auto object-contain group-hover:opacity-100 transition-opacity"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://placehold.co/800x1000/f3f4f6/6b7280?text=${encodeURIComponent(item.title)}`;
                          }}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                        <p className="text-xs font-mono mb-1 opacity-70 uppercase tracking-widest">{item.type === 'video-link' ? 'video' : item.type}</p>
                        <h4 className="text-lg font-medium">{item.title}</h4>
                        <p className="text-xs opacity-80 mt-2 line-clamp-2">{item.description}</p>
                        <div className="mt-4 flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                          {item.type === 'video-link' ? <ExternalLink size={12} /> : <Search size={12} />} {item.type === 'video-link' ? '打开 Bilibili' : '点击查看大图'}
                        </div>
                      </div>
                    </div>
                    <div className="p-4 flex justify-between items-center">
                      <span className="text-[10px] font-mono opacity-40 uppercase tracking-widest">{item.title}</span>
                      <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-16 p-8 bg-black text-white rounded-3xl text-center">
                <h3 className="text-2xl font-medium mb-4">想看更多完整案例？</h3>
                <p className="text-sm opacity-60 mb-8 max-w-xl mx-auto">
                  我还有更多关于 AI 产品原型、TikTok 运营复盘以及跨境电商选品的研究资料，欢迎通过邮件进一步交流。
                </p>
                <button className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
                  <Mail size={18} /> 联系我获取完整资料
                </button>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <footer id="contact" className="py-32 px-6 border-t border-black/5 bg-[#F4F1E6]">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-5xl font-medium mb-8">Let's build the future together.</h2>
              <p className="content-text mb-12 opacity-60">目前正在寻找 AI 产品经理相关机会，欢迎交流与合作。</p>
              
              <div className="flex flex-wrap justify-center gap-8">
                <a href="mailto:jayla8270@gmail.com" className="flex items-center gap-2 text-xl hover:underline">
                  <Mail size={24} /> jayla8270@gmail.com
                </a>
                <div className="flex items-center gap-6">
                  <Github size={24} className="opacity-40 hover:opacity-100 cursor-pointer" />
                  <Linkedin size={24} className="opacity-40 hover:opacity-100 cursor-pointer" />
                </div>
              </div>

              <div className="mt-32 text-[10px] font-mono opacity-30">
                DESIGNED BY JAYLA | POWERED BY FIG_OS v1.0.4 | © 2026
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}
