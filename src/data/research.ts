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
      "An academic research paper titled 'Evaluating Retrieval-Augmented Generation Strategies for Repository-Level Code Understanding'. It investigates the effectiveness of standard dense Semantic Retrieval against a Hybrid Reciprocal Rank Fusion (RRF) approach utilizing BM25. The study utilized an automated Llama-3-70B LLM-as-a-Judge pipeline to grade performance across a multi-lingual dataset (Python, Java, C++) built using Tree-sitter AST chunking.",
    technologies: [
      "Python",
      "Sentence Transformers",
      "ChromaDB",
      "Llama-3-70B",
      "LangChain",
      "Tree-sitter",
    ],
    features: [
      "Multi-lingual AST-aware codebase ingestion using Tree-sitter (Python, Java, C++)",
      "Hybrid RRF pipeline merging dense embeddings (all-MiniLM-L6-v2) with sparse lexical (BM25)",
      "Automated LLM-as-a-Judge pipeline utilizing Llama-3-70B via Groq for unbiased scoring",
      "t-SNE dimensionality reduction for vector space visualization",
    ],
    highlights: [
      "Proved Hybrid RRF vastly outperforms pure semantic retrieval on exact-match namespace queries",
      "Conducted parameter sensitivity ablation studies proving a 50/50 RRF weight split is mathematically optimal",
      "Demonstrated robust context window analytics maintaining low token footprint under 8k tokens",
    ],
    metrics: [
      { label: "Dataset", value: "3 Codebases" },
      { label: "Judge Model", value: "Llama-3-70B" },
      { label: "Focus", value: "RAG Architecture" },
    ],
    screenshots: [{ path: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop", type: "web" }],
  },
  "dns-cache-poisoning": {
    title: "DNS Cache Poisoning Defense",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    shortDescription:
      "A network security research paper analyzing Linux kernel side-channel vulnerabilities and proposing a deterministic 0x20 + TCP Hybrid Defense.",
    category: "Academic Research",
    status: "Cybersecurity Research",
    role: "Security Researcher",
    year: "2026",
    liveUrl: "https://drive.google.com/file/d/1dDXTXJaPmjgF5dOSJ9IZksL_hgoCNE-k/view?usp=sharing",
    description:
      "An in-depth network security paper critiquing 'DNS Cache Poisoning Attack: Resurrections with Side Channels'. It analyzes how attackers can exploit Linux kernel ICMP error processing (Next Hop Exception cache) to infer randomized UDP source ports. Rather than disabling PMTUD, this research proposes a novel '0x20 + TCP Hybrid Defense' which preemptively forces transactions to retry over a 3-way TCP handshake when capitalization anomalies are detected.",
    technologies: [
      "Linux Kernel",
      "UDP/TCP",
      "DNS Protocols",
      "ICMP",
      "Network Security",
    ],
    features: [
      "Analysis of Linux kernel fnhe (Next Hop Exception) side-channel leakage",
      "Critique of industry-standard mitigations regarding Path MTU Discovery DoS risks",
      "Proposal of a Deterministic 0x20 + TCP Hybrid Defense utilizing randomized capitalization",
    ],
    highlights: [
      "Identified critical flaws in 'security by obscurity' mitigations for cache poisoning",
      "Shifted defense paradigm from probabilistic races to deterministic TCP handshake guarantees",
      "Explored legacy middlebox incompatibility challenges with 0x20 encoding",
    ],
    metrics: [
      { label: "Domain", value: "Network Security" },
      { label: "Protocol", value: "DNS/UDP" },
      { label: "Institution", value: "CNAM Paris" },
    ],
    screenshots: [{ path: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop", type: "web" }],
  },
  "federated-learning-medical": {
    title: "Medical Federated Learning",
    coverImage: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2070&auto=format&fit=crop",
    shortDescription:
      "Distributed machine learning research using PathMNIST to compare FedAvg and FedProx strategies on ResNet18 and SimpleCNN architectures.",
    category: "Academic Research",
    status: "Distributed AI Research",
    role: "AI Researcher",
    year: "2026",
    liveUrl: "https://drive.google.com/file/d/1fKd4gCgJq_SX_37h6buJ0B-XwmSj3uUu/view?usp=sharing",
    description:
      "An AI4CI research project implementing a federated learning system for colorectal cancer histology classification using the PathMNIST dataset. It experimentally compares SimpleCNN and ResNet18 model architectures against FedAvg and FedProx aggregation strategies across simulated Non-IID distributed clients using the Flower (flwr) framework.",
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
      "Distributed training loops over simulated Flower network clients",
    ],
    highlights: [
      "Demonstrated that FedProx produces substantially more stable convergence than FedAvg on Non-IID distributions",
      "Discovered gradient explosion instability when applying FedAvg to deep residual networks without clipping",
      "Contrasted shallow network (SimpleCNN) robustness against deeper network drift in low communication round environments",
    ],
    metrics: [
      { label: "Framework", value: "Flower (flwr)" },
      { label: "Dataset", value: "PathMNIST" },
      { label: "Models", value: "ResNet & CNN" },
    ],
    screenshots: [{ path: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2070&auto=format&fit=crop", type: "web" }],
  },
};
