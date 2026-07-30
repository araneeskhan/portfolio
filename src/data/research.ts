import type { ContentItem } from './types';

export type ResearchPaper = ContentItem;

export const researchData: Record<string, ResearchPaper> = {
  "rag-vs-rrf-research": {
    title: "Evaluating RAG Strategies for Code",
    coverImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    shortDescription:
      "A CNAM Paris master's research paper evaluating Semantic RAG vs Hybrid Reciprocal Rank Fusion for repository-level code understanding using LLM-as-a-Judge.",
    category: "Academic Research",
    status: "Master's Research",
    role: "AI Researcher",
    year: "2026",
    liveUrl: "https://drive.google.com/file/d/11SRyid9YWUwqnwWS7g3OTedsfh_uc9Q3/view?usp=sharing",
    description:
      "An academic research paper titled 'Evaluating Retrieval-Augmented Generation Strategies for Repository-Level Code Understanding'. It investigates the effectiveness of standard dense Semantic Retrieval against a Hybrid Reciprocal Rank Fusion (RRF) approach utilizing BM25. The study built a multi-lingual benchmark (Python, Java, C++) using Tree-sitter AST chunking and Chroma, then scored 100 synthetic technical queries with an automated Llama-3.1-8B responder judged by Llama-3.3-70B, finding Hybrid RRF reaches a mean score of 8.94/10 (σ=1.12) versus 8.15/10 (σ=2.05) for pure semantic retrieval.",
    technologies: [
      "Python",
      "Sentence Transformers",
      "ChromaDB",
      "Llama-3.3-70B",
      "LangChain",
      "Tree-sitter",
    ],
    features: [
      "Multi-lingual AST-aware codebase ingestion using Tree-sitter (Python, Java, C++)",
      "Hybrid RRF pipeline merging dense embeddings (all-MiniLM-L6-v2) with sparse lexical (BM25)",
      "Automated LLM-as-a-Judge pipeline: Llama-3.1-8B answers, Llama-3.3-70B (via Groq) grades",
      "t-SNE and PCA dimensionality reduction for vector space visualization",
    ],
    highlights: [
      "Hybrid RRF outperformed pure semantic retrieval on exact-match, symbol-heavy queries (e.g. up to 9/10 vs 4/10 on a specific internal variable lookup)",
      "Parameter sensitivity ablation confirmed a 50/50 RRF weight split is the optimal balance between dense and sparse retrieval",
      "Latency profiling showed Hybrid RRF stays under 15ms end-to-end despite querying two indexes",
    ],
    metrics: [
      { label: "Dataset", value: "3 Codebases" },
      { label: "Judge Model", value: "Llama-3.3-70B" },
      { label: "Focus", value: "RAG Architecture" },
    ],
    screenshots: [{ path: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop", type: "web" }],
  },
  "dns-cache-poisoning": {
    title: "Resurrecting DNS Cache Poisoning: ICMP Side-Channels + ML Detection",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    shortDescription:
      "A network security research paper analyzing a Linux kernel ICMP side-channel that defeats DNS source-port randomization, proposing a deterministic 0x20 + TCP Hybrid Defense plus a machine learning detection layer.",
    category: "Academic Research",
    status: "Cybersecurity Research",
    role: "Security Researcher",
    year: "2026",
    liveUrl: "https://drive.google.com/file/d/1dDXTXJaPmjgF5dOSJ9IZksL_hgoCNE-k/view?usp=sharing",
    description:
      "An in-depth network security paper analyzing 'DNS Cache Poisoning Attack: Resurrections with Side Channels' (CCS 2020), which shows the Linux kernel's ICMP error processing leaks a resolver's randomized UDP source port via the Next Hop Exception (fnhe) cache, collapsing 32 bits of entropy to 16. The paper critiques the original mitigations, proposes a deterministic '0x20 + TCP Hybrid Defense' that forces an unspoofable TCP retry on capitalization mismatch, and adds a machine learning detection layer: a Random Forest classifier trained on a synthetic, attack-mechanics-grounded dataset reaches 94.7% accuracy and 0.944 ROC-AUC at flagging the ICMP reconnaissance traffic itself, as a proof of concept.",
    technologies: [
      "Linux Kernel",
      "UDP/TCP",
      "DNS Protocols",
      "ICMP",
      "Network Security",
      "Python",
      "scikit-learn",
      "Random Forest",
    ],
    features: [
      "Analysis of Linux kernel fnhe (Next Hop Exception) side-channel leakage",
      "Critique of industry-standard mitigations regarding Path MTU Discovery DoS risks",
      "Proposal of a Deterministic 0x20 + TCP Hybrid Defense utilizing randomized capitalization",
      "ML detection layer: 6 traffic features (probe rate, port-guess spread, TTL anomaly, jitter, etc.) trained on a synthetic proof-of-concept dataset",
    ],
    highlights: [
      "Identified critical flaws in 'security by obscurity' mitigations for cache poisoning",
      "Shifted defense paradigm from probabilistic races to deterministic TCP handshake guarantees",
      "Random Forest classifier reached 94.7% accuracy / 0.944 AUC detecting ICMP port-scanning reconnaissance on synthetic data, with port-guess spread and probe rate as the dominant features",
    ],
    metrics: [
      { label: "Domain", value: "Network Security" },
      { label: "Detection AUC", value: "0.944" },
      { label: "Institution", value: "CNAM Paris" },
    ],
    screenshots: [{ path: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop", type: "web" }],
  },
  "federated-learning-medical": {
    title: "Federated Learning on PathMNIST: A BatchNorm Root-Cause Audit",
    coverImage: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2070&auto=format&fit=crop",
    shortDescription:
      "A federated learning study on PathMNIST that traces a near-random-accuracy, ResNet18-diverging pilot run to a BatchNorm synchronization bug in the FL client code, and fixes it.",
    category: "Academic Research",
    status: "Distributed AI Research",
    role: "AI Researcher",
    year: "2026",
    liveUrl: "https://drive.google.com/file/d/1ajy7hcNnDw8FX4zwzEPz1f5T-V4xykzG/view?usp=sharing",
    description:
      "An AI4CI research project implementing a federated learning system for colorectal cancer histology classification on PathMNIST, comparing SimpleCNN and ResNet18 under FedAvg and FedProx with the Flower (flwr) framework. A pilot run reported near-random accuracy and a validation loss for ResNet18 that diverged to 10^14. Rather than attributing this to too few rounds, a source-level code audit traced it to two concrete bugs: BatchNorm running statistics were excluded from parameter federation (so per-client normalization stats were never synchronized), and final test evaluation benchmarked a single client's locally-drifted model instead of the true aggregated global model. Both are fixed in the codebase; a full re-validation run on the 16-configuration grid (including the still-unmeasured non-IID comparisons) is the recommended next step.",
    technologies: [
      "PyTorch",
      "Flower (flwr)",
      "Federated Learning",
      "ResNet18",
      "CNNs",
      "Google Colab (T4)",
    ],
    features: [
      "Implementation of FedAvg and FedProx aggregation algorithms with proximal penalty terms",
      "Dirichlet distribution processing to simulate Non-IID clinical client data heterogeneity",
      "ResNet18 adaptation for small 28x28 medical images (removing max-pooling)",
      "Source-level audit of the Flower client/server code identifying a BatchNorm buffer desynchronization bug",
    ],
    highlights: [
      "Diagnosed why ResNet18 (20 BatchNorm layers) diverged far worse than SimpleCNN (3 BatchNorm layers): running_mean/running_var buffers were never included in parameter federation",
      "Found and fixed a second bug where final test evaluation used a client's locally-drifted model instead of the server-aggregated global model",
      "Rebuilt parameter sync around full state_dict() serialization so BatchNorm statistics are now properly federated every round",
    ],
    metrics: [
      { label: "Framework", value: "Flower (flwr)" },
      { label: "Dataset", value: "PathMNIST" },
      { label: "Root Cause", value: "BatchNorm Desync" },
    ],
    screenshots: [{ path: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2070&auto=format&fit=crop", type: "web" }],
  },
};
